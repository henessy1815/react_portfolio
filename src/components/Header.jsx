import { Link } from "react-router-dom";
import GhostIcon from "./GhostIcon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.innerWrapper}>
        {/* 1. 로고 */}
        <Link to="/" className={styles.logo}>
          <GhostIcon width={60} height={51} color="#201d2d" />
          <span className={styles.logoText}>phantom</span>
        </Link>

        {/* 2. 중앙 캡슐 네비게이션 */}
        <nav className={styles.navCapsule}>
          <Link to="/trade" className={styles.navLink}>
            Trade
          </Link>
          <Link to="/cash" className={styles.navLink}>
            Cash
          </Link>
          <Link to="/security" className={styles.navLink}>
            Security
          </Link>
        </nav>

        {/* 3. 우측 돋보기 + 다운로드 버튼 */}
        <div className={styles.rightActions}>
          <button className={styles.searchBtn} aria-label="Search">
            🔍
          </button>
          <button className={styles.downloadBtn}>Download</button>
        </div>
      </div>
    </header>
  );
}
