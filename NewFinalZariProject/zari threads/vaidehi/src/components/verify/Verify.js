import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Verify.css'
import axios from 'axios';

function Verify() {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    const verify = async () => {
      try {
        await axios.post("http://localhost:5000/api/order/verify", {
          success,
          orderId,
        });
      } catch (err) {
        console.error("Error verifying payment:", err);
      }
    };
    if (orderId) 
        verify();
  }, [success, orderId]);

return (
    <div className="verify-page">
      {success === "true" ? (
        <>
          <div className="verify-icon verify-success">✅</div>
          <div className="verify-heading">Payment Successful!</div>
          <div className="verify-description">
            Thank you! Your order has been confirmed and is being processed.
          </div>
        </>
      ) : (
        <>
          <div className="verify-icon verify-failure">❌</div>
          <div className="verify-heading">Payment Cancelled</div>
          <div className="verify-description">
            Something went wrong or you cancelled the payment. Please try again.
          </div>
        </>
      )}
    </div>
  );


}

export default Verify;
