import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "420px",
          margin: "50px auto",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "15px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#2E8B57",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;