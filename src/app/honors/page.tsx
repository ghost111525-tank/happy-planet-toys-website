import PageHeader from '../../components/PageHeader';
import styles from './honors.module.css';
import { prisma } from '../../lib/prisma';

export default async function HonorsPage() {
  const honorsData = await prisma.honor.findMany();

  return (
    <div>
      <PageHeader title="荣誉与奖项" subtitle="这些年我们收获了无尽的认可。" emoji="🏆" />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.timeline}>
            {honorsData.map(honor => (
              <div key={honor.id} className={styles.honorCard}>
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
