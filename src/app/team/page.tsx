import PageHeader from '../../components/PageHeader';
import { teamMembers } from '../../data/mock';
import styles from './team.module.css';

export default function TeamPage() {
  return (
    <div>
      <PageHeader 
        title="遇见造梦师团队" 
        subtitle="童话的背后，是一群始终保持童心的大孩子！" 
        emoji="👨‍👩‍👧‍👦" 
      />
      <div className={styles.container}>
        <div className={styles.grid}>
          {teamMembers.map(member => (
            <div key={member.id} className={styles.card}>
              <div className={styles.avatarBox}>
                <span className={`${styles.avatar} animate-float`}>{member.avatar}</span>
              </div>
              <div className={styles.info}>
                <h3>{member.name}</h3>
                <h4 className={styles.role}>{member.role}</h4>
                <p className={styles.slogan}>{member.slogan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
