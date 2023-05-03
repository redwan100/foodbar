import React, { useEffect, useState } from "react";
import { ChefItem } from "../Components/ChefItem";
import { useLoaderData } from "react-router-dom";

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
//   c
 

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {chefInfo.map((chef) => (
        <ChefItem {...chef} key={chef.id} />
      ))}

     
    </div>
  );
};

export default Chef;
