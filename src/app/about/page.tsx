import PageHeader from '../../components/PageHeader';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div>
      <PageHeader 
        title="关于欢乐星球" 
        subtitle="给全世界的孩子播种无尽的欢声笑语！" 
        emoji="🌍" 
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>品牌故事 📖</h2>
            <p>
              欢乐星球成立于2010年，最初只是一群热爱孩童、怀揣梦想的设计师相聚在车库里的小作坊。如今，我们已经成长为深受全球家庭喜爱并屡获殊荣的儿童玩具优质制造商。
            </p>
            <p>
              我们的初衷很简单：制作既安全环保，又让孩子充满惊喜的玩具。我们坚信，每一个出色的玩具不仅是孩子游乐的亲密伙伴，更是激发无限潜力和创造力的神奇魔法钥匙。从云端记忆棉的一针一线缝制，到食品级无毒水漆的手工上色，我们用心打磨每一个可能被孩子拥抱入怀的微小细节。
            </p>
          </div>
          <div className={styles.imgBlock}>
            <div className={`${styles.placeholderImg} animate-float`}>🌈 充满欢乐的生产魔法城堡</div>
          </div>
        </div>
      </section>
    </div>
  );
}
