const CartIcon = (props) => {
  return (
    <div id={props.id} onClick={props.onClick}>
      <span>{props.value}</span>
    </div>
  );
};

export default CartIcon;
