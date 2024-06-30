import React from "react";
import CardComponent from "../../components/cardComponent/CardComponent";
import { Cards_1 } from "../../utils/constants";

import "./home.css";

const Home = () => {
  // Duplicate array items 3 times
  const duplicatedCards = [].concat(...Array(3).fill(Cards_1));

  return (
    <div className="home-container">
      <div className="featured-container">
        {duplicatedCards.map((cardProps, index) => (
          <CardComponent key={index} cardProps={cardProps} />
        ))}
      </div>
    </div>
  );
};

export default Home;
