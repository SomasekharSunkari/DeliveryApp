import React, { useEffect } from 'react'

import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import "./FoodDisplay.css"
const FoodDisplay = ({ category }) => {
 
  const { food_list } = useContext(StoreContext);
useEffect(()=>{
  
  
  gsap.to(".stager-box",{
    opacity:1,
      // repeat:-1,
      // repeatDelay:2
      // yoyo:true,
      stagger:0.2

    })
})
  return (
    <div className='food_disply' id='food_display'>
      <h2>Top Dishes Near You</h2>
      <div className="food_items">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category)
            return <div className="stager-box"><FoodItem  key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} /></div>
        })}
      </div>

    </div>
  )
}

export default FoodDisplay
