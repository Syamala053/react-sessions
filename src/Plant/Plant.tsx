import React, { useState } from "react";
import "./Plant.css";
import { TPlant } from "../App";

type PlantProps = {
  plant: TPlant;
};

function Plant({ plant }: PlantProps): React.ReactElement {
  const [price, setPrice] = useState(plant.price);

  return (
    <div className="plantContainer">
      <img src={plant.image} className="plantImage" alt={plant.name} />
      <p className="plantName">{plant.name}</p>
      <div className="priceContainer">
        <button
          onClick={(event) => {
            setPrice((prevPrice) => prevPrice - 1);
          }}
        >
          -
        </button>
        <p>{price}</p>
        <button
          onClick={() => {
            setPrice((prevPrice) => prevPrice + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Plant;
