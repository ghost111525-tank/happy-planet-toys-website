import PageHeader from '../../components/PageHeader';
import styles from './about.module.css';
import { prisma } from '../../lib/prisma';

export default async function AboutPage() {
  const config = await prisma.siteConfig.findFirst() || {} as any;

  return (
    <div>
      <PageHeader title={config.aboutTitle || "品牌故事"} subtitle="发现我们的历程" emoji="🌍" />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>{config.aboutTitle || "品牌故事 📖"}</h2>
            <p>{config.aboutText1}</p>
            <p>{config.aboutText2}</p>
          </div>
          <div className={styles.imgBlock}>
            <div className={`${styles.placeholderImg} animate-float`}>🌈 充满欢乐的生产魔法城堡</div>
          </div>
        </div>
      </section>
    </div>
  );
}
