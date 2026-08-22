import { useState, useRef, useEffect } from "react";
import styles from "./CashPage.module.css";
import GhostIcon from "../../components/GhostIcon";

export default function CashPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // 스크롤 감지용 Ref 및 상태
  const [isFeatureListVisible, setIsFeatureListVisible] = useState(false);
  const [isPoweredVisible, setIsPoweredVisible] = useState(false);
  const [isNewsVisible, setIsNewsVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);

  const featureListRef = useRef(null);
  const poweredRef = useRef(null);
  const newsRef = useRef(null);
  const faqRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === featureListRef.current)
            setIsFeatureListVisible(true);
          if (entry.target === poweredRef.current) setIsPoweredVisible(true);
          if (entry.target === newsRef.current) setIsNewsVisible(true);
          if (entry.target === faqRef.current) setIsFaqVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    });

    if (featureListRef.current) observer.observe(featureListRef.current);
    if (poweredRef.current) observer.observe(poweredRef.current);
    if (newsRef.current) observer.observe(newsRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => observer.disconnect();
  }, []);

  const faqList = [
    {
      q: "What is Phantom Cash?",
      a: "Phantom Cash is your all-in-one money account inside Phantom. Built on Solana, it combines the power of crypto with the convenience of traditional payments. You can hold, send, spend, buy tokens, and withdraw, all from the Phantom mobile app. Your balance is secured on chain as CASH and displayed in USD in the Phantom mobile app.",
    },
    {
      q: "What can I do with Phantom Cash?",
      a: "Use Phantom Cash to move between crypto and the real world. Add funds, send to friends by username, pay with a virtual debit card, buy tokens directly in Phantom, or withdraw to your bank or Solana wallet. Everyday payments and crypto all in one place.",
    },
    {
      q: "Is KYC required to use Phantom Cash?",
      a: "No. You’re not required to KYC to use Phantom or Phantom Cash. Certain features of Phantom Cash, including bank transfers, direct deposit, and the debit card, require identity verification to meet financial regulations. Identity verification is handled by Stripe. Phantom never has access to your legal name and doesn’t store your KYC information.",
    },
    {
      q: "How does the Phantom Cash debit card work?",
      a: "The Phantom Cash debit card lets you pay with your CASH balance anywhere Visa, Apple Pay, or Google Pay are accepted. It works for payments online, in apps, and in stores.",
    },
    {
      q: "Where is Phantom Cash available?",
      a: "Phantom Cash is launching first in the United States, except in New York. To get started, open the Cash tab in your Phantom mobile app.",
    },
  ];

  return (
    <div className={styles.cashPage}>
      {/* ========================================================= */}
      {/* 1. Hero 섹션 (원본 에셋 및 글래스모피즘 위젯) */}
      {/* ========================================================= */}
      <section className={styles.heroSection}>
        <div className={styles.heroCanvas}>
          {/* 플로팅 3D 그래픽 에셋들 */}
          <div className={`${styles.floatingElem} ${styles.floatGhost}`}>
            <img
              src="https://phantom.com/_web_platform_assets/images/cash/ghost.webp"
              alt="Ghost"
            />
          </div>
          <div className={`${styles.floatingElem} ${styles.floatCard}`}>
            <img
              src="https://phantom.com/_web_platform_assets/images/cash/card.webp"
              alt="Card"
            />
          </div>
          <div className={`${styles.floatingElem} ${styles.floatCloud}`}>
            <img
              src="https://phantom.com/_web_platform_assets/images/cash/cloud.webp"
              alt="Cloud"
            />
          </div>
          <div className={`${styles.floatingElem} ${styles.floatLock}`}>
            <img
              src="https://phantom.com/_web_platform_assets/images/cash/lock.webp"
              alt="Lock"
            />
          </div>

          {/* ⭐️ [원본 위젯 1: My balance] */}
          <div className={`${styles.glassWidget} ${styles.widgetBalance}`}>
            <div className={styles.avatarBox}>
              <img
                src="https://phantom.com/_web_platform_assets/images/cash/avatar2.webp"
                alt="Account avatar"
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.widgetInfo}>
              <span className={styles.widgetLabel}>My balance</span>
              <span className={styles.widgetValue}>$17,382.41</span>
            </div>
          </div>

          {/* ⭐️ [원본 위젯 2: You get CASH] */}
          <div className={`${styles.glassWidget} ${styles.widgetCash}`}>
            <div className={styles.widgetRow}>
              <span className={styles.widgetLabel}>You get</span>
              <div className={styles.currencyBadge}>
                <img
                  src="https://phantom.com/_web_platform_assets/images/cash/currency.svg"
                  alt="CASH currency"
                  className={styles.currencyIcon}
                />
                <span className={styles.currencyName}>CASH</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M20 9L12 17L4 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.widgetRow}>
              <span className={styles.widgetValueLarge}>$16,000</span>
              <span className={styles.widgetSubtext}>Instantly</span>
            </div>
          </div>

          {/* 메인 타이틀 */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Meet
              <br />
              Phantom Cash
            </h1>
            <h2 className={styles.heroSubtitle}>This is New Money</h2>
          </div>

          {/* ⭐️ [원본 핸드셰이크 배너 (WebP 이미지)] */}
          <div className={styles.handshakeBanner}>
            <span className={styles.bannerText}>The power of crypto</span>
            <div className={styles.handshakeImageBox}>
              <img
                src="https://phantom.com/_web_platform_assets/images/cash/handshake.webp"
                alt="Shiny handshake"
                className={styles.handshakeImg}
              />
            </div>
            <span className={styles.bannerText}>The ease of cash</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. Feature 3단 지그재그 섹션 (원본 Radial Gradient Blob & WebP) */}
      {/* ========================================================= */}
      <section className={styles.zigzagSection}>
        <div className={styles.container}>
          {/* Row 1: Use your card anywhere */}
          <div className={styles.zigzagRow}>
            <div className={styles.zigzagText}>
              <h2 className={styles.rowTitle}>Use your card anywhere</h2>
              <p className={styles.rowDesc}>
                Tap into your crypto to pay for everyday items wherever they
                take ApplePay, GooglePay, or VISA.
              </p>
            </div>
            <div className={styles.zigzagMedia}>
              <div className={styles.blobWrapper}>
                <svg
                  viewBox="0 0 855 863"
                  fill="none"
                  className={styles.blobSvg}
                >
                  <path
                    d="M742.793 502.963C794.879 471.533 834.545 419.861 849.092 355.875C877.496 230.929 799.246 106.634 674.3 78.2293C612.886 64.2678 551.574 76.1009 501.764 106.616C470.042 57.5658 419.946 20.4059 358.457 6.42722C233.511 -21.9772 109.216 56.2727 80.8111 181.218C66.2649 245.204 79.7688 308.964 113.072 359.806C60.9861 391.236 21.3199 442.909 6.77374 506.894C-21.6307 631.84 56.6192 756.136 181.565 784.54C242.979 798.502 304.292 786.669 354.102 756.153C385.824 805.204 435.919 842.364 497.408 856.342C622.354 884.747 746.65 806.497 775.054 681.551C789.6 617.565 776.096 553.805 742.793 502.963Z"
                    fill="url(#radial1)"
                  />
                  <defs>
                    <radialGradient
                      id="radial1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(2093 1186.38) rotate(-158.374) scale(2979.22 2004.44)"
                    >
                      <stop stopColor="#3C315B" />
                      <stop offset="0.5048" stopColor="#4B88F3" />
                      <stop offset="1" stopColor="#D5D1FF" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <img
                src="https://phantom.com/_web_platform_assets/images/cash/cash-payment.webp"
                alt="Cash Payment"
                className={styles.feature3dImg}
              />
            </div>
          </div>

          {/* Row 2: One place for your money (Reverse) */}
          <div className={`${styles.zigzagRow} ${styles.reverse}`}>
            <div className={styles.zigzagText}>
              <h2 className={styles.rowTitle}>One place for your money</h2>
              <p className={styles.rowDesc}>
                Cash your paycheck, trade tokens, or even pay back friends with
                your funds.
              </p>
            </div>
            <div className={styles.zigzagMedia}>
              <div className={styles.blobWrapper}>
                <svg
                  viewBox="0 0 1157 739"
                  fill="none"
                  className={styles.blobSvg}
                >
                  <path
                    d="M1080.76 155.549C960.428 104.36 825.434 170.647 736.252 230.47C750.607 214.948 762.044 198.185 769.524 180.603C790.092 132.254 777.027 86.0339 722.332 62.7661C647.217 30.8117 538.95 62.6166 467.152 115.992C474.432 106.977 479.942 98.0742 483.682 89.2834C498.017 55.5854 488.094 26.2748 449.443 9.83218C327.655 -41.9774 113.204 122.01 32.8007 311.012C-29.8389 458.258 -10.6138 619.566 176.079 698.987C504.25 838.594 1028.72 587.612 1139.04 328.284C1182.36 226.457 1137.64 179.747 1080.76 155.549Z"
                    fill="url(#radial2)"
                  />
                  <defs>
                    <radialGradient
                      id="radial2"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(217.501 1051.88) rotate(-49.3901) scale(3630.33 2929.52)"
                    >
                      <stop stopColor="#3C315B" />
                      <stop offset="0.2997" stopColor="#4A87F2" />
                      <stop offset="1" stopColor="#E2DFFE" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <img
                src="https://phantom.com/_web_platform_assets/images/cash/cash-transfer.webp"
                alt="Cash Transfer"
                className={styles.feature3dImg}
              />
            </div>
          </div>

          {/* Row 3: Earn while you sleep */}
          <div className={styles.zigzagRow}>
            <div className={styles.zigzagText}>
              <h2 className={styles.rowTitle}>Earn while you sleep</h2>
              <p className={styles.rowDesc}>
                Make passive income without lockups by holding CASH.
              </p>
            </div>
            <div className={styles.zigzagMedia}>
              <div className={styles.blobWrapper}>
                <svg
                  viewBox="0 0 895 837"
                  fill="none"
                  className={styles.blobSvg}
                >
                  <path
                    d="M351.047 101.968C407.659 28.8496 475.244 -10.177 538.839 3.08398C599.315 15.6945 644.779 73.2123 669.473 156.104C702.126 132.187 736.609 121.768 769.77 128.683C869.41 149.46 919.375 318.868 881.369 507.065C843.363 695.263 731.778 830.983 632.137 810.206C599.045 803.306 571.433 780.013 550.702 745.082C495.827 811.572 431.651 846.361 371.091 833.733C307.626 820.5 260.692 757.81 236.947 668.238C200.841 698.752 161.94 712.841 124.707 705.077C25.0664 684.3 -24.8977 514.893 13.1084 326.695C51.1146 138.498 162.699 2.77642 262.34 23.5537C299.466 31.2955 329.695 59.6728 351.047 101.968Z"
                    fill="url(#radial3)"
                  />
                  <defs>
                    <radialGradient
                      id="radial3"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(268.999 721.879) rotate(-18.0369) scale(978.59 709.721)"
                    >
                      <stop stopColor="#3C315B" />
                      <stop offset="1" stopColor="#4878D7" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <img
                src="https://phantom.com/_web_platform_assets/images/cash/cash-earn.webp"
                alt="Cash Earn"
                className={styles.feature3dImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. Sticky Video & 4단 기능 리스트 (원본 SVG Path 적용) */}
      {/* ========================================================= */}
      <section className={styles.stickyFeatureSection}>
        <div className={styles.container}>
          <div className={styles.stickyGrid}>
            {/* 좌측 Sticky 비디오 */}
            <div className={styles.stickyCol}>
              <div className={styles.videoWrapper}>
                <video
                  src="https://sanity-proxy-v2.phantom.app/files/3nm6d03a/production/37c4f3a4b1d192c058fc6dc55384620eaf2c87b2.mp4#t=0.01"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.stickyVideo}
                />
              </div>
            </div>

            {/* 우측 4단 리스트 */}
            <div
              ref={featureListRef}
              className={`${styles.featureList} ${isFeatureListVisible ? styles.visible : ""}`}
            >
              {/* Item 1: View balance (원본 Card/Wallet SVG) */}
              <div className={styles.featureItem} style={{ "--delay": "0ms" }}>
                <div className={styles.iconBox}>
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
                </div>
                <div>
                  <h4 className={styles.itemTitle}>
                    View your balance in one place
                  </h4>
                  <p className={styles.itemDesc}>
                    See your funds, whether banking, cash, or crypto, as one
                    balance together.
                  </p>
                </div>
              </div>

              {/* Item 2: Move money fast (원본 Clock/Speed SVG) */}
              <div
                className={styles.featureItem}
                style={{ "--delay": "150ms" }}
              >
                <div className={styles.iconBox}>
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
                    <path d="M12 7.5V6.5M12 16.5V17.5M14.1655 9C13.7333 8.4022 12.9254 8 12 8H11.7222C10.4949 8 9.5 8.79594 9.5 9.77778V9.8541C9.5 10.5564 9.99598 11.1984 10.7812 11.5125L13.2188 12.4875C14.004 12.8016 14.5 13.4436 14.5 14.1459C14.5 15.1699 13.4624 16 12.1824 16H12C11.0746 16 10.2667 15.5978 9.83446 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.itemTitle}>Move money fast</h4>
                  <p className={styles.itemDesc}>
                    Add funds from your bank to Phantom (and vice-versa) without
                    holdups or heavy fees.
                  </p>
                </div>
              </div>

              {/* Item 3: Frictionless transfers (원본 Lightning SVG) */}
              <div
                className={styles.featureItem}
                style={{ "--delay": "300ms" }}
              >
                <div className={styles.iconBox}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  >
                    <path d="M19.5657 9H13.5C13.2239 9 13 8.77614 13 8.5V2.40139C13 1.90668 12.3584 1.71242 12.084 2.12404L4.01823 14.2226C3.79672 14.5549 4.03491 15 4.43426 15H10.5C10.7761 15 11 15.2239 11 15.5V21.5986C11 22.0933 11.6416 22.2876 11.916 21.876L19.9818 9.77735C20.2033 9.44507 19.9651 9 19.5657 9Z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.itemTitle}>Frictionless transfers</h4>
                  <p className={styles.itemDesc}>
                    Transfer freely to friends on Phantom or between your crypto
                    wallet and other accounts.
                  </p>
                </div>
              </div>

              {/* Item 4: Quick buy & sell (원본 Double Arrows SVG) */}
              <div
                className={styles.featureItem}
                style={{ "--delay": "450ms" }}
              >
                <div className={styles.iconBox}>
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
                    <path d="M3 18H3.75736C4.55301 18 5.31607 17.6839 5.87868 17.1213L15.1213 7.87868C15.6839 7.31607 16.447 7 17.2426 7H19M3 6H3.75736C4.55301 6 5.31607 6.31607 5.87868 6.87868L8 9M19 17H17.2426C16.447 17 15.6839 16.6839 15.1213 16.1213L14 15M18 4L21 7L18 10M18 14L21 17L18 20" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.itemTitle}>
                    Quick buy &amp; sell crypto
                  </h4>
                  <p className={styles.itemDesc}>
                    Go from crypto to CASH with a few taps to complete trades
                    without fees on stablecoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. Powered by CASH 섹션 */}
      {/* ========================================================= */}
      <section className={styles.poweredSection}>
        <div
          ref={poweredRef}
          className={`${styles.poweredContent} ${isPoweredVisible ? styles.visible : ""}`}
        >
          <h2 className={styles.poweredTitle}>
            Powered by <GhostIcon width={120} height={100} color="#3C315B" />{" "}
            CASH
          </h2>
          <div className={styles.poweredBtnWrapper}>
            <button type="button" className={styles.learnMoreBtn}>
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. New news 섹션 */}
      {/* ========================================================= */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          <div
            ref={newsRef}
            className={`${styles.sectionHeader} ${isNewsVisible ? styles.visible : ""}`}
          >
            <h2 className={styles.newsSectionTitle}>New news</h2>
          </div>

          <div className={styles.newsCardWrapper}>
            <a
              href="https://phantom.com/learn/blog/introducing-phantom-cash"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsCard}
            >
              <div className={styles.newsImgBox}>
                <img
                  src="https://sanity-proxy-v2.phantom.app/images/3nm6d03a/production/58e6465e9a7b86179f446fc0d512413df4e5f940-1632x700.jpg?w=1200&auto=format"
                  alt="Introducing Phantom Cash"
                  className={styles.newsImg}
                />
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsTextGroup}>
                  <h3 className={styles.newsTitle}>
                    Introducing Phantom Cash: New Money, Now in Your Wallet
                  </h3>
                  <span className={styles.newsDate}>Sep 30, 2025</span>
                </div>
                <ul className={styles.newsTagList}>
                  <li className={styles.tagBadge}>Beginner</li>
                  <li className={styles.tagBadge}>News</li>
                  <li className={styles.tagBadge}>Cash</li>
                  <li className={styles.tagBadge}>Wallet</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. FAQ 아코디언 섹션 */}
      {/* ========================================================= */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div
            ref={faqRef}
            className={`${styles.sectionHeader} ${isFaqVisible ? styles.visible : ""}`}
          >
            <h2 className={styles.faqSectionTitle}>FAQ</h2>
          </div>

          <div className={styles.accordionContainer}>
            {faqList.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={styles.accordionItem}>
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.accordionQuestion}>{item.q}</span>
                    <span
                      className={`${styles.accordionIcon} ${isOpen ? styles.rotated : ""}`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="12" y1="7" x2="12" y2="17" />
                        <line x1="7" y1="12" x2="17" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`${styles.accordionBody} ${isOpen ? styles.open : ""}`}
                  >
                    <div className={styles.accordionContent}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. Legal Disclaimer 섹션 */}
      {/* ========================================================= */}
      <section className={styles.disclaimerSection}>
        <div className={styles.container}>
          <p className={styles.disclaimerText}>
            <i>
              The Prepaid Debit Visa Card (the “Card”) is issued by Lead Bank
              pursuant to licensing by Visa U.S.A. Inc. and may be used
              everywhere Visa is accepted. Must be 18 or older to apply. Fees
              may apply. See Cardholder Agreement and Phantom Technologies,
              Inc.'s ("Phantom") website for more details.
              <br />
              <br />
              Bridge Ventures LLC (“Bridge”) is not a bank. Bridge is a
              financial technology company and is the Program Manager
              responsible for managing and operating the Card on behalf of Lead
              Bank. Phantom is not a bank. Phantom is a financial technology
              company and is the Platform Provider responsible for the
              application, access, and management of/for the card.
            </i>
          </p>
        </div>
      </section>
    </div>
  );
}
