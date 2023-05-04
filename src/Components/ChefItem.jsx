import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { AiFillLike } from "react-icons/ai";

export const ChefItem = ({
  id,
  chefPicture,
  chefName,
  bio,
  numberOfRecipes,
  ratings,
  like,
  yearsOfExperience,
}) => {
 
  return (
    
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-full" src={chefPicture} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="space-y-3">
          <div className="w-24 flex gap-3">
            <Rating value={ratings} readOnly />
            <span>{ratings}</span>{" "}
          </div>

          <p className="flex items-center gap-1">
            <AiFillLike size={20} className="text-blue-500" /> {like}
          </p>
          <div>
            <h1>
              Numbers Of recipe <strong className="">{numberOfRecipes}</strong>
            </h1>
          </div>
          <div>
            <p className="font-medium">Experience:{yearsOfExperience} Years</p>
          </div>
        </div>
        <h2 className="card-title">{chefName}</h2>
        
        <div className="card-actions justify-end"></div>
        <Link
          to={`/chefItem/${id}`}
          className="btn w-full mt-[auto!important] sm:w-max"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};
