import React, { useState } from 'react'
import Header from '../Header/Header'
import Exploremenu from '../ExploreMenu/Exploremenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
import AppDownload from '../AppDownload/AppDownload'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Home = () => {
    const [category,setCategory] = useState("All");
 

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <div className='scroll-trigger'>
        <AppDownload/>
        </div>
        

      
    </div>
  )
}

export default Home
