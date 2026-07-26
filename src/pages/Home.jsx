import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setHomestays(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Delete
  const handleDelete = (id) => {
    setHomestays((prev) => prev.filter((stay) => stay._id !== id));
  };

  // Start Edit
  const handleEdit = (id) => {
    const stay = homestays.find((item) => item._id === id);

    setEditingId(id);
    setNewTitle(stay.title);
  };

  // Save Update
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/homestays/${editingId}`,
        {
          title: newTitle,
        }
      );

      setHomestays((prev) =>
        prev.map((stay) =>
          stay._id === editingId ? res.data : stay
        )
      );

      setEditingId(null);
      setNewTitle("");

      alert("Homestay Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <>
      <Navbar />

      <Hero />

      {editingId && (
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            margin: "20px",
          }}
        >
          <h2>Edit Homestay</h2>

          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
            }}
          />

          <br />
          <br />

          <button onClick={handleUpdate}>
            Save Changes
          </button>

          <button
            onClick={() => {
              setEditingId(null);
              setNewTitle("");
            }}
            style={{
              marginLeft: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : homestays.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No Homestays Available</h2>
      ) : (
        homestays.map((stay) => (
          <Card
            key={stay._id}
            id={stay._id}
            title={stay.title}
            description={`${stay.location}, ${stay.state}, ${stay.country} • ₹${stay.price}`}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      )}

      <Footer />
    </>
  );
}

export default Home;