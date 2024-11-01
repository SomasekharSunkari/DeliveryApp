import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom"
import Sidebar from './components/Sidebar/Sidebar'
import "./App.css"
import Add from "./pages/Add/Add"
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { url } from './assets/assets'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myorders from '../../frontend/src/Components/Myorders/Myorders'
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Orders url={url} />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
