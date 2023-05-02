import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ChefDetails = () => {
    const data = useLoaderData();
    console.log(data[0]);
   const {id,image,chef_name,bio,experiences,like, recipe_items}=(data[0]);

  return (
    <div>ChefDetails</div>
  )
}

export default ChefDetails