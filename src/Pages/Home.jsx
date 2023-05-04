import React from 'react'
import Slider from '../Shared/Slider/Slider'
import Chef from './Chef'
import LatestRecipe from '../Components/Recipe/LatestRecipe'

const Home = () => {

  return (
    <div>
        <Slider />
        <div>
          <LatestRecipe />
        </div>
        <div>
        <Chef />
        </div>
    </div>
  )
}

export default Home