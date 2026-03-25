import { prisma } from '../../lib/prisma';
import styles from './admin.module.css';
import { updateConfig, handleToy, handleHonor, handleTeam, handlePartner } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const settings = await prisma.siteConfig.findFirst() || await prisma.siteConfig.create({ data: {} });
  let toys = await prisma.toy.findMany();
  let honors = await prisma.honor.findMany();
  let team = await prisma.teamMember.findMany();
  let partners = await prisma.partner.findMany();

  if (toys.length === 0) {
    const defaultToys = [
      { id: 'bear', name: '软绵绵小绒熊', desc: '采用优质亲肤材料，宝宝入睡的神奇安抚物。', fullDesc: '我们的软绵绵小绒熊专为初生婴儿设计，安全无毒极度柔软。', price: '¥129', img: '/toy_bear.png', category: 'plush', features: JSON.stringify(['可机洗', '无毒素', '极度柔软']) },
      { id: 'blocks', name: '智慧森林积木', desc: '采用可食用水性漆，激发宝宝无限创意。', fullDesc: '智慧森林积木包含64块不同形状和颜色的实木积木。', price: '¥258', img: '/toy_blocks.png', category: 'educational', features: JSON.stringify(['开发智力', '锻炼手眼协调', '环保材料']) },
      { id: 'top', name: '星空梦幻陀螺', desc: '旋转时会发光并播放安眠曲的精美陀螺。', fullDesc: '星空梦幻陀螺是欢乐星球的明星单品。', price: '¥89', img: '/toy_top.png', category: 'interactive', features: JSON.stringify(['内置音乐', '柔和彩光', '耐摔设计']) }
    ];
    for (const t of defaultToys) { await prisma.toy.create({ data: t }); }
    toys = await prisma.toy.findMany();
  }

  if (honors.length === 0) {
    await prisma.honor.create({ data: { year: '2023', title: '创新玩具金奖', org: '全球儿童玩具协会' } });
    await prisma.honor.create({ data: { year: '2022', title: '最受欢迎设计', org: '泛亚育儿盛典' } });
    honors = await prisma.honor.findMany();
  }

  if (team.length === 0) {
    await prisma.teamMember.create({ data: { name: '魔法姐姐 Lily', avatar: '👩🏻‍🦰', role: '首席主创', slogan: '把最好的云朵做成玩具' }});
    team = await prisma.teamMember.findMany();
  }

  if (partners.length === 0) {
    await prisma.partner.create({ data: { name: '云朵棉花星球', icon: '☁️' } });
    partners = await prisma.partner.findMany();
  }

  return (
    <div className={styles.adminContainer}>
      <header>
        <h1>⚙️ 欢乐星球 - 全站内容超级后台</h1>
        <p>所见即所得的全局内容中枢管理系统。</p>
      </header>

      <section className={styles.card}>
        <h2>基本配置 & 首页文案配置</h2>
        <form action={updateConfig} className={styles.formGroup}>
          <label>全站Logo：<input name="logoUrl" defaultValue={settings.logoUrl} /></label>
          <label>全站名称：<input name="siteName" defaultValue={settings.siteName} /></label>
          <label>导航-玩具：<input name="navToys" defaultValue={settings.navToys} /></label>
          <label>导航-关于：<input name="navAbout" defaultValue={settings.navAbout} /></label>
          <label>导航-荣誉：<input name="navHonors" defaultValue={settings.navHonors} /></label>
          <label>导航-团队：<input name="navTeam" defaultValue={settings.navTeam} /></label>
          <label>导航-伙伴：<input name="navParts" defaultValue={settings.navParts} /></label>
          <hr />
          <label>首页大标题：<input name="homeTitle" defaultValue={settings.homeTitle} /></label>
          <label>首页副标题：<textarea name="homeSub" defaultValue={settings.homeSub}></textarea></label>
          <label>关于栏标题：<input name="aboutTitle" defaultValue={settings.aboutTitle} /></label>
          <label>关于文本段1：<textarea name="aboutText1" defaultValue={settings.aboutText1}></textarea></label>
          <label>关于文本段2：<textarea name="aboutText2" defaultValue={settings.aboutText2}></textarea></label>
          <button type="submit" className={styles.btnPrimary}>保存全站设定</button>
        </form>
      </section>

      <section className={styles.card}>
        <h2>玩具库管理 ({toys.length}款)</h2>
        <table className={styles.table}>
          <thead><tr><th>名称</th><th>操作 (双击保存直接更新)</th></tr></thead>
          <tbody>
            {toys.map(toy => (
              <tr key={toy.id}>
                <td colSpan={2}>
                  <form action={handleToy} className={styles.formGroup} style={{flexDirection:'row', display:'flex', gap:'5px', alignItems:'center'}}>
                    <input type="hidden" name="id" value={toy.id} />
                    <input type="hidden" name="_action" value="update" />
                    <input name="name" defaultValue={toy.name} style={{flex:1}} />
                    <input name="price" defaultValue={toy.price} style={{width:'80px'}} />
                    <input name="desc" defaultValue={toy.desc} style={{flex:2}} />
                    <button type="submit" className={styles.btnPrimary}>修改</button>
                  </form>
                  <form action={handleToy} style={{marginTop: '5px'}}>
                     <input type="hidden" name="id" value={toy.id} />
                     <input type="hidden" name="_action" value="delete" />
                     <button type="submit" className={styles.btnDanger}>永久下架此玩具</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <h3 style={{marginTop: '20px'}}>✨ 添加全新玩具</h3>
        <form action={handleToy} className={styles.formGroup} style={{display:'flex', gap:'10px', flexWrap:'wrap', flexDirection:'row'}}>
           <input type="hidden" name="_action" value="add" />
           <input name="name" placeholder="名称 (如 小海豚)" required />
           <input name="price" placeholder="价格 (如 ¥99)" required />
           <input name="img" placeholder="图片URL" defaultValue="/logo.png" />
           <input name="category" placeholder="分类" defaultValue="plush" />
           <input name="desc" placeholder="一句话简介" style={{width:'100%'}} />
           <input name="fullDesc" placeholder="完整详细介绍" style={{width:'100%'}} />
           <input name="features" placeholder='特点数组 (如 ["安全", "耐摔"])' defaultValue='["安全发光", "精美"]' style={{width:'100%'}} />
           <button type="submit" className={styles.btnPrimary} style={{width:'100%'}}>录入新商品</button>
        </form>
      </section>

      <section className={styles.card}>
        <h2>荣誉大厅管理</h2>
        {honors.map(h => (
           <div key={h.id} style={{display:'flex', gap:'10px', marginBottom:'10px', alignItems:'center'}}>
              {h.year} - {h.title} ({h.org})
              <form action={handleHonor}><input type="hidden" name="id" value={h.id}/><input type="hidden" name="_action" value="delete"/><button className={styles.btnDanger}>删除</button></form>
           </div>
        ))}
        <hr style={{margin:'20px 0'}}/>
        <form action={handleHonor} className={styles.formGroup} style={{flexDirection:'row'}}>
           <input type="hidden" name="_action" value="add" />
           <input name="year" placeholder="年份" required />
           <input name="title" placeholder="奖项" required />
           <input name="org" placeholder="颁发机构" required />
           <button type="submit" className={styles.btnPrimary}>添加荣誉</button>
        </form>
      </section>

      <section className={styles.card}>
        <h2>团队风采管理</h2>
        {team.map(t => (
           <div key={t.id} style={{display:'flex', gap:'10px', marginBottom:'10px', alignItems:'center'}}>
              {t.avatar} {t.name} - {t.role}
              <form action={handleTeam}><input type="hidden" name="id" value={t.id}/><input type="hidden" name="_action" value="delete"/><button className={styles.btnDanger}>删除</button></form>
           </div>
        ))}
        <hr style={{margin:'20px 0'}}/>
        <form action={handleTeam} className={styles.formGroup} style={{flexDirection:'row'}}>
           <input type="hidden" name="_action" value="add" />
           <input name="avatar" placeholder="头像(Emoji)" defaultValue="👨‍⚕️" required style={{width:'50px'}} />
           <input name="name" placeholder="姓名" required />
           <input name="role" placeholder="头衔" required />
           <input name="slogan" placeholder="口号" style={{flex:1}} />
           <button type="submit" className={styles.btnPrimary}>添加组员</button>
        </form>
      </section>

      <section className={styles.card}>
        <h2>合作伙伴管理</h2>
        {partners.map(p => (
           <div key={p.id} style={{display:'flex', gap:'10px', marginBottom:'10px', alignItems:'center'}}>
              {p.icon} {p.name}
              <form action={handlePartner}><input type="hidden" name="id" value={p.id}/><input type="hidden" name="_action" value="delete"/><button className={styles.btnDanger}>删除</button></form>
           </div>
        ))}
        <hr style={{margin:'20px 0'}}/>
        <form action={handlePartner} className={styles.formGroup} style={{flexDirection:'row'}}>
           <input type="hidden" name="_action" value="add" />
           <input name="icon" placeholder="图标(Emoji)" defaultValue="🤝" required style={{width:'50px'}} />
           <input name="name" placeholder="伙伴名称" required style={{flex:1}} />
           <button type="submit" className={styles.btnPrimary}>添加伙伴</button>
        </form>
      </section>
      
    </div>
  );
}
