import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import "../Loginpopup/Loginpopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'

const Loginpopup = ({ setShowLogin }) => {
    const { url, token, setToken } = useContext(StoreContext)
    const [currentState, setState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (eve) => {
        const name = eve.target.name;
        const value = eve.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const LoginFunc = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }

    const handleGuestLogin = () => {
        setData({
            email: "x@gmail.com",
            password: "11111111"
        });
    }

    return (
        <div className='login-popup-container'>
            <form className='popup' onSubmit={LoginFunc}>
                <div className="popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "Login" ? <></> : <input type="text" onChange={onChangeHandler} placeholder='Your name' name='name' value={data.name} required />}

                    <input type="email" placeholder='Your email' name='email' onChange={onChangeHandler} value={data.email} required />
                    <input type="password" placeholder='Password' name='password' onChange={onChangeHandler} value={data.password} required />
                    <button type="submit">{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                    {currentState === "Login" && <button type="button" onClick={handleGuestLogin}>Try as Guest</button>}
                </div>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setState("Sign Up")} style={{ cursor: 'pointer' }}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setState("Login")} style={{ cursor: 'pointer' }}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    )
}

export default Loginpopup;