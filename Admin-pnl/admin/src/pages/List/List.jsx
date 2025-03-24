import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const List = ({url}) => {
  
  const[list,setList]=useState([])

  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/product/list`)
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
    }else{
          toast.error("Error")
    }
  }

  const removeProduct=async(productId)=>{
    const response=await axios.post(`${url}/api/product/remove`,{id:productId});
    await fetchList();
    if(response.data.success){
     toast.success(response.data.message)
    }
    else{
     toast.error("error");
    }
     
   }

  useEffect(()=>{
    fetchList()
  },[])
  
  return (
    <div className='list add flex-col'>
      <p className='pname'>All Product List</p>
    <div className='list-table'>
      <div className='list-tbl-formt title'>
        <b>Image</b>
        <b>Name</b>
        {/* <b>Description</b> */}
        <b>Category</b>
        {/* <b>Qty</b> */}
        <b>price</b>
        <b>Action</b>
      </div>

      {list.map((product,index)=>{
          return (
            <div key={index} className='list-tbl-formt'>
              <img src={`${url}/images/`+product.image}/>
              <p>{product.name}</p>
              {/* <p>{product.description}</p> */}
              <p>{product.category}</p>
              {/* <p>{product.qty}</p> */}
              <p>₹{product.price}</p>
              <p onClick={()=>removeProduct(product._id)} className='cursor'><img src={assets.remove2}></img></p>
              <p className='cursor'><img src={assets.update}></img></p>
              {/* <p><button onClick={()=>removeProduct(product._id)} className='cursor'>Delete</button></p>
              <p><button>Update</button></p> */}
            </div>
          )
        })}

      </div>
      </div>
  )
}

export default List
