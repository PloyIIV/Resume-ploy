import { useState } from "react";
import "./App.css";
import "../src/index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage";
import Passions from "./components/Passions";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="w-screen bg-white m-0 box-border">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/passions" element={<Passions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} /> 
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
