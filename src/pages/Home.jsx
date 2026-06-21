import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Card
        title="Mountain Homestay"
        description="Eco-friendly stay in Uttarakhand"
      />

      <Card
        title="Village Retreat"
        description="Experience local culture and farming"
      />

      <Footer />
    </>
  );
}

export default Home;