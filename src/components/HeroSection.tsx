import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className="animate-fade-in-up">开启充满欢乐的奇妙之旅 🌟</h1>
        <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          为所有年龄段的孩子设计，既安全又好玩的玩具天地。让每一个梦想在欢乐星球起飞！探索我们的童趣宇宙。
        </p>
        <div className={styles.buttons} style={{ animationDelay: '0.4s' }}>
          <button className="fun-button">查看最新玩具</button>
          <button className={`${styles.outlineBtn} animate-wobble`}>播放宣传片 🎬</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/hero_banner.png" alt="欢乐星球玩具" className={`${styles.heroImg} animate-float`} />
        {/* 装饰元素 */}
        <div className={`${styles.decoration} ${styles.star1} animate-wobble`}>⭐</div>
        <div className={`${styles.decoration} ${styles.star2} animate-wobble`}>🎈</div>
      </div>
    </section>
  );
}
