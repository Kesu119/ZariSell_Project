import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'


const List = ({url}) => {
  
  const[list,setList]=useState([]);
  const [edit,setEdit]=useState('');
  const [data,setData]=useState({
    name: '',
    price: '',
    category: ''
  });

  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/product/list`)
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
    }else{
          toast.error("Error")
    }
  }

  //remove product code
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


   //product Edit code
   const handleEdit=(product)=>{
    setEdit(product._id);
    setData({name:product.name,
      price:product.price,
      category:product.category,
       });
    };
    
    //product update code
    const handleUpdate=async()=>{
      const response=await axios.post(`${url}/api/product/update`,{id:edit,...data});
      if(response.data.success){
        toast.success("product updated");
        setEdit(null);
        fetchList();
      }else{
        toast.error("Error updating in product");
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
              <p onClick={()=>handleEdit(product)} className='cursor'><img src={assets.update}></img></p>
            </div>
          )
        })}
      </div>

      {edit && (
        <div className='edit-form'>
          <h3>Edit Product</h3>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Product Name"
          />
          <br/>
          <input
            type="number"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            placeholder="Product Price"
          />
          <br/>
          <input
            type="text"
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
            placeholder="Product Category"
          />
          <br/>
          <button onClick={handleUpdate}>Update Product</button>
        </div>
      )}
    </div>
  );
};
     
 

export default List

{/* <input
  type="text"
  value={data.name}
  onChange={(e) => setData({ ...data, name: e.target.value })}
/>
<input
  type="number"
  value={data.price}
  onChange={(e) => setData({ ...data, price: e.target.value })}
/>
<input
  type="text"
  value={data.category}
  onChange={(e) => setData({ ...data, category: e.target.value })}
/> */}
