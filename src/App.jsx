import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import TradePage from "./pages/TradePage/TradePage";
import CashPage from "./pages/CashPage";
import SecurityPage from "./pages/SecurityPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* [수정: 페이지 이동 시 스크롤 최상단 리셋을 위해 ScrollToTop 렌더링 추가] */}
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/cash" element={<CashPage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
