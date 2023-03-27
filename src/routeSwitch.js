import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Cart from "./pages/cart";
import Clothes from "./pages/clothes";
import Acc from "./pages/acc";
import Toys from "./pages/toys";
import ProductPage from "./components/productPage";

const items = [];

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      {items.map((item) => (
        <Link to={"items/" + item.id} />
      ))}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/acc" element={<Acc />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
