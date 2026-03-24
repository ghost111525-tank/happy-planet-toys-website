import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import { PrismaClient } from '@prisma/client';
import styles from './page.module.css';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default async function ToysPage() {
  const toysData = await prisma.toy.findMany();

  return (
    <div>
      <PageHeader 
        title="奇妙玩具中心" 
        subtitle="在这里发现无限可能！这可是由最新的全栈数据库实时渲染呈现的哦 ✨" 
        emoji="🧸" 
      />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {toysData.map((toy) => (
            <Link href={`/toys/${toy.id}`} key={toy.id} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={toy.img} alt={toy.name} className="animate-float" />
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{toy.category === 'plush' ? '毛绒安抚' : toy.category === 'educational' ? '益智启蒙' : '互动发声'}</span>
                <h2>{toy.name}</h2>
                <p className={styles.price}>{toy.price}</p>
                <p className={styles.desc}>{toy.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
