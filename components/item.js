import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const navigate = useNavigate();

  const openProduct = () => {
    let address = "/products/" + props.item.id;
    let product = { name: props.item.name, img: props.item.img };
    navigate(address, { state: { product } });
  };

  return (
    <div className={`displayItem ${props.item.name}`} onClick={openProduct}>
      <div id="displayItemImage"></div>
      <div id="displayItemInfo">
        <p>{props.item.name}</p>
        <span style={{ display: "flex", justifyContent: "center" }}>
          £ {props.item.price}
        </span>
        <div id="displayItemPrice">
          <span
            id="minus"
            onClick={(e) => {
              props.onClick(e, props.item.name, "-");
            }}
          >
            -
          </span>
          <span
            id="add"
            onClick={(e) => {
              props.onClick(e, props.item.name, "+");
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
