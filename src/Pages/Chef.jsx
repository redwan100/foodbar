import React, { useEffect, useState } from "react";
import { ChefItem } from "../Components/ChefItem";
import LoadingSpinner from "../Components/LoadingSpinner";
import SectionTitle from "../Shared/SectionTitle";

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
      <LoadingSpinner />
     );
   }

 

  return (
    <div className=" py-16">
      <div className="my-8">
        <SectionTitle title={'Our Top Chef'}/>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {chefInfo.map((chef) => (
          <ChefItem {...chef} key={chef.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
