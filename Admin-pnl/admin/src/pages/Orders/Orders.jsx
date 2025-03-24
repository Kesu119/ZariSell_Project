import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {
  const [order, setOrder] = useState([]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token'); // Get the token from localStorage
      
      if (!token) {
        toast.error('You need to be logged in to view orders');
        return;
      }
      
      try {
        const response = await axios.get('http://localhost:5000/api/order/getorder', {
          headers: {
            'Authorization': `Bearer ${token}`,  // Include the token in the header
          },
        });

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

    fetchOrders();
  }, []);

  return (
    <div className="list add flex-col">
      <p className="pname">All User Orders List</p>
      <div className="list-table">
        <div className="list-tbl-formt title">
          <b>Product Name</b>
          <b>Quantity</b>
          <b>Amount</b>
          <b>Address</b>
          <b>Status</b>
          <b>Date</b>
          <b>Payment Mode</b>
        </div>

        {order.map((zariOrder) => (
          <div key={zariOrder._id} className="list-tbl-formt">
            <p>{zariOrder.productname}</p>
            <p>{zariOrder.qty}</p>
            <p>{zariOrder.amount}</p>
            <p>{zariOrder.address}</p>
            <p>{zariOrder.status}</p>
            <p>{zariOrder.date}</p>
            <p>{zariOrder.paymode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;












// import React, { useState, useEffect } from 'react';
// import './Orders.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Orders = () => {
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/order/getorder');
//         console.log(response.data);
//         if (response.data.success) {
//           setOrder(response.data.data);
//         } else {
//           toast.error('Error');
//         }
//       } catch (error) {
//         toast.error('An error occurred while fetching orders.');
//         console.log(error);
//       }
//     };

//     fetchOrders(); 
//   }, []);

//   // const statusHandler=async(event,orderId)=>{
//   //       const response=await axios.post(url+"/api/order/status",{
//   //         orderId,
//   //         status:event.target.value
//   //       })
//   //       if(response.data.success){
//   //         await fetchAllOrders();
//   //       }
//   //     }

//   return (
//     <div className='list add flex-col'>
//       <p className='pname'>All User Orders List</p>
//       <div className='list-table'>
//         <div className='list-tbl-formt title'>
//           <b>Product Name</b>
//           <b>Quantity</b>
//           <b>Amount</b>
//           <b>Address</b>
//           <b>Status</b>
//           <b>Date</b>
//           <b>Payment Mode</b>
//         </div>

//         {order.map((zariOrder) => {
//           return (
//             <div key={zariOrder._id} className='list-tbl-formt'>
//               <p>{zariOrder.productname}</p>
//               <p>{zariOrder.qty}</p>
//               <p>{zariOrder.amount}</p>
//               <p>{zariOrder.address}</p>
//               <p>{zariOrder.status}</p>
//               <p>{zariOrder.date}</p>
//               <p>{zariOrder.paymode}</p>

//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Orders;



{/* <p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="product processing">Product Processing</option>
                <option value="out for delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                </select></p> */}























// //first code

// // const Orders = () => {

// //   const [orders,setOrders]=useState([]);

// //   const fetchAllOrders=async()=>{
// //      const response=await axios.get(url+"/api/order/list");
// //     if(response.data.success){
// //       setOrders(response.data.data);
// //       console.log(response.data.data);
// //     }else{
// //       toast.error("Error")
// //     }
// //   }

// //   const statusHandler=async(event,orderId)=>{
// //     const response=await axios.post(url+"/api/order/status",{
// //       orderId,
// //       status:evnet.target.value
// //     })
// //     if(response.data.success){
// //       await fetchAllOrders();
// //     }

// //   }
// //   useEffect(()=>{
// //     fetchAllOrders();
// //   },[])

// //   return (
// //     <div className='order add'>
// //       <h3>Order Page</h3>
// //       <div className='order-list'>
// //         {orders.map((order,index)=>(
// //           <div key={index} className='order-item'>
// //             <img src={assets.parcel} alt=""/>
// //             <div>
// //               <p className='order-item-product'>
// //                 {order.items.map((item,index)=>{
// //                   if(index===order.items.length-1){
// //                     return item.name+"x"+item.quantity
// //                   }else{
// //                     return item.name+"x"+item.quantity+","
// //                   }
// //                 })}
// //               </p>
// //               <p className='order-item-name'>{order.address.firstName+""+order.address.lastName}</p>
// //               <div className='order-item-address'>
// //                 <p>{order.address.streetr + ","}</p>
// //                 <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
// //               </div>
// //               <p className='order-item-phone'>{order.address.phone}</p>
// //             </div>
// //             <p>Items :{order.items.length}</p>
// //             <p>${order.amount}</p>
// //             <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
// //               <option value="product making">product Processing</option>
// //               <option value="out for delivery">Out For Delivery</option>
// //               <option value="Delivered">Delivered</option>
// //             </select>
// //           </div>
// //         ))}
// //       </div>
      
// //     </div>
// //   )
// // }

// // export default Orders
