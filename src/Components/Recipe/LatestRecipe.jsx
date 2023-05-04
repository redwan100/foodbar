import React from 'react'
import SectionTitle from '../../Shared/SectionTitle';

const recipes = [
  {
    id: 1,
    title: "Rustic chess pizza",
    img: "https://images.pexels.com/photos/3843225/pexels-photo-3843225.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Delicious and refreshing summer salad",
    img: "https://images.pexels.com/photos/4020566/pexels-photo-4020566.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Light and tasty vegetarian dinner",
    img: "https://images.pexels.com/photos/7144432/pexels-photo-7144432.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Ultimate vegetarian hamburger",
    img: "https://images.pexels.com/photos/5908045/pexels-photo-5908045.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const LatestRecipe = () => {
  return (
    <div className='section'>
        <div className='my-8'>
            <SectionTitle title={'Latest Recipe'}/>
        </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {recipes.map((recipe) => (
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={recipe.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-lg font-semibold text-gray-700 sm:text-xl">
                {recipe.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestRecipe