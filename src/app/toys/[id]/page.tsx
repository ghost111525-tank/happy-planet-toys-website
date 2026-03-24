import { toysData } from '../../../data/mock';
import Link from 'next/link';
import styles from './detail.module.css';

export function generateStaticParams() {
  return toysData.map((toy) => ({
    id: toy.id,
  }));
}

export default function ToyDetail({ params }: { params: { id: string } }) {
  const toy = toysData.find(t => t.id === params.id);
  
  if (!toy) {
    return <div className={styles.notFound}><h1>玩具走丢啦！🦄</h1><Link href="/toys" className="fun-button">返回玩具中心</Link></div>;
  }

  return (
    <div className={styles.detailContainer}>
      <Link href="/toys" className={styles.backLink}>&larr; 返回所有玩具</Link>
      
      <div className={styles.productLayout}>
        <div className={styles.imgSection}>
          <div className={styles.imgWrapper}>
            <img src={toy.img} alt={toy.name} className={`${styles.mainImg} animate-float`} />
          </div>
        </div>
        
        <div className={styles.infoSection}>
          <div className={styles.badge}>{toy.category === 'plush' ? '毛绒玩具' : toy.category === 'block' ? '益智积木' : '电子宠物'}</div>
          <h1 className={styles.title}>{toy.name}</h1>
          <p className={styles.price}>{toy.price}</p>
          
          <div className={styles.descBox}>
            <h3>✨ 专属奇妙故事</h3>
            <p>{toy.fullDesc}</p>
          </div>
          
          <div className={styles.features}>
            <h3>🌟 核心闪光点</h3>
            <ul>
              {toy.features.map((feat, idx) => (
                <li key={idx} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  <span className={styles.checkIcon}>✔</span> {feat}
                </li>
              ))}
            </ul>
          </div>
          
          <button className={`fun-button ${styles.buyBtn} animate-wobble`}>
            🛍️ 放进购物车
          </button>
        </div>
      </div>
    </div>
  );
}
