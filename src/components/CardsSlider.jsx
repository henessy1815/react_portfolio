import { useRef, useState, useEffect } from "react";
import "./CardsSlider.css";

export default function CardsSlider({ sectionData }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const isDark = sectionData.theme === "dark";

  // 카드가 3장인 섹션(cash 섹션)은 슬라이더 기능 비활성화
  const isStatic = sectionData.id === "cash";

  // [수정 1] 화면 진입 시 펼쳐지는 애니메이션 상태 및 Observer 등록
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 }, // 화면에 70% 정도 보였을 때 펼쳐짐 시작
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 마우스 드래그 상태 관리
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 버튼 클릭 시 좌우 이동
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // 1. 드래그 시작 (MouseDown)
  const handleMouseDown = (e) => {
    if (isStatic) return; // 고정 섹션은 드래그 시작 차단
    setIsDragging(true);
    // 현재 마우스 클릭 X 좌표와 컨테이너의 현재 scrollLeft 저장
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // 2. 드래그 중 이동 (MouseMove)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.8; // 드래그 감도 배율 (0.8)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // 3. 드래그 종료 (MouseUp & MouseLeave)
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const renderBadgeIcon = (id) => {
    switch (id) {
      case "trading":
        return (
          <svg
            className="badge-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
            <line x1="4" y1="4" x2="9" y2="9" />
          </svg>
        );
      case "cash":
        return (
          <svg
            className="badge-icon"
            style={{ transform: "translateY(-1.5px)" }}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9.5" />
            <path d="M14.5 9.5c-.5-.9-1.5-1.5-2.5-1.5-1.4 0-2.5.9-2.5 2s.9 1.8 2.5 2.2c1.6.4 2.5 1.1 2.5 2.3 0 1.2-1.1 2-2.5 2-1.3 0-2.3-.6-2.7-1.5" />
            <line x1="12" y1="6.5" x2="12" y2="17.5" />
          </svg>
        );
      case "security":
        return (
          <svg
            className="badge-icon"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="3.5" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <path d="M9 9v2a3 3 0 0 0 6 0V9" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    /* [수정 2] ref={containerRef} 및 is-visible/is-stacked 클래스 분기 */
    <div
      ref={containerRef}
      className={`slider-container ${isStatic ? "static-container" : ""} ${isVisible ? "is-visible" : "is-stacked"}`}
    >
      {/* 1. 상단 뱃지 및 슬라이더 화살표 */}
      <div className="slider-header">
        <div className={`slider-badge ${isDark ? "dark-badge" : ""}`}>
          {renderBadgeIcon(sectionData.id)}
          <span>{sectionData.badgeText}</span>
        </div>

        {/* isStatic이 아닐 때만 네비게이션 버튼 표시 */}
        {!isStatic && (
          <div className="slider-nav-btns">
            <button
              className={`nav-arrow-btn ${isDark ? "dark-arrow" : ""}`}
              onClick={() => handleScroll("left")}
              aria-label="Previous"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className={`nav-arrow-btn ${isDark ? "dark-arrow" : ""}`}
              onClick={() => handleScroll("right")}
              aria-label="Next"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* 2. 카드 목록 트랙 */}
      <div
        className={`cards-track ${isStatic ? "static-track" : ""} ${isDragging ? "is-dragging" : ""}`}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {/* [수정 3] index 인자를 받아 --card-index CSS 변수로 전달 */}
        {sectionData.cards.map((card, index) => (
          <div
            key={card.id}
            className="feature-card"
            style={{
              backgroundColor: card.bgColor,
              color: card.textColor,
              "--card-index": index,
            }}
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
