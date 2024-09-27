import React, { useState } from 'react'

import "../Loginpopup/Loginpopup.css"
import { assets } from '../../assets/assets'
const Loginpopup = ({ setShowLogin }) => {
    const [currentState, setState] = useState("Sign Up")
    return (
        <div className='login-popup-container'>
            <form className='popup'>
                <div className="popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='password' required />
                    <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>

                </div>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing , i agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setState("Sign Up")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setState("Login")}>Login here</span>
                    </p>
                )}

            </form>

        </div>
    )
}

export default Loginpopup
