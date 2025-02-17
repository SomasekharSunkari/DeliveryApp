import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);
const ContextProvider = (props) => {
    const url = "https://foordel-backend.onrender.com"
    // const url = "http://localhost:4001"
    const [token, setToken] = useState("");
    const [cartItems, setCartItems] = useState({});
    const [foodList, setFoodList] = useState([]);
    useEffect(() => {
        console.log("Cart itme")
        console.log(cartItems)
        console.log("Cart itme")

    }, [])
    useEffect(() => {
        async function loadInitData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
                console.log(cartItems)

            }
        }
        loadInitData()


    }, [])
    const addToCart = async (id) => {
        if (!cartItems[id]) {
            setCartItems(prev => ({ ...prev, [id]: 1 }))
        }
        else {
            setCartItems(prev => ({ ...prev, [id]: prev[id] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/addItem", { id }, { headers: { token } })
        }
    }
    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/getItems", {}, { headers: { token } })
        setCartItems(response.data.cartData)
        // console.log(cartItems)

    }
    const removeFromCart = async (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/removeItem", { id }, { headers: { token } })
        }
    }
    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
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
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartItemsTotal, url, token, setToken, foodList
    }

    return <StoreContext.Provider value={ContextValue}>
        {props.children}
    </StoreContext.Provider>
}

export default ContextProvider;