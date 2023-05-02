import React from 'react'
import { Link } from 'react-router-dom';

export const ChefItem = ({id,image}) => {
console.log();
    
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          <Link to={`/chefDetails/:${id}`} className="btn w-full">View Recipes</Link>
        </div>
      </div>
    </div>
  );
}
