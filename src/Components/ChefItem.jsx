import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { AiFillLike } from "react-icons/ai";

export const ChefItem = ({
  id,
  image,
  chef_name,
  bio,
  years_of_experience,
  rating,
  like,
  recipe_items
}) => {
    const li = recipe_items.map((recipe) => <li className="bg-gray-100 p-1 rounded-md capitalize">{recipe.name}</li>);

  return (
    <div className="shadow-md p-4 flex flex-col">
      <div className="grid gap-3 sm:gap-1 sm:grid-cols-[100px,_1fr]">
        <div className="relative w-20 h-20 mx-auto sm:mx-0">
          <img
            src={image}
            alt=""
            className=" object-cover rounded-full ring-4 w-full h-full"
          />
          <FaQuoteRight
            className="absolute left-4 -bottom-2 w-6 h-6 bg-blue-300 p-1 rounded-full"
            size={10}
          />
        </div>

        {/* ==========Content=========== */}
        <div className="space-y-3 mb-4">
          <div className="w-24 flex gap-3">
            <Rating value={rating} readOnly />
            <span>{rating}</span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">{bio}</p>

          <div>
            <h1 className="font-medium">List of Recipe</h1>
            <ul className="flex gap-1">{li}</ul>
          </div>

          <p className="font-medium">Experience:{years_of_experience} Years</p>
          <p className="flex items-center gap-1">
            <AiFillLike size={20} className="text-blue-500" /> {like}
          </p>
          <h1 className="text-2xl font-medium">{chef_name}</h1>
        </div>
      </div>

      <Link to={`/chefItem/${id}`} className="btn w-full mt-[auto!important]">
        View Recipes
      </Link>
    </div>
  );
};
