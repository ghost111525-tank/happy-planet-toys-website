import PageHeader from '../../components/PageHeader';
import { toysData } from '../../data/mock';
import Link from 'next/link';
import styles from './page.module.css';

export default function ToysPage() {
  return (
    <div>
      <PageHeader 
        title="奇妙玩具中心" 
        subtitle="在这里，每一个玩具都拥有自己的魔法故事。快来寻找属于你的完美好伙伴吧！" 
        emoji="🎁" 
      />
      <div className={styles.container}>
        <div className={styles.grid}>
          {toysData.map(toy => (
            <Link href={`/toys/${toy.id}`} key={toy.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={toy.img} alt={toy.name} className={styles.toyImg} />
                <div className={styles.badge}>{toy.category === 'plush' ? '毛绒安抚' : toy.category === 'block' ? '益智积木' : '电子发光'}</div>
              </div>
              <div className={styles.cardInfo}>
                <h3>{toy.name}</h3>
                <p>{toy.desc}</p>
                <div className={styles.cardBottom}>
                  <span className={styles.price}>{toy.price}</span>
                  <span className={styles.viewMore}>查看详情 &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
