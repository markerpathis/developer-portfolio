import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes></Routes>
      <Footer />
    </Router>
  );
}

export default App;
