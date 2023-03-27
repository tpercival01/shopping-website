import Navbar from "../components/navbar";
import NavButton from "../components/openNav";
import { useState, useEffect } from "react";

//localStorage.removeItem("basket");
//localStorage.removeItem("count");

// Checking for localstorage, if not start state as empty.
const Cart = () => {
  const storedCount =
    localStorage.getItem("count") === null
      ? 0
      : JSON.parse(localStorage.getItem("count"));

  const storedBasket =
    localStorage.getItem("basket") === null
      ? []
      : JSON.parse(localStorage.getItem("basket"));

  const [getItemCount, setItemCount] = useState(storedCount);
  const [getBasket, setBasket] = useState(storedBasket);

  // Simply open and close navigation menu. Might change for static menu
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

  const handleShopButtons = (e) => {
    const sign = e.target.innerHTML;
    const itemName = e.target.parentElement.parentElement.id;
    const i = getBasket.findIndex((el) => el.name === itemName);

    if (i > -1) {
      let tempBasket = [...getBasket];
      if (sign === "-") {
        tempBasket[i].quantity -= 1;
        setBasket(tempBasket);
        setItemCount(getItemCount - 1);
        if (getBasket[i].quantity === 0) {
          tempBasket.splice(i, 1);
          setBasket(tempBasket);
        }
      } else {
        tempBasket[i].quantity += 1;
        setBasket(tempBasket);
        setItemCount(getItemCount + 1);
      }
    }
  };

  const handleStoreNav = () => {
    localStorage.setItem("count", JSON.stringify(getItemCount));
    localStorage.setItem("basket", JSON.stringify(getBasket));
  };

  let totalPrice = getBasket.reduce((sum, obj) => {
    return sum + obj.price * obj.quantity;
  }, 0);

  return (
    <div id="shopping-cart-container">
      <NavButton onClick={handleNavClick} />
      <Navbar storeOnNav={handleStoreNav} />
      <h1>Shopping cart</h1>
      <p id="total-price-all">
        There are {getItemCount} items in the basket with a total price of: £
        {totalPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </p>
      {getBasket.map((item, key) => {
        let totalItem = item.price * item.quantity;
        return (
          <div key={key} id={item.name} className="shopping-list-item">
            <p>{item.name}</p>
            <p>
              <strong>Quantity</strong>: {item.quantity}
            </p>
            <p>
              <strong>Total price</strong>: £
              {totalItem.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </p>
            <div id="buyButtons">
              <span id="cartMinus" onClick={handleShopButtons}>
                -
              </span>
              <span id="cartAdd" onClick={handleShopButtons}>
                +
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
