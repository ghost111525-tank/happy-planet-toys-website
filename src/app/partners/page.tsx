import PageHeader from '../../components/PageHeader';
import { partnersData } from '../../data/mock';
import styles from './partners.module.css';

export default function PartnersPage() {
  return (
    <div>
      <PageHeader 
        title="强强联手的朋友们" 
        subtitle="和全世界最顶尖的伙伴一起，为您护航每一个安心、高品质的玩乐瞬间。" 
        emoji="🤝" 
      />
      <div className={styles.container}>
        <div className={styles.grid}>
          {partnersData.map((partner, idx) => (
            <div key={idx} className={styles.partnerCard}>
              <div className={`${styles.icon} animate-wobble`}>{partner.icon}</div>
              <h3>{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
