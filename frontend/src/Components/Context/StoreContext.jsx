import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);
const ContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({});
    const addToCart = (id)=>{
        if(!cartItems[id]){
            setCartItems(prev=>({...prev,[id]:1}))
        }
        else{
            setCartItems(prev=>({...prev,[id]:prev[id]+1}))
        }
    }
    const removeFromCart = (id)=>{
        setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
    }
    const getCartItemsTotal = ()=>{
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let iteminfo = food_list.find((fitem)=>fitem._id === item)
                total += iteminfo.price * cartItems[item]
            }
          
        }


        return total;
    }
    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartItemsTotal
    }
    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    return <StoreContext.Provider value={ContextValue}>
        {props.children}
    </StoreContext.Provider>
}

export default ContextProvider;