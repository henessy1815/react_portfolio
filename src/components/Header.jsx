import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        borderBottom: "1px solid #333",
      }}
    >
      <strong>Phantom</strong>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/trade">Trade</Link>
        <Link to="/cash">Cash</Link>
        <Link to="/security">Security</Link>
      </nav>
    </header>
  );
}
