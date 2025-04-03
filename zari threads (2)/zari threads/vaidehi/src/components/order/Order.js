import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './order.css';
import axios from "axios";
import { toast } from "react-toastify"; // Assuming you use toast for success/error messages

function Order() {
  const { productName } = useParams();
  const [qty, setQty] = useState(250);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  // const [status, setStatus] = useState("Pending");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [payment, setPayment] = useState("");
  const navigate=useNavigate();
  const [error, setError] = useState("");

  const url = "http://localhost:5000";

  const [data, setData] = useState({
    productname: productName || "",
    qty: qty,
    amount: amount,
    address: address,
    // status: status,
    date: date,
    paymode: payment,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleQtyChange = (e) => {
    const value = Math.max(250, Math.min(500, Number(e.target.value)));
    setQty(value);
    setAmount(value * 300);
    setData((prevData) => ({ ...prevData, qty: value, amount: value * 300 }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Get JWT token from localStorage

    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    try {
      const response = await axios.post(
        `${url}/api/order/addorder`,
        data, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data.success) {
        setData({
          productname: "",
          qty: "",
          amount: "",
          address: "",
          // status: "",
          date: "",
          paymode: "",
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      if (err.response) {
        setError(`Server responded with error: ${err.response.status} - ${err.response.data}`);
      } else if (err.request) {
        setError("No response received from the server. Please check your network connection.");
      } else {
        setError(`Error: ${err.message}`);
      }
      toast.error("An error occurred while submitting your form.");
    }
  };

  return (
    <div className="container mt-5" style={{ padding: "0px 300px" }}>
      <h1 className="mb-4 text-center">Order Form</h1>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="mb-3">
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            name="productname"
            onChange={onChangeHandler}
            value={data.productname}
            className="form-control"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Qty (250-500):</label>
          <input
            type="number"
            name="qty"
            onChange={handleQtyChange}
            value={data.qty}
            className="form-control"
            min="250"
            max="500"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount:</label>
          <input
            type="text"
            name="amount"
            onChange={onChangeHandler}
            value={data.amount}
            className="form-control"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input
            type="text"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
              onChangeHandler(e);
            }}
            value={data.address}
            className="form-control"
            required
          />
        </div>

        {/* <div className="mb-3">
          <label className="form-label">Status:</label>
          <input
            type="text"
            name="status"
            onChange={onChangeHandler}
            value={data.status}
            className="form-control"
            readOnly
          />
        </div> */}

        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            name="date"
            onChange={onChangeHandler}
            value={data.date}
            className="form-control"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Payment:</label>
          <select
            className="form-control"
            name="paymode"
            onChange={(e) => {
              setPayment(e.target.value);
              onChangeHandler(e);
            }}
            value={data.paymode}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="NEFT">NEFT</option>
            <option value="G-Pay">G-Pay</option>
            <option value="PayPal">PayPal</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Order;














//first code

// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import './order.css';
// import axios from "axios";


// function Order() {
//   const { productName,price } = useParams();
//   const [qty, setQty] = useState(250);
//   const [amount, setAmount] = useState(0);
//   const [address, setAddress] = useState("");
//   const [status, setStatus] = useState("Pending");
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
//   const [payment, setPayment] = useState("");
//   const [error, setError] = useState("");

//   const url = "http://localhost:5000";

//   const [data, setData] = useState({
//       productname: "",
//       qty:"" ,
//       amount: "",
//       address: "",  
//       status: "",  
//       date: "", 
//       paymode: ""
//     });
  
//     const onChangeHandler = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setData((prevData) => ({ ...prevData, [name]: value }));
//     };

//   const handleQtyChange = (e) => {
//     const value = Math.max(250, Math.min(500, Number(e.target.value)));
//     setQty(value);
//     setAmount(value * 300); 
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     alert("Order placed successfully!");
//     try {
//       const response = await axios.post(
//         `${url}/api/order/addorder`,
//         data, 
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       if (response.data.success) {
//         setData({
//           productname: "",
//           qty:"" ,
//       amount: "",
//       address: "",  
//       status: "",  
//       date: "", 
//       paymode: ""
//         });
//         toast.success(response.data.message);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (err) {
//       if (err.response) {
//         setError(`Server responded with error: ${err.response.status} - ${err.response.data}`);
//       } else if (err.request) {
//         setError("No response received from the server. Please check your network connection.");
//       } else {
//         setError(`Error: ${err.message}`);
//       }
//       toast.error("An error occurred while submitting your form.");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{padding:"0px 300px 0px 300px"}}>
//     <h1 className="mb-4 text-center">Order form</h1>

//     <form onSubmit={handleSubmit} className="order-form">

//     <div className="mb-3">
//       <label className="form-label">Product Name:</label> 
//       <input type="text" 
//       name="productname" 
//       onChange={onChangeHandler}
//        value={data.productname} 
//        className="form-control"
//         value={decodeURIComponent(productName)}
//          readOnly /><br/>
//       </div>

//     <div className="mb-3">
//       <label className="form-label">Qty (250-500):</label>
//       <input type="number" name="qty" onChange={onChangeHandler} value={data.qty} className="form-control" value={qty} onChange={handleQtyChange} min="250" max="500" /><br/>
//     </div>

//     {/* <div className="mb-3">
//       <label className="form-label">Price:</label>
//       <input type="text" className="form-control"  readOnly/><br/>
//     </div> */}

//     <div className="mb-3">
//       <label className="form-label">Amount:</label>
//       <input type="text" name="amount" onChange={onChangeHandler} value={data.amount} className="form-control" value={amount} readOnly /><br/>
//     </div>

//     <div className="mb-3">
//       <label className="form-label">Address: </label>
//       <input type="text" name="address" onChange={onChangeHandler} value={data.address} className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required /><br/>
//     </div>

//     <div className="mb-3">
//       <label className="form-label">Status: </label>
//       <input type="text"  name="status" onChange={onChangeHandler} value={data.status} className="form-control"  value={status} readOnly /><br/>
//     </div>

//     <div div className="mb-3">
//       <label className="form-label">Date:</label>
//        <input type="date" name="date" onChange={onChangeHandler} value={data.date} className="form-control" value={date} readOnly /><br/>
//     </div>

//     <div className="mb-3">
//       <label className="form-label">Payment: 
//       <select className="form-control" name="paymode" onChange={onChangeHandler} value={data.paymode} value={payment} onChange={(e) => setPayment(e.target.value)} required>
//        <option value="">Select Payment Method</option>
//        <option value="NEFT">NEFT</option>
//        <option value="G-Pay">G-Pay</option>
//        <option value="PayPal">PayPal</option>
//        <option value="UPI">UPI</option>
// </select>
//       </label><br/>
//     </div>

//   <div className="mb-3"> 
//       <button type="submit" className="btn btn-primary w-100">Place Order</button>
//     </div>
//     </form>
//     </div>
//   )
// }

// export default Order;


