import { Rating } from '@smastrom/react-rating';
import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaQuoteRight } from 'react-icons/fa';
import { useLoaderData,Link } from 'react-router-dom'

const ChefDetails = () => {
    const data = useLoaderData();
    
    console.log(data[0]);
   const {
     id,
     image,
     chef_name,
     bio,
     experiences,
     like,
     recipe_items,
     rating,
     years_of_experience,
   } = data[0];


   const li = recipe_items.map((recipe) => (
     <li className="bg-gray-100 p-1 rounded-md capitalize">{recipe.name}</li>
   ));
  return (
    <div className="relative">
      <Link
        to={`/`}
        className="p-2 shadow-sm bg-slate-100 rounded-md text-gray-800 mx-auto absolute btn-sm top-2 left-0 font-semibold flex items-center gap-1 sm:left-8 md:left-11 lg:left-16"
      >
        <MdOutlineKeyboardDoubleArrowLeft />
        Go Back
      </Link>
      <div className="w-[50%] md:w-[60%] mx-auto border">
        <div className="relative mx-auto w-full block">
          <img src={image} alt="" className=" w-full object-cover" />
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
    </div>
  );
}

export default ChefDetails