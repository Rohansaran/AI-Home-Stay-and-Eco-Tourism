import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display:"flex",
      gap:"20px",
      padding:"20px",
      background:"#e8f5e9"
    }}>
      <h2>EcoStay AI</h2>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;