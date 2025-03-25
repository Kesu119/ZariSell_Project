import React, { useState } from 'react';
import './requirement.css';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

function RequirementForm() {
  const [meetingType, setMeetingType] = useState("");
  const [fullname,setFullname]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [meeting,setMeeting]=useState("");
  const[packing,setPacking]=useState("");
  const[packing2,setPacking2]=useState("");
  const [additional,setAdditional]=useState("");
  const url = "http://localhost:5000";
  const [error, setError] = useState("");

  const [data, setData] = useState({
    fullname: fullname,
    email: email,
    phone: phone,
    meeting: meeting,  
    packing: packing,  
    packing2: packing2, 
    additional:additional,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token'); // Get JWT token from localStorage
    
        if (!token) {
          toast.error("You must be logged in to place an order.");
          return;
        }
    try {
      const response = await axios.post(
        `${url}/api/requirement/addrequirement`,
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
          fullname: "",
          email: "",
          phone: "",
          meeting: "",
          packing: "",
          packing2: "",
          additional: "",
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

  const handleMeetingChange = (event) => {
    setMeetingType(event.target.value);
    setData((prevData) => ({
      ...prevData,
      meeting: event.target.value, // Update the meeting type in the data state
    }));
  };

  return (
    <div className="container mt-5" style={{ padding: "0px 300px 0px 300px" }}>
      <h5 className="mb-4 text-center">User Requirement Form</h5>
      <form onSubmit={onSubmitHandler}>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" name="fullname" onChange={onChangeHandler} value={data.fullname} className="form-control" id="name" placeholder="Enter your full name" required />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" name="email" onChange={onChangeHandler} value={data.email} className="form-control" id="email" placeholder="Enter your email" required />
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label" id="pno">Phone Number</label>
          <input type="tel" name="phone" onChange={onChangeHandler} value={data.phone} className="form-control" id="phone" placeholder="Enter your phone number" required />
        </div>

        {/* Meeting Type */}
        <div className="mb-3">
          <label htmlFor="meeting" className="form-label" id="meeting">Meeting Type</label>
          <select name="meeting" value={data.meeting} onChange={handleMeetingChange} className="form-control">
            <option value="">Select</option>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
          {meetingType === "Offline" && (
            <div className="info-box">
              <p style={{ color: "black" }}>
                <strong>Admin Address:</strong> 9/746 amliran wadifaliya, Surat, India<br />
                <strong>Contact Number:</strong>+91 11111-00000
              </p>
            </div>
          )}
          {meetingType === "Online" && (
            <div className="info-box">
              <p style={{ color: "black" }}>
                <strong>Admin Whatsapp Number:</strong> +91 9876543210<br />
                <strong>Admin Email:</strong>Admin123@gmail.com
              </p>
            </div>
          )}
        </div>

        {/* Packing */}
        <div className="mb-3">
          <label htmlFor="packing" className="form-label" id="pack">Packing</label>
          <select name="packing" onChange={onChangeHandler} value={data.packing} className="form-control">
            <option value="">Select</option>
            <option value="2reel">Reel of 2</option>
            <option value="4reel">Reel of 4</option>
            <option value="conning">Conning</option>
          </select>
        </div>

        {/* Packing/gm */}
        <div className="mb-3">
          <label htmlFor="packing2" className="form-label" id="pack">Packing gm/reel</label>
          <select className="form-control" name="packing2" onChange={onChangeHandler} value={data.packing2}>
            <option value="">Select</option>
            {/* Other options */}
            <option value="200">200</option>
            <option value="210">210</option>
            <option value="220">220</option>
            <option value="230">230</option>
            <option value="240">240</option>
            <option value="250">250</option>
            <option value="260">260</option>
            <option value="270">270</option>
            <option value="280">280</option>
            <option value="290">290</option>
            <option value="300">300</option>
            <option value="310">310</option>
            <option value="320">320</option>
            <option value="330">330</option>
            <option value="340">340</option>
            <option value="350">350</option>
            <option value="360">360</option>
            <option value="370">370</option>
            <option value="380">380</option>
            <option value="390">390</option>
            <option value="400">400</option>
          </select>
        </div>

        {/* Additional Details */}
        <div className="mb-3">
          <label htmlFor="details" className="form-label">Additional Details</label>
          <textarea className="form-control" name="additional" onChange={onChangeHandler} value={data.additional} id="details" rows="4" placeholder="Describe your requirements"></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Requirement</button>
      </form>
    </div>
  );
}

export default RequirementForm;


















// import React, { useState } from 'react'
// import './requirement.css'
// import { assets } from '../../assets/assets';
// function RequirementForm() {
//     const [meetingType, setMeetingType] = useState("");

//   const handleMeetingChange = (event) => {
//     setMeetingType(event.target.value);
//   };

//   return (
//     <>
// <div className="container mt-5" style={{padding:"0px 300px 0px 300px"}}>
//     <h5 className="mb-4 text-center">User Requirement Form</h5>
//     <form>
//         {/* <!-- User Name --> */}
//         <div className="mb-3">
//             <label for="name" className="form-label">Full Name</label>
//             <input type="text" className="form-control" id="name" placeholder="Enter your full name" required/>
//         </div>

//         {/* <!-- Email --> */}
//         <div className="mb-3">
//             <label for="email" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
//         </div>

//         {/* <!-- Phone Number --> */}
//         <div className="mb-3">
//             <label for="phone" className="form-label" id='pno'>Phone Number</label>
//             <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required/>
//         </div>

//         {/* <!-- Requirement Type --> */}
//         <div className="mb-3">
//             <label for="requirement" className="form-label" id='meeting'>Meeting Type</label>
//             <select value={meetingType} onChange={handleMeetingChange} className="form-control">
//         <option value="" >Select</option>
//         <option value="Offline">Offline</option>
//         <option value="Online">Online</option>
//       </select>

//       {/* Show Admin Address for Offline */}
//       {meetingType === "Offline" && (
//         <div className="info-box">
//           <p style={{color:"black"}}><strong>Admin Address:</strong> 9/746 amliran wadifaliya, Surat, India<br/>
//                                       <strong>Contact Number:</strong>+91 11111-00000</p>
//         </div>
//       )}

//       {/* Show Admin Phone Number for Online */}
//       {meetingType === "Online" && (
//         <div className="info-box">
//           <p style={{color:"black"}}><strong>Admin Whatsapp Number:</strong> +91 9876543210<br/>
//                                       <strong>Admin Email:</strong>Admin123@gmail.com</p>
//         </div>
//       )}
//         </div>

//         {/* packing */}
//         <div className="mb-3">
//             <label for="details" className="form-label" id="pack">Packing</label>
//             <select className="form-control">
//               <option value="" >Select</option>
//               <option value="2reel">Reel of 2</option>
//               <option value="4reel">Reel of 4</option>
//               <option value="conning">Conning</option>
//             </select>
//         </div>
//         {/* weight */}
    
//         <div className="mb-3">
//             <label for="details" className="form-label" id="pack">Packing</label>
//             <select className="form-control">
//                         <option value="" >Select</option>
//                         <option value="200">200</option>
//                         <option value="210">210</option>
//                         <option value="220">220</option>
//                         <option value="230">230</option>
//                         <option value="240">240</option>
//                         <option value="250">250</option>
//                         <option value="260">260</option>
//                         <option value="270">270</option>
//                         <option value="280">280</option>
//                         <option value="290">290</option>
//                         <option value="300">300</option>
//                         <option value="310">310</option>
//                         <option value="320">320</option>
//                         <option value="330">330</option>
//                         <option value="340">340</option>
//                         <option value="350">350</option>
//                         <option value="360">360</option>
//                         <option value="370">370</option>
//                         <option value="380">380</option>
//                         <option value="390">390</option>
//                         <option value="400">400</option>
//             </select>
//         </div>
//         {/* <!-- Additional Details --> */}
//         <div className="mb-3">
//             <label for="details" className="form-label">Additional Details</label>
//             <textarea className="form-control" id="details" rows="4" placeholder="Describe your requirements"></textarea>
//         </div>

//         {/* <!-- Submit Button --> */}
//         <button type="submit" className="btn btn-primary w-100" onClick={onclick}>Submit Requirement</button>
//     </form>
// </div>



//     </>
//   )
// }

// export default RequirementForm