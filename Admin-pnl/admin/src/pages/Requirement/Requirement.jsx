import React, { useEffect, useState } from 'react'
import './Requirement.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'
const Requirement = () => {

    const [requirements, setRequirements] = useState([]);
    

      useEffect(() => {
        const fetchRequirements = async () => {

          const token = localStorage.getItem('token');

          if (!token) {
                  toast.error('You need to be log in to view Requirement');
                  return;
                }
      try{
        const response=await axios.get('http://localhost:5000/api/requirement/getrequirement',{
          headers: {
            'Authorization': `Bearer ${token}`,  
          },
        });
              console.log(response.data);
                if(response.data.success){
                setRequirements(response.data.data)
                }else{
                    toast.error("Error")
                }
        } catch (error) {
               console.error('Error fetching Requirement:', error);
               toast.error('An error occurred while fetching Requirement');
              }
        };
    
        fetchRequirements();
      }, []);
    
    
  return (
    
<div className="requirement-add">
  <h1 className='head-name'>Requirement Page List</h1>
    <div className="requiremnt-list">
      
      {requirements.map((product)=>{
          return (
            <div key={product._id} className="requirement-item">
              <img src={assets.parcel}></img>
              <div className='requirement-info'>
                <b>Customer Information :----</b>
              <p>Customer Name : {product.fullname}</p>
              <p>Email : {product.email}</p>
              <p>Phone No. : {product.phone}</p>
              </div>
              <div className='meeing-info'>
                <b>Meeting Information :----</b>
              <p>Meeting Type : {product.meeting}</p>
              <p> Date : {product.meetingDate}</p>
              <p> Time: {product.meetingTime}</p>
              <p> Platform : {product.onlinePlatform}</p>
              <p> Link : {product.meetingLink}</p>
              </div>
              <div className='product-info'>
                <b>Product Information :----</b>
              <p>Product Packing : {product.packing}</p>
              <p>product per/cone : {product.packing2}</p>
              <p>Other Info : {product.additional}</p>
              </div>
              
            </div>
          )
        })}

      </div>
      </div>    
   
  )
}

export default Requirement












{/* <div className='list-tbl-formt title'>
        <b>Full Name</b>
        <b>Email</b>
        <b>Phone No.</b>
        <b>Meeting Type</b>
        <b>Meeting Date</b>
        <b>Meeting Time</b>
        <b>Online platform</b>
        <b>Meeting Link</b>
        <b>Packing</b>
        <b>Packing(gm)</b>
        <b>Additionl</b>
      </div> */}
