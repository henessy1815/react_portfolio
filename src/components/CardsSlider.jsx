import { useRef } from "react";
import "./CardsSlider.css";

export default function CardsSlider({ sectionData }) {
  const scrollRef = useRef(null);
  const isDark = sectionData.theme === "dark";

  // 좌우 스크롤 이동 함수
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-container">
      {/* 1. 배지 및 좌우 스크롤 화살표 */}
      <div className="slider-header">
        <div className={`slider-badge ${isDark ? "dark-badge" : ""}`}>
          <span>⚡</span>
          <span>{sectionData.badgeText}</span>
        </div>
        <div className="slider-nav-btns">
          <button
            className={`nav-arrow-btn ${isDark ? "dark-arrow" : ""}`}
            onClick={() => handleScroll("left")}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className={`nav-arrow-btn ${isDark ? "dark-arrow" : ""}`}
            onClick={() => handleScroll("right")}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* 2. 가로 슬라이더 카드 목록 */}
      <div className="cards-track" ref={scrollRef}>
        {sectionData.cards.map((card) => (
          <div
            key={card.id}
            className="feature-card"
            style={{ backgroundColor: card.bgColor, color: card.textColor }}
          >
            <p className="card-title">{card.text}</p>
            <div className="card-video-box">
              <video
                src={card.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="card-video"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
