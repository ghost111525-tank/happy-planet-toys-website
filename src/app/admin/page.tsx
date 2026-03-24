import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import styles from './admin.module.css';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default async function AdminDashboard() {
  const settings = await prisma.siteConfig.findFirst() || await prisma.siteConfig.create({ data: {} });
  let toys = await prisma.toy.findMany();
  if (toys.length === 0) {
    const defaultToys = [
      { id: 'bear', name: '软绵绵小绒熊', desc: '采用优质亲肤材料，宝宝入睡的神奇安抚物。', fullDesc: '我们的软绵绵小绒熊专为初生婴儿设计，采用有机棉花填充，不含任何有害染料。让孩子在温暖的抱抱中安心入眠。', price: '¥129', img: '/toy_bear.png', category: 'plush', features: JSON.stringify(['可机洗', '无毒素', '极度柔软']) },
      { id: 'blocks', name: '智慧森林积木', desc: '采用可食用水性漆，激发宝宝无限创意。', fullDesc: '智慧森林积木包含64块不同形状和颜色的实木积木。这些积木通过严格的吞咽测试标准，涂层采用安全健康的可食用水性漆。', price: '¥258', img: '/toy_blocks.png', category: 'educational', features: JSON.stringify(['开发智力', '锻炼手眼协调', '环保材料']) },
      { id: 'top', name: '星空梦幻陀螺', desc: '旋转时会发光并播放安眠曲的精美陀螺。', fullDesc: '星空梦幻陀螺是欢乐星球的明星单品。只需要轻轻一按，内部的微型音乐盒便会缓缓唱起柔和的摇篮曲。', price: '¥89', img: '/toy_top.png', category: 'interactive', features: JSON.stringify(['内置音乐', '柔和彩光', '耐摔设计']) }
    ];
    for (const toy of defaultToys) {
      await prisma.toy.create({ data: toy });
    }
    toys = await prisma.toy.findMany();
  }

  // Next.js Server Actions
  async function updateSettings(formData: FormData) {
    'use server';
    await prisma.siteConfig.update({
      where: { id: settings.id },
      data: {
        siteName: formData.get('siteName') as string,
        logoUrl: formData.get('logoUrl') as string,
        navToys: formData.get('navToys') as string,
        navAbout: formData.get('navAbout') as string,
      }
    });
    revalidatePath('/', 'layout');
  }

  async function deleteToy(formData: FormData) {
    'use server';
    await prisma.toy.delete({ where: { id: formData.get('id') as string } });
    revalidatePath('/toys');
    revalidatePath('/admin');
  }

  return (
    <div className={styles.adminContainer}>
      <header>
        <h1>⚙️ 欢乐星球 - 后台管理控制台</h1>
        <p>所见即所得的全局内容中枢管理系统。</p>
      </header>

      <section className={styles.card}>
        <h2>基本配置管理</h2>
        <form action={updateSettings} className={styles.formGroup}>
          <label>全站名称：<input name="siteName" defaultValue={settings.siteName} /></label>
          <label>Logo 资源路径：<input name="logoUrl" defaultValue={settings.logoUrl} /></label>
          <label>导航 - 玩具入口名：<input name="navToys" defaultValue={settings.navToys} /></label>
          <label>导航 - 介绍入口名：<input name="navAbout" defaultValue={settings.navAbout} /></label>
          <button type="submit" className={styles.btnPrimary}>保存基本配置</button>
        </form>
      </section>

      <section className={styles.card}>
        <h2>商品/玩具管理 ({toys.length}款产品)</h2>
        <table className={styles.table}>
          <thead><tr><th>ID</th><th>名称</th><th>价格</th><th>分类</th><th>操作</th></tr></thead>
          <tbody>
            {toys.map(toy => (
              <tr key={toy.id}>
                <td>{toy.id}</td>
                <td>{toy.name}</td>
                <td>{toy.price}</td>
                <td>{toy.category}</td>
                <td>
                  <form action={deleteToy}>
                    <input type="hidden" name="id" value={toy.id} />
                    <button type="submit" className={styles.btnDanger}>下架删除</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '20px', color: '#888' }}>
          * 说明：通过后台上传及富文本编辑添加新商品需要对接对象存储（如 Vercel Blob）。本版暂时展示下架删除功能及读库遍历能力。
        </div>
      </section>
    </div>
  );
}
