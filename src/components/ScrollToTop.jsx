// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // [수정: 경로(pathname)가 바뀔 때마다 스크롤을 (0, 0) 맨 위로 즉시 리셋]
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // [수정: 불필요한 스크롤 애니메이션 없이 즉시 이동]
    });
  }, [pathname]);

  return null;
}
