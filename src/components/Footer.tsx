import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.wave}></div>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h2>🦄 欢乐星球</h2>
          <p>给孩子最纯粹的快乐，</p>
          <p>陪伴每一个美好的童年时光。</p>
        </div>
        <div className={styles.links}>
          <h4>关于探索</h4>
          <ul>
            <li>品牌故事</li>
            <li>材质安全承诺</li>
            <li>益智玩具系列</li>
          </ul>
        </div>
        <div className={styles.links}>
          <h4>联系帮助</h4>
          <ul>
            <li>在线客服中心</li>
            <li>全国门店网络</li>
            <li>退换货保障</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} 欢乐星球玩具乐园 (Toy Company Project). 让快乐无处不在 🎈</p>
      </div>
    </footer>
  );
}
