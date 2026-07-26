import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1>About EcoStay AI</h1>

        <p>
          EcoStay AI is a sustainable tourism platform that helps users discover
          eco-friendly homestays across different locations.
        </p>

        <h2>Features</h2>

        <ul>
          <li>Browse eco-friendly homestays</li>
          <li>Create, Update and Delete homestays</li>
          <li>Secure Login using JWT Authentication</li>
          <li>AI powered travel recommendations</li>
          <li>Responsive user interface</li>
        </ul>

        <h2>Technology Stack</h2>

        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB Atlas</li>
          <li>Mongoose</li>
          <li>JWT Authentication</li>
          <li>OpenRouter AI API</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default About;