import { useLocation } from "react-router-dom";
import CartIcon from "./cartIcon";
import NavButton from "./openNav";
import Navbar from "./navbar";

const ProductPage = (props) => {
  const { state } = useLocation();

  const handleNavClick = () => {
    let nav = document.getElementById("navbar");
    if (!nav.classList.contains("openNav")) {
      nav.classList.add("openNav");
      nav.classList.remove("closeNav");
    } else {
      nav.classList.remove("openNav");
      nav.classList.add("closeNav");
    }
  };

  return (
    <div id="product-page-container">
      <NavButton onClick={handleNavClick} style={{ gridRow: "1/1" }} />
      <Navbar />
      <div id="product-page-main">
        <CartIcon />
        <h1 id="product-page-title">{state.product.name}</h1>
        <span
          id="product-page-image"
          style={{ backgroundColor: "black" }}
        ></span>
        <p id="product-page-desc">Lorem ipsum</p>
        <div id="product-page-buttons">
          <span id="minus">-</span>
          <span id="add">+</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
