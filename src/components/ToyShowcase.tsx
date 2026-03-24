import Link from 'next/link';
import styles from './ToyShowcase.module.css';
import { prisma } from '../lib/prisma';

export default async function ToyShowcase() {
  const toysData = await prisma.toy.findMany({ take: 3 });

  return (
    <section className={styles.showcase}>
      <h2>人气玩具明星 ✨</h2>
      <p className={styles.subtitle}>探索我们的热销星款，由全栈后台实时管控发放！</p>
      
      <div className={styles.cards}>
        {toysData.map((toy) => (
          <div key={toy.id} className={styles.card}>
            <img src={toy.img} alt={toy.name} className="animate-wobble" />
            <h3>{toy.name}</h3>
            <p>{toy.desc}</p>
            <span className={styles.price}>{toy.price}</span>
            <Link href={`/toys/${toy.id}`}><button className={styles.buyBtn}>查看详情</button></Link>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
         <Link href="/toys" className={`${styles.ctaButton} fun-button`}>查看所有玩具库 🧸</Link>
      </div>
    </section>
  );
}
