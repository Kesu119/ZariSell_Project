import React, { useEffect, useState } from 'react'
import './Requirement.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const Requirement = () => {

    const [requirements, setRequirements] = useState([]);
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState('');

      useEffect(() => {
        const fetchRequirements = async () => {
      
        const response=await axios.get('http://localhost:5000/api/requirement/getrequirement')
                console.log(response.data)
                if(response.data.success){
                setRequirements(response.data.data)
                }else{
                    toast.error("Error")
                }
        };
    
        fetchRequirements();
      }, []);
    
    
  return (
    
<div className='list add flex-col'>
  <p className='pname'>All User Requirement List</p>
    <div className='list-table'>
      <div className='list-tbl-formt title'>
        <b>Full Name</b>
        <b>Email</b>
        <b>Phone No.</b>
        <b>Meeting Type</b>
        <b>Packing</b>
        <b>Packing(gm)</b>
        <b>Additionl</b>
      </div>

      {requirements.map((product)=>{
          return (
            <div key={product._id} className='list-tbl-formt'>
              <p>{product.fullname}</p>
              <p>{product.email}</p>
              <p>{product.phone}</p>
              <p>{product.meeting}</p>
              <p>{product.packing}</p>
              <p>{product.packing2}</p>
              <p>{product.additional}</p>
              
            </div>
          )
        })}

      </div>
      </div>    
   
  )
}

export default Requirement
