import React, { useEffect, useState } from "react";
import { ChefItem } from "../Components/ChefItem";

const Chef = () => {
  const [loading, setLoading] = useState(true);
  const [chefInfo, setChefInfo] = useState([]);
  const url = "http://localhost:5000/category";


useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setChefInfo(data);
        console.log(data);
        setLoading(false)
    };

    fetchData();
  }, [loading]);

 
   if (loading) {
     return (
       <p>Loading...</p>
     );
   }

 

  return (
    <div className=" py-16">
      <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl my-5">
        Our Top Chef
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {chefInfo.map((chef) => (
          <ChefItem {...chef} key={chef.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
