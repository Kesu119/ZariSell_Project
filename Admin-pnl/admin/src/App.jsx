import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Requirement from './pages/Requirement/Requirement'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)

  const url="http://localhost:5000"

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <ToastContainer/>
      <Navbar setShowLogin={setShowLogin}/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/requirements" element={<Requirement />}/>
          {/* <Route path="/login" element={<LoginPopUp />}/> */}

        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
