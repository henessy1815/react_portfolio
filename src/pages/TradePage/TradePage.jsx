import { useState, useRef, useEffect } from "react";
import styles from "./TradePage.module.css";

export default function TradePage() {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isCtaQrOpen, setIsCtaQrOpen] = useState(false);

  const heroWrapperRef = useRef(null);
  const ctaWrapperRef = useRef(null);

  // 팝오버 외부 클릭 시 닫기
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.tradePage}>
      {/* ========================================================= */}
      {/* 1. Hero 섹션 */}
      {/* ========================================================= */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                One app, endless trade
                <br />
                possibilities.
              </h1>
              <p className={styles.heroSubtitle}>
                From your first swap to your next big move, Phantom makes
                trading effortless.
              </p>

              <div className={styles.btnWrapper} ref={heroWrapperRef}>
                {isQrOpen && (
                  <div className={styles.qrPopover}>
                    <div className={styles.qrCodeBox}>
                      <img
                        src="/phantom-qr.png"
                        alt="QR Code"
                        className={styles.qrImg}
                      />
                    </div>
                    <p className={styles.qrCaption}>
                      Scan the QR to
                      <br />
                      download the app to
                      <br />
                      your phone
                    </p>
                  </div>
                )}
                <button
                  className={styles.downloadBtn}
                  onClick={() => setIsQrOpen((prev) => !prev)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <rect x="6" y="2" width="12" height="20" rx="3.5" />
                    <line x1="10" y1="18" x2="14" y2="18" />
                  </svg>
                  <span>Download Phantom</span>
                </button>
              </div>
            </div>

            <div className={styles.heroMedia}>
              <img
                src="https://sanity-proxy-v2.phantom.app/images/3nm6d03a/production/31888f4bf8e315cd648d685226ada56a4bbf7e14-2500x2500.png"
                alt="Images of popular memecoin"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. Discover tokens. Trade in seconds. 섹션 */}
      {/* ========================================================= */}
      <section className={styles.discoverSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Discover tokens.
              <br />
              Trade in seconds.
            </h2>
            <p className={styles.sectionDesc}>
              Everything you need to go from search to swap in one app.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {/* 카드 1 */}
            <div className={styles.featureCard}>
              <div className={styles.cardVideoBox}>
                <video
                  src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/4ca210dc47f05268a1051d660c5f4f973eb55f48.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.cardVideo}
                />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Search even smarter</h3>
                <p className={styles.cardDesc}>
                  Find any token by name or contract address.
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className={styles.featureCard}>
              <div className={styles.cardVideoBox}>
                <video
                  src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/be211b6ba6fa6cfa1e21f5c88019a687b0442001.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.cardVideo}
                />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Browse with confidence</h3>
                <p className={styles.cardDesc}>
                  Filter by blockchain, see what’s trending, and spot hidden
                  gems.
                </p>
              </div>
            </div>

            {/* 카드 3 */}
            <div className={styles.featureCard}>
              <div className={styles.cardVideoBox}>
                <video
                  src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/a9d884cce5a3ef23641ac69cc9c373de1c096d5e.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.cardVideo}
                />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Trade in an instant</h3>
                <p className={styles.cardDesc}>
                  Buy and sell the hottest tokens in just a few taps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. Trusted by traders, made for everyone. 섹션 */}
      {/* ========================================================= */}
      <section className={styles.trustedSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Trusted by traders,
              <br />
              made for everyone.
            </h2>
            <p className={styles.sectionDesc}>
              The trading features you want, none of the clutter.
            </p>
          </div>

          <div className={styles.trustedGrid}>
            <div className={styles.trustedVideoWrapper}>
              <video
                src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/73c282142e11462b3bfc4f127e41a416f85fc80a.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.trustedVideo}
              />
            </div>

            <div className={styles.featureList}>
              <div className={styles.featureListItem}>
                <div className={styles.iconCircle}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M19.56 9H13.5V2.4c0-.5-.64-.7-1-.3L4 14.2c-.22.33.02.8.43.8H10.5v6.1c0 .5.64.7 1 .3l8.06-12.1c.22-.33-.02-.8-.43-.8z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.itemTitle}>Trade across chains</h4>
                  <p className={styles.itemDesc}>
                    Bridge tokens seamlessly across Solana, Ethereum, Base, Sui,
                    and more using our Crosschain Swapper
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.iconCircle}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 3v3M12 18v3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M3 12h3M18 12h3M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.itemTitle}>Stay market-ready</h4>
                  <p className={styles.itemDesc}>
                    Track real-time token data so you don’t miss a move
                  </p>
                </div>
              </div>

              <div className={styles.featureListItem}>
                <div className={styles.iconCircle}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M16 12h-1.5l-1.5 2-2.5-4-1.25 2H8M12 5.77C18.16-.48 28.73 11.13 12 20.5-4.73 11.13 5.84-.48 12 5.77z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.itemTitle}>Scope the best routes</h4>
                  <p className={styles.itemDesc}>
                    Find the lowest fees or fastest path, so your moves make the
                    most for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. Trade more ways, your way. 섹션 */}
      {/* ========================================================= */}
      <section className={styles.moreWaysSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Trade more ways,
              <br />
              your way.
            </h2>
            <p className={styles.sectionDesc}>
              Take your trading to the next level with perps, prediction
              markets, and web-based desktop trading platform.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {/* 카드 1 */}
            <div className={styles.featureCard}>
              <div className={styles.cardImageBox}>
                <img
                  src="https://sanity-proxy-v2.phantom.app/images/3nm6d03a/production/b46b974eecd86581b4bcf893c9122f08c71587f6-523x523.svg"
                  alt="Perpetual futures"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Perpetual futures</h3>
                <p className={styles.cardDesc}>
                  Go long or short with up to 40× leverage and trade 200+
                  markets, from your phone and on the web.
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className={styles.featureCard}>
              <div className={styles.cardImageBox}>
                <img
                  src="https://sanity-proxy-v2.phantom.app/images/3nm6d03a/production/0cac8e67e258774dc3c8447f3695db0fa3f8b657-523x523.svg"
                  alt="Prediction markets"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Prediction markets</h3>
                <p className={styles.cardDesc}>
                  Trade live events and cultural moments happening around the
                  world, right inside your wallet.
                </p>
              </div>
            </div>

            {/* 카드 3 */}
            <div className={styles.featureCard}>
              <div className={styles.cardImageBox}>
                <img
                  src="https://sanity-proxy-v2.phantom.app/images/3nm6d03a/production/cc9c648b80bbf1427f71edd531197fc22582f1d9-2091x2091.png"
                  alt="Desktop trading terminal"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Desktop trading terminal</h3>
                <p className={styles.cardDesc}>
                  Monitor price movements, spot trends, and manage positions
                  from your web browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. Start trading CTA 섹션 */}
      {/* ========================================================= */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Start trading</h2>
          <div className={styles.btnWrapper} ref={ctaWrapperRef}>
            {isCtaQrOpen && (
              <div className={styles.qrPopover}>
                <div className={styles.qrCodeBox}>
                  <img
                    src="/phantom-qr.png"
                    alt="QR Code"
                    className={styles.qrImg}
                  />
                </div>
                <p className={styles.qrCaption}>
                  Scan the QR to
                  <br />
                  download the app to
                  <br />
                  your phone
                </p>
              </div>
            )}
            <button
              className={styles.downloadBtn}
              onClick={() => setIsCtaQrOpen((prev) => !prev)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <rect x="6" y="2" width="12" height="20" rx="3.5" />
                <line x1="10" y1="18" x2="14" y2="18" />
              </svg>
              <span>Download Phantom</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
