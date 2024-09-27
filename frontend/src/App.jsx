import { useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import PlaceHolder from './Components/PlaceOrder/PlaceHolder.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Loginpopup from './Components/Loginpopup/Loginpopup.jsx'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Thankyou from './Components/Thankyou.jsx'
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [showlogin, setShowLogin] = useState(false);
  const ref = useRef();
 
  return (
    <>
      {showlogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
          <Route path='/placeorder' element={<PlaceHolder />} />
          <Route path='/thankyou' element={<Thankyou/>}/>
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
