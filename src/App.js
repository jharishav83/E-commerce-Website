import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Error from "./Error";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
  <>
  <Router>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error/>}/>

    </Routes>
  </Router>
  </>
  );
}

export default App;
