/**
 * Input Component
 * @param {string} placeholder
 */

/**
 * Props:
 * placeholder
 */

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: "10px",
        margin: "10px",
        width: "250px",
      }}
    />
  );
}

export default Input;