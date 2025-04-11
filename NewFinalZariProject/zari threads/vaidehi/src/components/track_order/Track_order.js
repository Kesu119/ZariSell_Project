import React, { useEffect, useState } from 'react'
import './track_order.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Track_order = () => {
    const url="http://localhost:5000";
    const [data,setData]=useState([]);

    const token = localStorage.getItem('token');
    
        const fetchOrders = async () => {
            if (!token) {
                toast.error("You must be logged in to view your orders.");
                return;
              }
          try {
            const response = await axios.get(url + "/api/order/getorder", {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            });
            setData(response.data.data); 
            console.log(response.data.data);
          } catch (error) {
            console.error("Error fetching orders:", error);
            toast.error("Failed to fetch orders.");
          }
        };
    
        useEffect(() => {
            fetchOrders();
          }, [token]);

  return (
    <div className='my-orders'>
        <h2 className='order'>My Order</h2>
        <div className='box'>
            {data.map((order)=>{
                return(
                    <div key={order._id} className='my-order'>
                        <img src={assets.order_icon} alt=''></img>
                        <p>Product Name: {order.productname}</p>
                     <p>Quantity: {order.qty}</p>
                    <p>Net price (with GST): {order.amount} ₹</p>
                    <p><span>&#x25cf;</span><b>{order.status}</b></p>
                    <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Track_order

