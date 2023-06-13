import React, { useState } from "react";
import "./Plant.css";
import { TPlant } from "../App";

type PlantProps = {
  plant: TPlant;
  deleteHandler: () => void;
};

function Plant({ plant, deleteHandler }: PlantProps): React.ReactElement {
  const [price, setPrice] = useState(plant.price);

  return (
    <div className="plantContainer">
      <img src={plant.image} className="plantImage" alt={plant.name} />
      <p className="plantName">{plant.name}</p>
      <div className="priceContainer">
        <button
          onClick={() => {
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
      <button className="deleteButton" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export default Plant;
