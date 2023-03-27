import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleNav = (e) => {
    console.log(e.target);

    switch (e.target.id) {
      case "navbarHome":
        navigate("/");
        break;

      case "clothes":
        navigate("/clothes");
        break;

      case "toys":
        navigate("/toys");
        break;

      case "acc":
        navigate("/acc");
        break;

      default:
        console.log("No route, error.");
    }
  };

  return (
    <div id="navbar">
      <div
        id="navbarHome"
        className="navbarItem"
        onClick={(e) => {
          handleNav(e);
          props.storeOnNav();
        }}
      >
        Home page
      </div>
      <div id="navbarShops">
        <span
          onClick={(e) => {
            handleNav(e);
            props.storeOnNav();
          }}
          id="clothes"
        >
          Clothes
        </span>
        <span
          onClick={(e) => {
            handleNav(e);
            props.storeOnNav();
          }}
          id="acc"
        >
          Accessories
        </span>
        <span
          onClick={(e) => {
            handleNav(e);
            props.storeOnNav();
          }}
          id="toys"
        >
          Toys
        </span>
      </div>
    </div>
  );
};

export default Navbar;
