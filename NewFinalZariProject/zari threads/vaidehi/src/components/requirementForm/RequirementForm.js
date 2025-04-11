import React, { useState } from 'react';
import './requirement.css';
import { toast } from 'react-toastify';
import axios from 'axios';

function RequirementForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [meeting, setMeeting] = useState('');
  const [packing, setPacking] = useState('');
  const [packing2, setPacking2] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [onlinePlatform, setOnlinePlatform] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [additional, setAdditional] = useState('');
  const [error, setError] = useState('');

  const url = 'http://localhost:5000';

  // Handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fullname':
        setFullname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'meeting':
        setMeeting(value);
        break;
      case 'packing':
        setPacking(value);
        break;
      case 'packing2':
        setPacking2(value);
        break;
      case 'additional':
        setAdditional(value);
        break;
      case 'meetingDate':
        setMeetingDate(value);
        break;
      case 'meetingTime':
        setMeetingTime(value);
        break;
      case 'onlinePlatform':
        setOnlinePlatform(value);
        break;
      default:
        break;
    }
  };

  // Handle meeting type change
  const handleMeetingChange = (event) => {
    setMeeting(event.target.value);
    setMeetingLink('');
  };

  // Generate meeting link based on platform
  const generateMeetingLink = (platform) => {
    const links = {
      Zoom: 'https://zoom.us/j/your_meeting_id',
      'Google Meet': 'https://meet.google.com/your_meeting_id',
      'Microsoft Teams': 'https://teams.microsoft.com/l/your_meeting_id',
    };
    return links[platform] || '';
  };

  // Handle platform change and generate link
  const handlePlatformChange = (event) => {
    const platform = event.target.value;
    setOnlinePlatform(platform);
    setMeetingLink(generateMeetingLink(platform));
  };

  // Handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token'); 
    
    if (!token) {
      toast.error('You must be logged in to place an order.');
      return;
    }

    // Prepare data to send to backend
    const data = {
      fullname,
      email,
      phone,
      meeting,          
      packing,
      packing2,
      meetingDate,
      meetingTime,
      onlinePlatform,
      meetingLink,
      additional,
    };

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
        // Resetting form data on success
        setFullname('');
        setEmail('');
        setPhone('');
        setMeeting('');
        setPacking('');
        setPacking2('');
        setMeetingDate('');
        setMeetingTime('');
        setOnlinePlatform('');
        setMeetingLink('');
        setAdditional('');
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      if (err.response) {
        setError(`Server responded with error: ${err.response.status} - ${err.response.data}`);
      } else if (err.request) {
        setError('No response received from the server. Please check your network connection.');
      } else {
        setError(`Error: ${err.message}`);
      }
      toast.error('An error occurred while submitting your form.');
    }
  };

  return (
    <div className="container5 mt-5" style={{ padding: '0px 300px' }}>
      <h1 className="mb-4 text-center">User Requirement Form</h1>
      <form onSubmit={onSubmitHandler}>
        {/* Fullname input */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-user"></i>
          </span>
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email input */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone input */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-phone"></i>
          </span>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Meeting type selection */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-handshake"></i>
          </span>
          <select
            name="meeting"
            value={meeting}
            onChange={handleMeetingChange}
            className="form-control"
            required
          >
            <option value="">Select Meeting Type</option>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
        </div>

        {/* Offline meeting details */}
        {meeting === 'Offline' && (
          <>
            <div className="info-box">
              <p style={{ color: 'black' }}>
                <strong>Admin Address:</strong> 9/746 Amliran Wadifaliya, Surat, India
                <br />
                <strong>Contact Number:</strong> +91 11111-00000
              </p>
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <i className="fa-solid fa-calendar"></i>
              </span>
              <input
                type="date"
                className="form-control"
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                required
              />
              <input
                type="time"
                className="form-control"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                required
              />
            </div>
          </>
        )}

        {/* Online meeting details */}
        {meeting === 'Online' && (
          <>
            <div className="info-box">
              <p style={{ color: 'black' }}>
                <strong>Admin WhatsApp:</strong> +91 9876543210
                <br />
                <strong>Admin Email:</strong> Admin123@gmail.com
              </p>
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <i className="fa-solid fa-globe"></i>
              </span>
              <input
                type="date"
                className="form-control"
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                required
              />
              <input
                type="time"
                className="form-control"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                required
              />
              <select
                value={onlinePlatform}
                onChange={handlePlatformChange}
                className="form-control"
                required
              >
                <option value="">Select Platform</option>
                <option value="Zoom">Zoom</option>
                <option value="Google Meet">Google Meet</option>
                <option value="Microsoft Teams">Microsoft Teams</option>
              </select>
            </div>
            {meetingLink && (
              <div className="info-box">
                <p>
                  <strong>Meeting Link:</strong>{' '}
                  <a href={meetingLink} target="_blank" rel="noopener noreferrer">
                    {meetingLink}
                  </a>
                </p>
              </div>
            )}
          </>
        )}

        {/* Packing and weight details */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-boxes-packing"></i>
          </span>
          <select
            name="packing"
            value={packing}
            onChange={onChangeHandler}
            className="form-control"
            required
          >
            <option value="">Select Reel of Packing</option>
            <option value="2reel">Reel of 2</option>
            <option value="4reel">Reel of 4</option>
            <option value="conning">Conning</option>
          </select>
        </div>

        {/* Weight per reel */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-scale-balanced"></i>
          </span>
          <select
            name="packing2"
            value={packing2}
            onChange={onChangeHandler}
            className="form-control"
            required
          >
            <option value="">Select Weight Per Reel</option>
            {[...Array(21).keys()].map((i) => (
              <option key={i} value={200 + i * 10}>
                {200 + i * 10}
              </option>
            ))}
          </select>
        </div>

        {/* Additional requirements */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-circle-exclamation"></i>
          </span>
          <textarea
            className="form-control"
            rows="4"
            name="additional"
            value={additional}
            onChange={onChangeHandler}
            placeholder="Describe your requirements"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-100">
          Submit Requirement
        </button>
      </form>
    </div>
  );
}

export default RequirementForm;
