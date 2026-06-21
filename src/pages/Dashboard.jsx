import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Button,
  Input,
  Modal,
  Loader,
  Toast,
  ThemeToggle,
} from "../components/ui";

function Dashboard() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "20px",
          background: dark ? "#222" : "#fff",
          color: dark ? "#fff" : "#000",
          minHeight: "100vh",
        }}
      >
        <h1>Dashboard</h1>

        <ThemeToggle
          dark={dark}
          setDark={setDark}
        />

        <br />

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