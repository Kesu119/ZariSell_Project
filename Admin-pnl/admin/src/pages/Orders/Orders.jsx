import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets'

const Orders = () => {
  const [order, setOrder] = useState([]);
  
  
    const fetchOrders = async () => {
      const token = localStorage.getItem('token'); 
      
      if (!token) {
        toast.error('You need to be log in to view orders');
        return;
      }
      
      try {
        const response = await axios.get('http://localhost:5000/api/order/getorder'
        , {
          headers: {
            'Authorization': `Bearer ${token}`,  
          },
        });
        console.log(response.data);
        if (response.data.success) {
          setOrder(response.data.data);
        } else {
          toast.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('An error occurred while fetching orders');
      }
    };

          const statusHandler=async(event,orderId)=>{    
            const response=await axios.post("http://localhost:5000/api/order/status",{
              orderId,
              status:event.target.value
            })
            if(response.data.success){
              await fetchOrders();
            }
          }

          useEffect(() => {
            fetchOrders(); 
          }, []);

  return (
    <div className="order add">
     <h1 className='title-name'>All User Orders List</h1>
      <div className="order-list">
       
        {order.map((zariOrder) => (
          <div key={zariOrder._id} className="order-item">
            <img src={assets.parcel} alt=''></img>

            <div className='order-product'>
            <b>User Information :-----</b>
            <p>User Name : {zariOrder.username}</p>
            <p>Email : {zariOrder.email}</p>
            <p>Phone No. : {zariOrder.phone}</p>
            <p>User Address : {zariOrder.address}</p>
            </div>
            <div className='product-info'>
              <b>Product Information :------</b>
            <p>Product Name : {zariOrder.productname}</p>
            <p>Product Qty : {zariOrder.qty}</p>
            <p>Product Price : {zariOrder.amount}</p>
            <p>Order Date : {zariOrder.date}</p>
            </div>
            {/* <p>{zariOrder.paymode}</p> */}
            <p><select onChange={(event)=>statusHandler(event,zariOrder._id)} value={zariOrder.status}>
              <option value="product proccessing">processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Deliver">Deliver</option>
              </select>
            </p>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

