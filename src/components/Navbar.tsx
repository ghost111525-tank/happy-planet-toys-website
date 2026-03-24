import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import styles from './Navbar.module.css';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default async function Navbar() {
  const config = await prisma.siteConfig.findFirst() || {
    logoUrl: '/logo.png', siteName: '欢乐星球', navToys: '玩具中心', navAbout: '关于我们', navHonors: '荣誉奖项', navTeam: '团队风采', navParts: '合作伙伴'
  };

  return (
    <nav className={`${styles.navbar} glassmorphism`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <img src={config.logoUrl} alt="Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }} className="animate-wobble" /> 
          {config.siteName}
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">首 页</Link></li>
          <li><Link href="/toys">{config.navToys}</Link></li>
          <li><Link href="/about">{config.navAbout}</Link></li>
          <li><Link href="/honors">{config.navHonors}</Link></li>
          <li><Link href="/team">{config.navTeam}</Link></li>
          <li><Link href="/partners">{config.navParts}</Link></li>
        </ul>
        <Link href="/admin"><button className="fun-button">
          后台管理 ⚙️
        </button></Link>
      </div>
    </nav>
  );
}
