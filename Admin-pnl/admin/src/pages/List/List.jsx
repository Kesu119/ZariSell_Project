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
    description: '',
    image:null
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
      description:product.description,
      // category:product.category,
      image:null
       });
    };

    // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData({ ...data, image: file });
    }
  };
    
    //product update code
    const handleUpdate=async()=>{

      const formData = new FormData();
    formData.append('id', edit);
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description',data.description);
    // formData.append('category', data.category);

    // If an image is selected, append it to the FormData
    if (data.image) {
      formData.append('image', data.image);
    }
      const response=await axios.post(`${url}/api/product/update`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
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
        <b>Description</b>
        <b>price</b>
        <b>Delete</b>
        <b>Edit</b>
        
      </div>

      {list.map((product,index)=>{
          return (
            <div key={index} className='list-tbl-formt'>
              <img src={`${url}/images/`+product.image}/>
              <p>{product.name}</p>
              <p>{product.description}</p>
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
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Product description"
          />
          <br/>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <br />
          <button onClick={handleUpdate}>Update Product</button>
        </div>
      )}
    </div>
  );
};
     
 

export default List

