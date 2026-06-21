import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Button,
  Input,
  Modal,
  Loader,
  Toast,
} from "../components/ui";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>

        <Input placeholder="Search Homestay" />

        <br />

        <Button text="Book Now" />

        <Modal />

        <Loader />

        <Toast />
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;