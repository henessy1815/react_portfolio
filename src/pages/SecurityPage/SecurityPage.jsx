import { useState, useRef, useEffect } from "react";
import styles from "./SecurityPage.module.css";
import GhostIcon from "../../components/GhostIcon";

export default function SecurityPage() {
  // 슬라이더 인덱스 관리 (섹션 1, 2, 3)
  const [sliderIndex1, setSliderIndex1] = useState(0);
  const [sliderIndex2, setSliderIndex2] = useState(0);
  const [sliderIndex3, setSliderIndex3] = useState(0);

  // 스크롤 감지용 Ref 및 상태
  const [isHeader1Visible, setIsHeader1Visible] = useState(false);
  const [isHeader2Visible, setIsHeader2Visible] = useState(false);
  const [isHeader3Visible, setIsHeader3Visible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  const header3Ref = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === header1Ref.current) setIsHeader1Visible(true);
          if (entry.target === header2Ref.current) setIsHeader2Visible(true);
          if (entry.target === header3Ref.current) setIsHeader3Visible(true);
          if (entry.target === ctaRef.current) setIsCtaVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    });

    if (header1Ref.current) observer.observe(header1Ref.current);
    if (header2Ref.current) observer.observe(header2Ref.current);
    if (header3Ref.current) observer.observe(header3Ref.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.securityPage}>
      {/* ========================================================= */}
      {/* 1. Section: We’ve got your back, always (Your security) */}
      {/* ========================================================= */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          {/* 섹션 헤더 */}
          <div
            ref={header1Ref}
            className={`${styles.sectionHeader} ${isHeader1Visible ? styles.visible : ""}`}
          >
            <h2 className={styles.sectionTitle}>
              We’ve got <GhostIcon width={120} height={100} color="#AB9FF2" />{" "}
              your back,
              <br />
              always
            </h2>
          </div>

          {/* 서브 헤더 (카테고리명 & 네비게이션 버튼) */}
          <div className={styles.carouselHeader}>
            <div className={styles.categoryBadge}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              >
                <path d="M3 8H21M3 8V11M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8M21 8V11M21 11V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V11M21 11H15C15 12.1046 14.1046 13 13 13H11C9.89543 13 9 12.1046 9 11H3" />
              </svg>
              <h3 className={styles.categoryTitle}>Your security</h3>
            </div>
            <div className={styles.navBtnGroup}>
              <button
                className={styles.navBtn}
                onClick={() => setSliderIndex1((prev) => Math.max(prev - 1, 0))}
                disabled={sliderIndex1 === 0}
                aria-label="Previous slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 20L7 12L15 4" />
                </svg>
              </button>
              <button
                className={styles.navBtn}
                onClick={() => setSliderIndex1((prev) => Math.min(prev + 1, 3))}
                disabled={sliderIndex1 === 3}
                aria-label="Next slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 4L17 12L9 20" />
                </svg>
              </button>
            </div>
          </div>

          {/* 4단 비디오 카드 리스트 */}
          <div className={styles.cardTrackWrapper}>
            <div
              className={styles.cardTrack}
              style={{ transform: `translateX(-${sliderIndex1 * 440}px)` }}
            >
              {/* Card 1 */}
              <div className={styles.mediaCard}>
                <div className={styles.cardText}>
                  <p>
                    Self-custodial means you control your funds. We never have
                    access.
                  </p>
                </div>
                <div className={styles.videoBox}>
                  <video
                    src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/56c73616b5ca840696e649a83602eff7ceeef5a5.mp4#t=0.01"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.mediaCard}>
                <div className={styles.cardText}>
                  <p>Always know exactly what you’re signing.</p>
                </div>
                <div className={styles.videoBox}>
                  <video
                    src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/f7449eb6f9a977fb14f72b1289e19949f2fe7184.mp4#t=0.01"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.mediaCard}>
                <div className={styles.cardText}>
                  <p>Connect your Ledger to keep your crypto even safer.</p>
                </div>
                <div className={styles.videoBox}>
                  <video
                    src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/74f58521ae1d7925d27bcbdf45395a2274d11d7c.mp4#t=0.01"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  />
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.mediaCard}>
                <div className={styles.cardText}>
                  <p>Scam detection flags malicious transactions instantly.</p>
                </div>
                <div className={styles.videoBox}>
                  <video
                    src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/380ecb84fee71f4b8f5f22a29dc98fa73b917831.mp4#t=0.01"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. Section: We're always working to make things safer (Your safety) */}
      {/* ========================================================= */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          {/* 섹션 헤더 */}
          <div
            ref={header2Ref}
            className={`${styles.sectionHeader} ${isHeader2Visible ? styles.visible : ""}`}
          >
            <h2 className={styles.sectionTitle}>
              We're always working to make things{" "}
              <GhostIcon width={120} height={100} color="#AB9FF2" /> safer
            </h2>
          </div>

          {/* 서브 헤더 */}
          <div className={styles.carouselHeader}>
            <div className={styles.categoryBadge}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              >
                <path d="M20 7.17737C20 6.32338 19.4578 5.56361 18.6502 5.286L12.9752 3.33524C12.3432 3.11799 11.6568 3.11799 11.0248 3.33524L5.34984 5.286C4.54224 5.56361 4 6.32338 4 7.17737V11.9123C4 16.8848 8 19 12 21.1579C16 19 20 16.8848 20 11.9123V7.17737Z" />
              </svg>
              <h3 className={styles.categoryTitle}>Your safety</h3>
            </div>
            <div className={styles.navBtnGroup}>
              <button
                className={styles.navBtn}
                onClick={() => setSliderIndex2((prev) => Math.max(prev - 1, 0))}
                disabled={sliderIndex2 === 0}
                aria-label="Previous slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 20L7 12L15 4" />
                </svg>
              </button>
              <button
                className={styles.navBtn}
                onClick={() => setSliderIndex2((prev) => Math.min(prev + 1, 1))}
                disabled={sliderIndex2 === 1}
                aria-label="Next slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 4L17 12L9 20" />
                </svg>
              </button>
            </div>
          </div>

          {/* 2단 비디오 카드 리스트 */}
          <div className={styles.cardTrackWrapper}>
            <div
              className={styles.cardTrack}
              style={{ transform: `translateX(-${sliderIndex2 * 440}px)` }}
            >
              {/* Card 1 */}
              <div className={styles.mediaCard}>
                <div className={styles.cardText}>
                  <p>Burn unwanted spam NFTs for good.</p>
                </div>
                <div className={styles.videoBox}>
                  <video
                    src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/96b0ed86d65ffd60c632f2503be1cd2696a4b42d.mp4#t=0.01"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.mediaCard}>
                <div className={styles.cardText}>
                  <p>Avoid phishing sites with our open source blocklist.</p>
                </div>
                <div className={styles.videoBox}>
                  <video
                    src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/3bf0ae34c6b10ba0f58897e457b489307763d091.mp4#t=0.01"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. Section: We believe in security, not surveillance (Privacy & Support) */}
      {/* ========================================================= */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          {/* 섹션 헤더 */}
          <div
            ref={header3Ref}
            className={`${styles.sectionHeader} ${isHeader3Visible ? styles.visible : ""}`}
          >
            <h2 className={styles.sectionTitle}>
              We believe in{" "}
              <GhostIcon width={120} height={100} color="#AB9FF2" /> security,
              <br />
              not surveillance
            </h2>
          </div>

          {/* 서브 헤더 */}
          <div className={styles.carouselHeader}>
            <div className={styles.categoryBadge}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13C5 11.3431 6.34315 10 8 10H16C17.6569 10 19 11.3431 19 13V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V13Z" />
                <path d="M16 9.5V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9.5" />
                <path d="M12 14V17" />
              </svg>
              <h3 className={styles.categoryTitle}>Privacy and Support</h3>
            </div>
            <div className={styles.navBtnGroup}>
              <button
                className={styles.navBtn}
                onClick={() => setSliderIndex3((prev) => Math.max(prev - 1, 0))}
                disabled={sliderIndex3 === 0}
                aria-label="Previous slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 20L7 12L15 4" />
                </svg>
              </button>
              <button
                className={styles.navBtn}
                onClick={() => setSliderIndex3((prev) => Math.min(prev + 1, 3))}
                disabled={sliderIndex3 === 3}
                aria-label="Next slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 4L17 12L9 20" />
                </svg>
              </button>
            </div>
          </div>

          {/* 4단 텍스트 링크 카드 리스트 */}
          <div className={styles.cardTrackWrapper}>
            <div
              className={styles.cardTrack}
              style={{ transform: `translateX(-${sliderIndex3 * 440}px)` }}
            >
              {/* Card 1: Privacy policy */}
              <div className={styles.textActionCard}>
                <svg
                  className={styles.actionCardIcon}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                >
                  <path d="M20 7.17737C20 6.32338 19.4578 5.56361 18.6502 5.286L12.9752 3.33524C12.3432 3.11799 11.6568 3.11799 11.0248 3.33524L5.34984 5.286C4.54224 5.56361 4 6.32338 4 7.17737V11.9123C4 16.8848 8 19 12 21.1579C16 19 20 16.8848 20 11.9123V7.17737Z" />
                </svg>
                <div className={styles.actionCardBody}>
                  <div>
                    <h4 className={styles.actionCardTitle}>
                      Your privacy matters
                    </h4>
                    <p className={styles.actionCardDesc}>
                      We never track any personally identifiable information or
                      asset balances.
                    </p>
                  </div>
                  <button className={styles.actionCardBtn}>
                    Go to Privacy Policy
                  </button>
                </div>
              </div>

              {/* Card 2: Bug bounty */}
              <div className={styles.textActionCard}>
                <svg
                  className={styles.actionCardIcon}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 13V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V13M6 13H3M6 13V11C6 9.34315 7.34315 8 9 8H15C16.6569 8 18 9.34315 18 11V13M18 13H21M6 17L3.25 18M18 17L20.75 18M12 13V20M8 7.5V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V7.5M6.27 9L3.25 8M17.5 9L20.75 8" />
                </svg>
                <div className={styles.actionCardBody}>
                  <div>
                    <h4 className={styles.actionCardTitle}>Bug bounty</h4>
                    <p className={styles.actionCardDesc}>
                      White hat hackers can be rewarded up to $50,000 for
                      finding vulnerabilities that may result in the loss of
                      user funds.
                    </p>
                  </div>
                  <button className={styles.actionCardBtn}>
                    Go to Bug Bounty
                  </button>
                </div>
              </div>

              {/* Card 3: Audited reports */}
              <div className={styles.textActionCard}>
                <svg
                  className={styles.actionCardIcon}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.75L10 19L19 5" />
                </svg>
                <div className={styles.actionCardBody}>
                  <div>
                    <h4 className={styles.actionCardTitle}>
                      Independently audited
                    </h4>
                    <p className={styles.actionCardDesc}>
                      Our code has been audited by top software auditing firms
                      trusted by technology companies worldwide.
                    </p>
                  </div>
                  <button className={styles.actionCardBtn}>
                    Read the reports
                  </button>
                </div>
              </div>

              {/* Card 4: 24/7 support */}
              <div className={styles.textActionCard}>
                <svg
                  className={styles.actionCardIcon}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                >
                  <path d="M4 14V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V14M4 14V18C4 19.1046 4.89543 20 6 20C7.10457 20 8 19.1046 8 18V17C8 15.3431 6.65685 14 5 14H4ZM20 14V18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18V17C16 15.3431 17.3431 14 19 14H20Z" />
                </svg>
                <div className={styles.actionCardBody}>
                  <div>
                    <h4 className={styles.actionCardTitle}>24/7 support</h4>
                    <p className={styles.actionCardDesc}>
                      Our global Support team is here for you 24/7.
                    </p>
                  </div>
                  <button className={styles.actionCardBtn}>Chat with us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. Final Support CTA 섹션 */}
      {/* ========================================================= */}
      <section className={styles.finalSupportCtaSection}>
        <div
          ref={ctaRef}
          className={`${styles.ctaContent} ${isCtaVisible ? styles.visible : ""}`}
        >
          <p className={styles.ctaSubtitle}>
            Our support team is available 24/7
          </p>
          <h2 className={styles.ctaTitle}>
            Need <GhostIcon width={120} height={100} color="#AB9FF2" /> help?
            <br />
            No stress
          </h2>
          <div className={styles.ctaBtnWrapper}>
            <button className={styles.chatBtn}>Chat with us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
