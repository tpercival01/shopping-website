import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const toClothes = () => {
    navigate("/clothes");
  };

  const toAcc = () => {
    navigate("/acc");
  };

  const toToys = () => {
    navigate("/toys");
  };

  return (
    <div className="App">
      <div className="home-item">
        <h1>Welcome to shop.</h1>
      </div>
      <div
        className="home-item catalogueButton"
        id="toClothesCatalogue"
        onClick={toClothes}
      >
        Clothes
      </div>
      <div
        className="home-item catalogueButton"
        id="toAccCatalogue"
        onClick={toAcc}
      >
        Accessories
      </div>
      <div
        className="home-item catalogueButton"
        id="toToysCatalogue"
        onClick={toToys}
      >
        Toys
      </div>
    </div>
  );
}
