import PageHeader from '../../components/PageHeader';
import styles from './partners.module.css';
import { prisma } from '../../lib/prisma';

export default async function PartnersPage() {
  const partnersData = await prisma.partner.findMany();

  return (
    <div>
      <PageHeader title="强强联手的生态链" subtitle="和千万世界级的保障伙伴联营。" emoji="🤝" />
      <div className={styles.container}>
        <div className={styles.grid}>
          {partnersData.map(partner => (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={`${styles.icon} animate-wobble`}>{partner.icon}</div>
              <h3>{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
