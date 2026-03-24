import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import styles from './detail.module.css';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function generateStaticParams() {
  const toys = await prisma.toy.findMany();
  return toys.map((toy) => ({ id: toy.id }));
}

export default async function ToyDetail({ params }: { params: { id: string } }) {
  const toy = await prisma.toy.findUnique({ where: { id: params.id } });

  if (!toy) {
    notFound();
  }

  const features = JSON.parse(toy.features || '[]');

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.imageColumn}>
          <div className={styles.mainImage}>
             <img src={toy.img} alt={toy.name} className="animate-float" />
          </div>
        </div>
        <div className={styles.infoColumn}>
          <span className={styles.badge}>{toy.category} 系列</span>
          <h1 className={styles.title}>{toy.name}</h1>
          <p className={styles.price}>{toy.price}</p>
          
          <div className={styles.divider}></div>
          
          <p className={styles.description}>{toy.fullDesc}</p>
          
          <div className={styles.features}>
            <h3>✨ 玩具闪光点：</h3>
            <ul>
              {features.map((feature: string, idx: number) => (
                <li key={idx}> {feature} </li>
              ))}
            </ul>
          </div>
          
          <button className={styles.addToCartBtn}>加入购物车 🛒</button>
        </div>
      </div>
    </div>
  );
}
