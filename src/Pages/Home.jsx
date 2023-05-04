import React from 'react'
import Slider from '../Shared/Slider/Slider'
import Chef from './Chef'
import LatestRecipe from '../Components/Recipe/LatestRecipe'
import LatestPost from '../Components/LatestPost'

const Home = () => {

  return (
    <div>
      <Slider />
      <div>
        <LatestRecipe />
      </div>
      <div>
        <div>
          <Chef />
        </div>
        <div>
          <LatestPost />
        </div>
      </div>
    </div>
  );
}

export default Home