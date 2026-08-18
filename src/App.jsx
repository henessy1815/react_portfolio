import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import TradePage from "./pages/Tradepage";
import CashPage from "./pages/CashPage";
import SecurityPage from "./pages/SecurityPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ padding: "20px" }}>
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
