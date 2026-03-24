import PageHeader from '../../components/PageHeader';
import { honorsData } from '../../data/mock';
import styles from './honors.module.css';

export default function HonorsPage() {
  return (
    <div>
      <PageHeader 
        title="荣誉与奖项" 
        subtitle="这些年我们肩负期望，也收获了行业的深切认可。每一份荣誉，背后的动力都是孩子脸上的笑容。" 
        emoji="🏆" 
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.timeline}>
            {honorsData.map((honor, idx) => (
              <div key={idx} className={styles.honorCard}>
                <div className={styles.year}>{honor.year}</div>
                <div className={styles.honorInfo}>
                  <h3>{honor.title}</h3>
                  <p>{honor.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
