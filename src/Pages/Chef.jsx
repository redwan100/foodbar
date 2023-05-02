import React, { useEffect, useState } from 'react'
import { ChefItem } from '../Components/ChefItem';

const Chef = () => {
    const [chefInfo, setChefInfo] = useState([])
    const url = "http://localhost:5000/category";
    

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(url);
            const data =await res.json();
            setChefInfo(data)
        }

        fetchData()
    },[])

  return (
    <div>
        {
            chefInfo.map((chef)=><ChefItem key={chef.id}/>)
        }
    </div>
  )
}

export default Chef