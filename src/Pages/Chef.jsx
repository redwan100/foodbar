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
    <div className='grid gap-5 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))]'>
        {
            chefInfo.map((chef)=><ChefItem {...chef} key={chef.id}/>)
        }
    </div>
  )
}

export default Chef