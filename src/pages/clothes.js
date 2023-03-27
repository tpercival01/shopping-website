import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Item from "../components/item";
import NavButton from "../components/openNav";
import Cart from "../components/cartIcon";

const items = [
  { id: 0, name: "A top", price: 3.99, img: "" },
  { id: 1, name: "Some jeans", price: 5.99, img: "" },
  { id: 2, name: "A nice hat", price: 6.99, img: "" },
  { id: 3, name: "A pair of shoes", price: 1.99, img: "" },
  { id: 4, name: "One glove", price: 8.99, img: "" },
  { id: 5, name: "A sleeve", price: 2.99, img: "" },
  { id: 6, name: "The left pinky toe", price: 5.99, img: "" },
  { id: 7, name: "Jumper", price: 8.99, img: "" }
];

//localStorage.removeItem("basket");
//localStorage.removeItem("count");

const Clothes = () => {
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

  function handleClick(e, itemName, button) {
    e.stopPropagation();

    const item = items.find((i) => i.name === itemName);

    checkBasket(item, button);
  }

  const checkBasket = (item, sign) => {
    const i = getBasket.findIndex((e) => e.name === item.name);

    if (i > -1) {
      let tempBasket = [...getBasket];
      if (sign === "-") {
        tempBasket[i].quantity -= 1;
        setItemCount(getItemCount - 1);
        setBasket(tempBasket);
        if (getBasket[i].quantity === 0) {
          tempBasket.splice(i, 1);
          setBasket(tempBasket);
        }
      } else {
        tempBasket[i].quantity += 1;
        setItemCount(getItemCount + 1);
        setBasket(tempBasket);
      }
    } else {
      if (sign === "+") {
        console.log("new item added");
        let new_item = { name: item.name, quantity: 1, price: item.price };
        setBasket([...getBasket, new_item]);
        setItemCount(getItemCount + 1);
      }
    }
  };

  const navigate = useNavigate();

  const toCart = () => {
    localStorage.setItem("basket", JSON.stringify(getBasket));
    localStorage.setItem("count", JSON.stringify(getItemCount));

    navigate("/cart");
  };

  const handleStoreNav = () => {
    localStorage.setItem("count", JSON.stringify(getItemCount));
    localStorage.setItem("basket", JSON.stringify(getBasket));
  };

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
    <div id="clothes-container">
      <NavButton onClick={handleNavClick} />
      <Navbar storeOnNav={handleStoreNav} />
      <div id="clothes-products-grid">
        {items.map((item, key) => (
          <Item key={key} onClick={handleClick} item={item} />
        ))}
      </div>

      <Cart id="cartIcon" onClick={toCart} value={getItemCount} />
    </div>
  );
};

export default Clothes;
