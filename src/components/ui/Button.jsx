/**
 * Button Component
 * @param {string} text
 * @param {function} onClick
 */



/**
 * Props:
 * text - button text
 */

function Button({ text }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;