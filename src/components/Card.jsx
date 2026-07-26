import axios from "axios";

function Card({ id, title, description, onDelete, onEdit }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this homestay?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/homestays/${id}`);

      alert("Homestay Deleted Successfully");

      onDelete(id);
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      <button
        onClick={() => onEdit(id)}
        style={{
          marginRight: "10px",
        }}
      >
        Edit
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Card;