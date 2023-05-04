import React from "react";
import Slider from "../Shared/Slider/Slider";
import Chef from "./Chef";
import LatestRecipe from "../Components/Recipe/LatestRecipe";
import LatestPost from "../Components/LatestPost";

const Home = () => {
  return (
    <div>
      <Slider />
      <div>
        <Chef />
      </div>

      <div>
        <LatestRecipe />
      </div>

      <div>
        <LatestPost />
      </div>
    </div>
  );
};

export default Home;
