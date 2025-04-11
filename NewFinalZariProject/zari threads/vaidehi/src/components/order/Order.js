import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './order.css';
import axios from "axios";
import { toast } from "react-toastify";

function Order() {

  const { productName } = useParams();
  const navigate = useNavigate();

  // const [formdata,setFormData]=useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState('');
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");
  const [date] = useState(new Date().toISOString().split("T")[0]);
  const [error, setError] = useState("");

  const GST_RATE = 18 / 100; // 18% GST
  const gstAmount = amount * GST_RATE; // Calculate GST amount
  const netTotal = amount + gstAmount; // Calculate net total 

  const url = "http://localhost:5000";

  const handleQtyChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 250 && value <= 500) {
      setQty(value);
      setAmount(value * 300); // Assuming price per item is 300
    } else {
      setError("Quantity must be between 250 and 500.");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);

    if (!/^[0-9]{10}$/.test(value)) {
      setError("Phone number must be exactly 10 digits.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!userName.trim()) return setError("User Name is required.");
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return setError("Valid Email is required.");
    if (!qty || qty < 250 || qty > 500) return setError("Quantity must be between 250 and 500.");
    if (!phone || phone.length !== 10) return setError("Phone number must be exactly 10 digits.");
    if (!address.trim()) return setError("Address is required.");

    setError(""); 

    
    const data = {
      productname: productName || "",
      qty: qty,
      amount: netTotal,
      address: address,
      username: userName,
      email: email,
      phone: phone,
      date: date,
      paymode: payment,
    };

    
    const token = localStorage.getItem('token');
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
        toast.success(response.data.message);
        setUserName('');
        setEmail('');
        setPhone('');
        setQty('');
        setAmount(0);
        setAddress('');
        setPayment('');
        navigate("/bill", {
          state: {
            productName: decodeURIComponent(productName),
            userName,
            email,
            qty,
            amount,
            phone,
            date,
            address,
            payment,
          },
        });
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
    <>
      <div className="container1">
        <h1 className="text-center mb-4" style={{ color: "black", textDecoration: "none" }}>
          Order Form
        </h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit} className="order-form">

          {/* User Name */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-user"></i>
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="User Name" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              required 
            />
          </div>

          {/* Email */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input type="email" className="form-control" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          {/* Quantity */}
          <div className="mb-3">
            <input type="number" className="form-control" placeholder="Qty (250-500)" value={qty} onChange={handleQtyChange} min="250" max="500" required />
          </div>

          {/* Amount */}
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Amount" value={amount} readOnly />
          </div>

          {/* Address */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <textarea className="form-control" rows="4" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
          </div>

          {/* Phone Number */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-phone"></i>
            </span>
            <input type="tel" className="form-control" value={phone} onChange={handlePhoneChange} placeholder="Enter 10-digit phone number" maxLength="10" inputMode="numeric" required />
          </div>

          {/* Date */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fa-regular fa-calendar-days"></i>
            </span>
            <input type="date" className="form-control" placeholder="Date" value={date} readOnly />
          </div>

          {/* Order Table */}
          <h3 className="table_title">Order Items</h3>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Net Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" className="form-control" placeholder="Product Name" value={decodeURIComponent(productName)} readOnly />
                </td>
                <td>
                  <input type="text" name="quantity1" value={qty} readOnly />
                </td>
                <td>
                  <input type="text" step="0.01" name="price1" value={amount} readOnly />
                </td>

                <td>
                  <input type="text" step="0.01" name="price1" value={netTotal} readOnly />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Submit Button */}
          <button type="submit" className="button1">Generate Bill</button>
        </form>
      </div>
    </>
  );
}

export default Order;

































