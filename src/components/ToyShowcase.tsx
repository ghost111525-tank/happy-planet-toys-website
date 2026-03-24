import styles from './ToyShowcase.module.css';

const toys = [
  { id: 1, name: '软绵绵小绒熊', desc: '采用优质亲肤材料，宝宝入睡的神奇安抚物。', img: '/toy_bear.png', price: '¥129' },
  { id: 2, name: '益智色彩积木', desc: '学习颜色与形状的最佳伙伴，激发无限想象力。', img: '/toy_blocks.png', price: '¥89' },
  { id: 3, name: '音乐旋转陀螺', desc: '带有发光和音乐效果，让孩子目不转睛的奇妙玩具。', img: '/toy_top.png', price: '¥59' },
];

export default function ToyShowcase() {
  return (
    <section id="toys" className={styles.showcase}>
      <div className={styles.header}>
        <h2 className="animate-fade-in-up">人气玩具明星 ✨</h2>
        <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          探索我们的热销星款，把无尽的快乐带回家！
        </p>
      </div>
      <div className={styles.grid}>
        {toys.map(toy => (
          <div key={toy.id} className={styles.card}>
            <div className={styles.imgWrapper}>
              <img src={toy.img} alt={toy.name} className={styles.toyImg} />
            </div>
            <div className={styles.cardInfo}>
              <h3>{toy.name}</h3>
              <p>{toy.desc}</p>
              <div className={styles.cardBottom}>
                <span className={styles.price}>{toy.price}</span>
                <button className="fun-button" style={{ padding: '8px 20px', fontSize: '1rem' }}>🛒 抢购</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
