import React, { useEffect, useState } from 'react'
import {assets} from '../../assets/assets'
import './Add.css'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
     description:"",
      price:"",
  
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
const formData=new FormData();
formData.append("name",data.name);
formData.append("description",data.description);
formData.append("price",Number(data.price));
formData.append("image",image);
  const response=await axios.post(`${url}/api/product/add`,formData);
  if(response.data.success){
  setData({
    name:"",
    description:"",
    // qty:"",
    price:"",
    // category:"Limitation _Jari"
  })
  setImage(false)
  toast.success(response.data.message)
}else{
  toast.error(response.data.message)
}
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        
        <div className='add-img-upload flex-col'>
          <p>upload Image</p> 
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.file}/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
        </div>

        <div className='add-product-name'>
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Enter name' required/>
        </div>

        <div className='add-product-desc'>
          <p>Product Description</p>
          <textarea  onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write Here' required></textarea>
        </div>

        {/* <div className="add-category">
            <p> Product Category</p>
            <select onChange={onChangeHandler} name='category'>
              <option>Select_Imitation_jari</option>
              <option value='Gold colour'>Imitation Jari Gold color</option>
              <option value='Light clour'>Imitation Jari Light color</option>
              <option value='Acid Bleach '>Imitation Jari Crape color</option>
              <option value='silver colour'>Imitation Jari Silver color</option>
              <option value='cone'>Imitation Jari Cone</option>
            </select>
          </div> */}

      <div className='add-both'>
        {/* <div className='add-product-qty'>
          <p>Product Qty</p>
          <input onChange={onChangeHandler} value={data.qty} type='Number' name='qty' required placeholder='enter qty'></input>
        </div> */}

        <div className='add-product-price'>
          <p>Product  Price/Cone</p>
          <input onChange={onChangeHandler} value={data.price} type='Number' name='price' required placeholder='₹'></input>
        </div>
        </div>

        <button type='submit' className='add-btn'>Add</button>
      </form>
      
    </div>
  )
}

export default Add


