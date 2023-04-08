import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/developer-portfolio" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/developer-portfolio/contact" element={<Contact />} />
        <Route exact path="developer-portfolio/portfolio" element={<Portfolio />} />
        {/* <Route exact path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
