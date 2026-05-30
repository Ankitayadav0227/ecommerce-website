import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";


import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;