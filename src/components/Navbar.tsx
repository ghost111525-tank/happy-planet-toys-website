import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glassmorphism`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="欢乐星球的 Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }} className="animate-wobble" /> 欢乐星球
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">首 页</Link></li>
          <li><Link href="/toys">玩具中心</Link></li>
          <li><Link href="/about">关于我们</Link></li>
          <li><Link href="/honors">荣誉奖项</Link></li>
          <li><Link href="/team">团队风采</Link></li>
          <li><Link href="/partners">合作伙伴</Link></li>
        </ul>
        <button className="fun-button">
          立即探索 🚀
        </button>
      </div>
    </nav>
  );
}
