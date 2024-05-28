/* eslint-disable react/prop-types */
import React from "react";
import Hero from "./Hero";
import Delivery from "./Delivery";
import FoodSlider from "./FoodSlider";

function Home({ handleAdd }) {
  return (
    <div>
      <Hero />
      <Delivery />
      <FoodSlider handleAdd={handleAdd} />
    </div>
  );
}

export default Home;
