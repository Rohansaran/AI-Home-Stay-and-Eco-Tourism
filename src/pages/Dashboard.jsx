import { useEffect, useState } from "react";

function Dashboard() {
  const [homestays, setHomestays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((res) => res.json())
      .then((data) => setHomestays(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>EcoStay Dashboard</h1>

      {homestays.map((stay) => (
        <div
          key={stay.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{stay.name}</h3>
          <p>📍 {stay.location}</p>
          <p>💰 ₹{stay.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;