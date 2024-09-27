import React, { useContext } from 'react'
import "./PlaceHolder.css"
import { StoreContext } from '../Context/StoreContext'
// import "../Cart/Cart.css"

const PlaceHolder = () => {
  const {getCartItemsTotal}  = useContext(StoreContext)
  return (
    <form className='placeorder' >
      <div className="placeorderleft">
        <p className='title'>Delivery Information</p>
        <div className='multifields'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>

        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />

      </div>
      <div className="placeorderright">
      <div className="cart-checkout-main">
            <h2 style={{marginBottom:"20px"}}>Cart Total</h2>
            <div className="cart-item-details">
              <p>Subtotal</p>
              <p>${getCartItemsTotal()}</p>
              
            </div>
            <hr />
            <div className="cart-item-details">
              <p>Delivery Fee</p>
              <p>2</p>
              
            </div>
            <hr />
            <div className="cart-item-details">
              <b>Total</b>
              <b>${getCartItemsTotal()+2}</b>
              {/* <hr /> */}
            </div>
            <button onClick={()=>{navigate("/thankyou")}}>PROCEED TO PAYMENT</button>

          </div>

      </div>
    </form>
  )
}

export default PlaceHolder
