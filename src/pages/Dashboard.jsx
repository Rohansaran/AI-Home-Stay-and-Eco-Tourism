import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);

  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/homestays")
      .then((res) => {
        setHomestays(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [navigate]);

  const handleAI = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }

    try {
      setAiLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/ai/suggest",
        {
          prompt,
        }
      );

      setAiResponse(res.data.response);
    } catch (err) {
      console.log(err);
      alert("AI request failed.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1>EcoStay Dashboard</h1>

      <p>Welcome to your authenticated dashboard.</p>

      <hr />

      <h2>AI Travel Assistant</h2>

      <textarea
        rows="4"
        placeholder="Ask AI for eco-friendly travel suggestions..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          resize: "vertical",
        }}
      />

      <button
        onClick={handleAI}
        style={{
          padding: "10px 20px",
        }}
      >
        {aiLoading ? "Generating..." : "Ask AI"}
      </button>

      {aiResponse && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            background: "#f7f7f7",
          }}
        >
          <h3>AI Response</h3>

          <p>{aiResponse}</p>
        </div>
      )}

      <hr
        style={{
          margin: "30px 0",
        }}
      />

      <h2>Your Homestays</h2>

      {loading ? (
        <h3>Loading...</h3>
      ) : homestays.length === 0 ? (
        <div
          style={{
            padding: "25px",
            border: "1px dashed gray",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>No Homestays Yet</h3>
          <p>Create your first homestay to get started.</p>
        </div>
      ) : (
        homestays.map((stay) => (
          <div
            key={stay._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{stay.title}</h3>

            <p>
              📍 {stay.location}, {stay.state}, {stay.country}
            </p>

            <p>💰 ₹{stay.price}</p>

            <p>⭐ {stay.rating}</p>

            <p>🌿 Eco Score: {stay.ecoScore}</p>

            <p>🏕 Category: {stay.category}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;