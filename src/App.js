import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Log";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes> {/* Use Routes as the container */}
      <Route path="/" element={<Home />} /> {/* Wrap each Route with Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;