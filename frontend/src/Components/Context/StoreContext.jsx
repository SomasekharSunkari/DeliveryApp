import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);
const ContextProvider = (props) => {
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    

    useEffect(()=>{
        async function loadInitData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadInitData()

    },[])

    const [cartItems, setCartItems] = useState({});
    const [foodList,setFoodList] = useState([]);
    const addToCart = async (id) => {
        if (!cartItems[id]) {
            setCartItems(prev => ({ ...prev, [id]: 1 }))
        }
        else {
            setCartItems(prev => ({ ...prev, [id]: prev[id] + 1 }))
        }
        if(token){
            await axios.post(url+"/api/cart/addItem",{id},{headers:{token}})

        }
    }
    const loadCartData = async (token)=>{
        const response = await axios.post(url+"/api/cart/getItems",{},{headers:{token}})
        setCartItems(response.data.cartData)
    }
    const removeFromCart =async (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
        if(token){
            await axios.post(url+"/api/cart/removeItem",{id},{headers:{token}})
        }
    }
    const fetchFoodList = async ()=>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)

    }
    const getCartItemsTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = foodList.find((fitem) => fitem._id === item)
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
        getCartItemsTotal, url, token, setToken,foodList
    }
    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])
    return <StoreContext.Provider value={ContextValue}>
        {props.children}
    </StoreContext.Provider>
}

export default ContextProvider;