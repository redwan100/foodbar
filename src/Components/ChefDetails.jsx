import { Rating } from '@smastrom/react-rating';
import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

import { useLoaderData,Link } from 'react-router-dom'

const ChefDetails = () => {
    const data = useLoaderData();
    
    console.log(data);
   const {
     id,
     chefPicture,
     chefName,
     bio,
     like,
     ratings,
     yearsOfExperience,
     numberOfRecipes,
     recipi,
   } = data[0];


  const recipeItem = recipi.map((item)=>{
    const { Picture, cookingMethod, id, ingredients, rating, recipeName } =
      item;

      const ingredientItem = ingredients.map((item)=><p className='bg-gray-300 m-2 p-[4px] rounded-md text-center capitalize font-semibold'>{item}</p>);
   return (
       <React.Fragment key={id}>
         <div className="card bg-base-100 shadow-xl">
           <figure>
             <img
               className="max-w-full object-cover"
               src={Picture}
               alt="recipe"
             />
           </figure>
           <div className="card-body">
             <h2 className="card-title">
               {recipeName}
               <div className="badge badge-secondary">NEW</div>
             </h2>
             <div>
               <strong className="">Cooking Method: </strong>
               <p className='text-gray-700'>{cookingMethod}</p>
             </div>

             <div>
              <p><strong>Ingredients:</strong>
              <p className='bg-gray-100 rounded-md flex gap-1 flex-wrap'>{ingredientItem}</p></p>
             </div>
             <div className="card-actions justify-end">
               <div className="badge badge-outline">Fashion</div>
               <div className="badge badge-outline">Products</div>
             </div>
           </div>
         </div>
       </React.Fragment>
   );
})


  return (

    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className='max-w-full object-cover' src={chefPicture} alt="Album" />
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
          <h2 className="card-title text-2xl">{chefName}</h2>
        <p className='text-gray-700 text-sm sm:text-base'>{bio}</p>

      {/* ===== Recipe ==== */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>{recipeItem}</div>
      </div>
      <Link
        to={`/`}
        className="p-2 shadow-sm bg-slate-100 rounded-md text-gray-800 font-semibold flex items-center gap-1 "
      >
        <MdOutlineKeyboardDoubleArrowLeft />
        <span> Go Back</span>
      </Link>
    </div>
  );
}

export default ChefDetails