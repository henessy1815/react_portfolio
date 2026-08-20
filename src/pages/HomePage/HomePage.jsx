import { useState } from "react";
import { Link } from "react-router-dom";
import CardsSlider from "../../components/CardsSlider";
import GhostIcon from "../../components/GhostIcon";
import { SECTIONS_DATA } from "../../data/homeSections";
import "./HomePage.css";
import qrImage from "../../../public/phantom-qr.png";

export default function HomePage() {
  const tradingData = SECTIONS_DATA.find((s) => s.id === "trading");
  const cashData = SECTIONS_DATA.find((s) => s.id === "cash");
  const securityData = SECTIONS_DATA.find((s) => s.id === "security");

  // 두 버튼의 QR 팝오버 상태를 각각 선언
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isCtaQrOpen, setIsCtaQrOpen] = useState(false);

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

            {/* 버튼 & QR 팝오버 래퍼 */}
            <div className="hero-btn-wrapper">
              {/* QR 코드 팝오버 */}
              {isQrOpen && (
                <div className="qr-popover">
                  <div className="qr-code-box">
                    {/* 팬텀 실제 QR 이미지 URL (또는 커스텀 이미지) */}
                    <img
                      src={qrImage}
                      alt="Phantom Download QR"
                      className="qr-img"
                    />
                  </div>
                  <p className="qr-caption">
                    Scan the QR to
                    <br />
                    download the app to
                    <br />
                    your phone
                  </p>
                </div>
              )}

              {/* 다운로드 버튼 (클릭 시 토글) */}
              <button
                className="hero-btn"
                onClick={() => setIsQrOpen((prev) => !prev)}
              >
                <svg
                  className="btn-icon"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.25"
                    y="1.25"
                    width="13.5"
                    height="17.5"
                    rx="3.75"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <line
                    x1="6.5"
                    y1="15.5"
                    x2="9.5"
                    y2="15.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Download Phantom</span>
              </button>
            </div>
          </div>
        </section>

        {/* 1. Trading 섹션 */}
        <div className="section-headline">
          <h2 className="section-title">
            Trading tools
            <br />
            for <GhostIcon width={120} height={100} color="#AB9FF2" /> everyone
          </h2>
          <Link to="/trade" className="see-more-link">
            See more{"\u00A0\u00A0"}↗
          </Link>
        </div>
        <CardsSlider sectionData={tradingData} />

        {/* 2. Move Money (Cash) 섹션 */}
        <div className="section-headline">
          <h2 className="section-title">
            Spend, Send, &{" "}
            <GhostIcon width={120} height={100} color="#AB9FF2" /> Save
          </h2>
          <Link to="/cash" className="see-more-link">
            See more{"\u00A0\u00A0"}↗
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
              secured <GhostIcon width={120} height={100} color="#AB9FF2" /> by
              us
            </h2>
            <Link to="/security" className="see-more-link">
              See more{"\u00A0\u00A0"}↗
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
          Download <GhostIcon width={130} height={110} color="#FFFFFF" />{" "}
          Phantom.
        </h2>
        {/* hero-btn으로 통일 및 QR 팝오버 래퍼 적용 */}
        <div className="hero-btn-wrapper">
          {isCtaQrOpen && (
            <div className="qr-popover">
              <div className="qr-code-box">
                <img
                  src={qrImage}
                  alt="Phantom Download QR"
                  className="qr-img"
                />
              </div>
              <p className="qr-caption">
                Scan the QR to
                <br />
                download the app to
                <br />
                your phone
              </p>
            </div>
          )}

          <button
            className="final-cta-btn"
            onClick={() => setIsCtaQrOpen((prev) => !prev)}
          >
            <svg
              className="btn-icon"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.25"
                y="1.25"
                width="13.5"
                height="17.5"
                rx="3.75"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <line
                x1="6.5"
                y1="15.5"
                x2="9.5"
                y2="15.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span>Download Phantom</span>
          </button>
        </div>
      </section>
    </div>
  );
}
