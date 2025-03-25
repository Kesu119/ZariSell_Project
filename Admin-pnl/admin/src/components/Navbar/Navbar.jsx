import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
const Navbar = ({setShowLogin}) => {

const [token,setToken]=useState('');

  useEffect(() => {
    // Retrieve token from localStorage on component mount
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    // Clear token from localStorage and reset token state
    localStorage.removeItem('token');
    setToken('');
  };


  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} />

       <div className='button'>
              {/* <i className="fa-solid fa-phone"/>+91 11111-22222 */}
              {!token?<button onClick={()=>setShowLogin(true)} className='signin'>Sign in</button>
              :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt=""/>
                <ul className='nav-profile-dropdown'>
                  {/* <li><img src={assets.bagicon} alt=""/><p>Orders</p></li>
                  <hr/> */}
                  <li><img src={assets.logout_icon} alt=""/><p onClick={handleLogout}>Logout</p></li>
                </ul>
              </div>}
               {/* <button onClick={()=>setShowLogin(true)} className='sign'>Sign in</button> */}
            </div>
        {/* <img className='profile' src={assets.profile} /> */}

      
    </div>
  )
}

export default Navbar
