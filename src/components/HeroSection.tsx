import styles from './HeroSection.module.css';
import { prisma } from '../lib/prisma';

export default async function HeroSection() {
  const config = await prisma.siteConfig.findFirst() || {} as any;
  
  return (
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="animate-float">{config.homeTitle || "开启充满欢乐的奇妙之旅 🌟"}</h1>
          <p>{config.homeSub || "为所有年龄段的孩子设计，既安全又好玩的玩具天地。让每一个梦想在欢乐星球起飞！探索我们的童趣宇宙。"}</p>
          <button className={`${styles.ctaButton} fun-button`}>探索神奇玩具盒</button>
        </div>
        <div className={styles.heroImage}>
           <img src="/hero_banner.png" alt="欢乐星球的玩具城堡" />
        </div>
      </section>
  );
}
