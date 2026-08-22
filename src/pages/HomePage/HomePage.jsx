import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CardsSlider from "../../components/CardsSlider";
import GhostIcon from "../../components/GhostIcon";
import { SECTIONS_DATA } from "../../data/homeSections";
import "./HomePage.css";

// 스크롤 진입 시 스르륵 나타나는 타이틀 전용 컴포넌트 추가
function ScrollHeadline({ children }) {
  const headlineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const headlineElem = headlineRef.current;
    if (!headlineElem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번 등장 후 관찰 해제하여 부드러운 성능 보장
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }, // 화면에 50% 보일 때 등장
    );

    observer.observe(headlineElem);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headlineRef}
      className={`section-headline ${isVisible ? "headline-visible" : "headline-hidden"}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const tradingData = SECTIONS_DATA.find((s) => s.id === "trading");
  const cashData = SECTIONS_DATA.find((s) => s.id === "cash");
  const securityData = SECTIONS_DATA.find((s) => s.id === "security");

  // 두 버튼의 QR 팝오버 상태를 각각 선언
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isCtaQrOpen, setIsCtaQrOpen] = useState(false);

  // [수정: 배경 테마 상태 관리 ('light' | 'dark' | 'purple')]
  const [theme, setTheme] = useState("light");

  // [수정: 외부 클릭 감지를 위한 ref 선언]
  const heroWrapperRef = useRef(null);
  const ctaWrapperRef = useRef(null);

  const securityRef = useRef(null);
  const ctaSectionRef = useRef(null);

  // [수정: 팝오버 외부 클릭 시 팝업 닫기 이벤트 리스너 등록]
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        heroWrapperRef.current &&
        !heroWrapperRef.current.contains(e.target)
      ) {
        setIsQrOpen(false);
      }
      if (ctaWrapperRef.current && !ctaWrapperRef.current.contains(e.target)) {
        setIsCtaQrOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // [수정: 스크롤 위치에 따라 테마를 순식간에 전환하는 Observer]
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const securityElem = securityRef.current;
      const ctaElem = ctaSectionRef.current;

      if (!securityElem || !ctaElem) return;

      // 각 섹션의 절대 상단 위치 (화면 상단 기준)
      const securityTop = securityElem.offsetTop - window.innerHeight * 0.75;
      const ctaTop = ctaElem.offsetTop - window.innerHeight * 0.75;

      if (scrollY >= ctaTop) {
        setTheme("purple");
      } else if (scrollY >= securityTop) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll, { passive: true });

    // [새로고침 시 현재 스크롤 위치 기준으로 즉시 1회 실행]
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // [수정 : theme 상태에 따라 클래스 동적 부여]
    <div className={`home-page theme-${theme}`}>
      {/* ========================================================= */}
      {/* 0. 메인 Hero 영역 (풀스크린 중앙 정렬 래퍼 추가) */}
      {/* ========================================================= */}
      {/* [수정 2] hero-section-wrapper로 감싸 전체 화면(100vh) 중앙 배치 */}
      <section className="hero-section-wrapper">
        {/* 0. 메인 Hero 영역 (비디오 배경 포함) */}
        <div className="hero-card">
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

            {/* 버튼 & QR 팝오버 래퍼 + ref={heroWrapperRef} 연결 */}
            <div className="hero-btn-wrapper" ref={heroWrapperRef}>
              {/* QR 코드 팝오버 */}
              {isQrOpen && (
                <div className="qr-popover">
                  <div className="qr-code-box">
                    {/* [수정 1 반영] src를 "/phantom-qr.png"로 직접 지정 */}
                    <img
                      src="/phantom-qr.png"
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
        </div>
      </section>

      {/* 1. Trading 섹션 */}
      {/* [수정 3] 타이틀 영역을 100vh 뷰포트 정중앙 래퍼로 교체 & GhostIcon 크기 최적화 */}
      <section className="home-feature-section">
        <ScrollHeadline>
          <h2 className="section-title">
            Trading tools
            <br />
            for <GhostIcon width={120} height={100} color="#AB9FF2" /> everyone
          </h2>
          <Link to="/trade" className="see-more-link">
            See more{"\u00A0\u00A0"}↗
          </Link>
        </ScrollHeadline>
        <CardsSlider sectionData={tradingData} />
      </section>

      {/* 2. Move Money (Cash) 섹션 */}
      {/* [수정 3] 동일하게 풀스크린 래퍼 적용 */}
      <section className="home-feature-section">
        <ScrollHeadline>
          <h2 className="section-title">
            Spend, Send, &{" "}
            <GhostIcon width={120} height={100} color="#AB9FF2" /> Save
          </h2>
          <Link to="/cash" className="see-more-link">
            See more{"\u00A0\u00A0"}↗
          </Link>
        </ScrollHeadline>
        <CardsSlider sectionData={cashData} />
      </section>

      {/* 3. Security 섹션 (dark 테마 ref 바인딩) */}
      {/* [수정 4] 불필요한 home-container 중첩 제거 및 100vh 래퍼 적용 */}
      <section className="home-feature-section" ref={securityRef}>
        <ScrollHeadline>
          <h2 className="section-title">
            Controlled by you,
            <br />
            secured <GhostIcon width={120} height={100} color="#AB9FF2" /> by us
          </h2>
          <Link to="/security" className="see-more-link">
            See more{"\u00A0\u00A0"}↗
          </Link>
        </ScrollHeadline>
        <CardsSlider sectionData={securityData} />
      </section>

      {/* 4. Final CTA 섹션 (purple 테마 ref 바인딩) */}
      {/* [수정 3 & 4] 풀스크린 래퍼 적용 및 QR 이미지 경로 수정 */}
      <section className="final-cta-section" ref={ctaSectionRef}>
        <p className="final-cta-sub">
          Trusted by a community of 20+ million users.
          <br />
          It’s more than a wallet.
        </p>
        <h2 className="final-cta-title">
          Get started.
          <br />
          Download <GhostIcon width={120} height={100} color="#FFFFFF" />{" "}
          Phantom.
        </h2>

        {/* hero-btn으로 통일 및 QR 팝오버 래퍼 적용 + ref={ctaWrapperRef} 연결 */}
        <div className="hero-btn-wrapper" ref={ctaWrapperRef}>
          {isCtaQrOpen && (
            <div className="qr-popover">
              <div className="qr-code-box">
                <img
                  src="/phantom-qr.png"
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
