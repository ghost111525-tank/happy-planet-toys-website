import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  emoji: string;
}

export default function PageHeader({ title, subtitle, emoji }: PageHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className="animate-fade-in-up">
          <span className="animate-wobble" style={{ display: 'inline-block', marginRight: '15px' }}>{emoji}</span>
          {title}
        </h1>
        <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{subtitle}</p>
      </div>
    </div>
  );
}
