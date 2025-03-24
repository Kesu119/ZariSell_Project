import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
            <NavLink to='/add' className='option'>
                    <img src={assets.add}/>
                    <p>Add Products</p>
            </NavLink>

            <NavLink  to='/list' className='option'>
                    <img src={assets.list3}/>
                    <p>List Products</p>
            </NavLink>

            <NavLink to='/orders' className='option'>
                    <img src={assets.order}/>
                    <p>Orders</p>
            </NavLink>

            <NavLink to='/requirements' className='option'>
                    <img src={assets.requirement2}/>
                    <p>User Requirement</p>
            </NavLink>

            

        </div>
    </div>
  )
}

export default Sidebar
