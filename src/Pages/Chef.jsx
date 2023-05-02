import React, { useEffect, useState } from 'react'
import { ChefItem } from '../Components/ChefItem';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const [chefInfo, setChefInfo] = useState([])
    const url = "http://localhost:5000/category";
    
const data = useLoaderData();
console.log(data);
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(url);
            const data =await res.json();
            setChefInfo(data)
        }

        fetchData()
    },[])

  return (
    <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
            chefInfo.map((chef)=><ChefItem {...chef} key={chef.id}/>)
        }
    </div>
  )
}

export default Chef