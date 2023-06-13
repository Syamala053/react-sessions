import React from "react";
import "./App.css";

const plantsData = [
  {
    id: 1,
    name: "Aglaonema Pink Anjamani",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/aglaonema-pink-anjamani-medium-growpot-greenkin.jpg?v=1665745797&width=1445",
    price: "250",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/monstera-deliciosa-xlarge-cotton-grey-greenkin.jpg?v=1667067630",
    price: "500",
  },
  {
    id: 3,
    name: "Rubber Plant Burgundy",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/rubber-plant-burgundy-large-cotton-pink-greenkin.jpg?v=1668108333&width=900",
    price: "632",
  },
  {
    id: 4,
    name: "Jade Mini",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/jade-mini-plant-small-elementary-pink-greenkin.jpg?v=1667498553",
    price: "723",
  },
  {
    id: 5,
    name: "Aglaonema Red Lipstick",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/aglaonema-red-lipstick-large-knitted-wine-greenkin.jpg?v=1665745881&width=1445",
    price: "892",
  },
  {
    id: 6,
    name: "Broken Heart Plant",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/broken-heart-plant-large-cotton-yellow-greenkin.jpg?v=1673434111&width=1445",
    price: "878",
  },
  {
    id: 7,
    name: "Money Plant Gold King",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/money-plant-goldking-medium-growpot-greenkin.jpg?v=1667498337&width=533",
    price: "628",
  },
  {
    id: 8,
    name: "ZZ Green",
    image:
      "https://cdn.shopify.com/s/files/1/0577/1971/7922/products/zz-green-medium-jute-white-greenkin.jpg?v=1674928536",
    price: "980",
  },
];

function App() {
  return (
    <div className="root">
      {plantsData.map((plant) => (
        <div className="plantContainer" key={plant.id}>
          <img src={plant.image} className="plantImage" alt={plant.name} />
          <p className="plantName">{plant.name}</p>
          <p className="plantPrice">{plant.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
