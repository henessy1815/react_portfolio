import { Link } from "react-router-dom";
import CardsSlider from "../../components/CardsSlider";
import { SECTIONS_DATA } from "../../data/homeSections";
import "./HomePage.css";

export default function HomePage() {
  const tradingData = SECTIONS_DATA.find((s) => s.id === "trading");
  const cashData = SECTIONS_DATA.find((s) => s.id === "cash");
  const securityData = SECTIONS_DATA.find((s) => s.id === "security");

  return (
    <div className="home-page">
      <div className="home-container">
        {/* 0. 메인 Hero 영역 (비디오 배경 포함) */}
        <section className="hero-card">
          {/* 실제 팬텀 메인 배경 비디오 */}
          <video
            className="hero-bg-video"
            src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/38c2333eba4d9d1fad29f95be26fa039f35806bb.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* 비디오 위에 뜨는 콘텐츠 레이어 */}
          <div className="hero-content">
            <p className="hero-subtitle">
              The money app that'll take you places
            </p>
            <h1 className="hero-title">
              Your home for trading
              <br />
              crypto, predictions,
              <br />
              and more
            </h1>
            <button className="hero-btn">
              <span>📱</span> Download Phantom
            </button>
          </div>
        </section>

        {/* 1. Trading 섹션 */}
        <div className="section-headline">
          <h2 className="section-title">
            Trading tools
            <br />
            for <span className="ghost-icon-badge"></span> everyone
          </h2>
          <Link to="/trade" className="see-more-link">
            See more ↗
          </Link>
        </div>
        <CardsSlider sectionData={tradingData} />

        {/* 2. Move Money (Cash) 섹션 */}
        <div className="section-headline">
          <h2 className="section-title">
            Spend, Send, & <span className="ghost-icon-badge"></span> Save
          </h2>
          <Link to="/cash" className="see-more-link">
            See more ↗
          </Link>
        </div>
        <CardsSlider sectionData={cashData} />
      </div>

      {/* 3. Security 섹션 */}
      <div className="security-dark-wrapper">
        <div className="home-container">
          <div className="section-headline">
            <h2 className="section-title">
              Controlled by you,
              <br />
              secured <span className="ghost-icon-badge"></span> by us
            </h2>
            <Link to="/security" className="see-more-link">
              See more ↗
            </Link>
          </div>
          <CardsSlider sectionData={securityData} />
        </div>
      </div>

      {/* 4. Final CTA 섹션 */}
      <section className="final-cta-section">
        <p className="final-cta-sub">
          Trusted by a community of 20+ million users.
          <br />
          It’s more than a wallet.
        </p>
        <h2 className="final-cta-title">
          Get started.
          <br />
          Download <span className="ghost-icon-badge"></span> Phantom.
        </h2>
        <button className="final-cta-btn">
          <span>📱</span> Download Phantom
        </button>
      </section>
    </div>
  );
}
