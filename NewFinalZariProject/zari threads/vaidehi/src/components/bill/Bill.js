import { useLocation, useNavigate } from "react-router-dom";
import "./bill.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RAQXeRlbS3t3FXUMcv9anQuLEJ4ATmlNKjFYEeEWxhfkc3yhwmcuED7pnmIk0lozGuxrstktew11PCIP5PzSfLe00nfTFUcKq"); // Replace with your Stripe public key

function Bill() {
  const location = useLocation();
  const navigate = useNavigate();
  const { productName, userName, email, qty, amount, phone, date, address } =
    location.state || {};

  const GST_RATE = 18 / 100; // 18% GST
  const gstAmount = amount * GST_RATE;
  const netTotal = amount + gstAmount;


  const handlePrint = () => {
    window.print();
  };

  const handlePayment = async () => {
  
    try {
      const stripe = await stripePromise;
  
      const token = localStorage.getItem("token");
  
      const orderResponse = await axios.post(
        "http://localhost:5000/api/order/addorder", 
        {
          username: userName,
          email,
          phone,
          productname: productName,
          qty,
          amount: netTotal,
          address,
          status: "processing",
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
  
      if (!orderResponse.data.success) {
        console.error("Order placement failed:", orderResponse.data.message);
        return;
      }
  
      const orderId = orderResponse.data.orderId;
  
      const paymentResponse = await axios.post("http://localhost:5000/api/order/payment", {
        productname: [
          {
            name: productName,
            price: netTotal * 100,
            quantity: 1,
          },
        ],
        orderId,
      });
  
      const sessionUrl = paymentResponse.data.session_url;
  
      window.location.href = sessionUrl;
  
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="container10 invoice-container">
      <h1 className="mb-4 text-center"> INVOICE</h1>

      <div className="invoice-box">
        <div className="header-section">
          <h2>Company Name</h2>
          <p>
            Manufacturers & Dealers in: Real & Imitation Jari Gold & Silver
            Thread
          </p>
        </div>

        <div className="details-section">
          <div className="details-left">
            <p>
              <strong>Party Name:</strong> {userName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
          </div>
          <div className="details-right">
            <p>
              <strong>GSTIN:</strong> 1239638547
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
            <p style={{ color: "black" }}>
              <strong>Invoice Date:</strong> {date}
            </p>
          </div>
        </div>

        <table className="table invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>GST (18%)</th>
              <th>Net Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{productName}</td>
              <td>₹300 per/reel</td>
              <td>{qty}</td>
              <td>₹{amount}</td>
              <td>₹{gstAmount}</td>
              <td>₹{netTotal}</td>
            </tr>
          </tbody>
        </table>

        <div className="amount-summary">
          <p>
            <strong>Bank Details:</strong> _____________
          </p>
          <p>
            <strong>IGST (18%):</strong> ₹{gstAmount.toFixed(2)}
          </p>
          <p>
            <strong>CGST:</strong> 0%
          </p>
          <p>
            <strong>SGST:</strong> 0%
          </p>
          <p>
            <strong>Net Total:</strong> ₹{netTotal.toFixed(2)}
          </p>
        </div>

        <div className="terms-section">
          <h3 style={{ color: "goldenrod" }}>Terms & Conditions:</h3>
          <ol>
            <li>We are not responsible for shortage & damage during transit.</li>
            <li>Amount of this bill is net & no deduction will be allowed afterwards.</li>
            <li>Goods once sold cannot be returned under any circumstances.</li>
            <li>Goods are dispatched at customer's risk.</li>
            <li>Check parcel condition before accepting; we are not responsible for complaints.</li>
            <li>Interest @ 24% p.a. will be charged on unpaid bills.</li>
          </ol>
        </div>

        <div className="signature-section">Prepared By: E. & O.E</div>

        

        <button onClick={handlePrint} className="btn btn-secondary w-100 mt-3">
          Print Bill
        </button>

        <button onClick={handlePayment} className="btn btn-success w-100 mt-3">
          Pay Now
        </button>

      </div>
    </div>
  );
}

export default Bill;
