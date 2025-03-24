import React, { useState } from 'react';
import './loginpopup.css';
import { assets } from '../../assets/assets';
import axios from "axios"

function LoginPopUp({ setShowLogin }) {
  const [currState, setCrrState] = useState('Login');
  const [formData, setFormData] = useState({ username: '', email: '', password: '', terms: false });
  const [errors, setErrors] = useState({});
  const url="http://localhost:5000";
  const [token,setToken]=useState("")

  const validateForm = () => {
    let formErrors = {};
    if (currState === 'Sign Up' && !formData.username) {
      formErrors.username = 'Username is required';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Valid email is required';
    }
    if (!formData.password || formData.password.length < 8 ) {
      formErrors.password = 'Password must be at least 8 characters long';
    }
    if (!formData.terms) {
      formErrors.terms = 'You must agree to the terms';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`${currState} Successful`);
      setShowLogin(false);
    }
    let newUrl=url;
    if(currState==="Login"){
      newUrl += "/api/user/login"
    }else{
      newUrl += "/api/user/register"
    }

    const userData = {
      username: formData.username,  
      email: formData.email,
      password: formData.password,
    };

    const response = await axios.post(newUrl,formData);
        if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
    }
          else{
            alert(response.data.message)
          }
        
        
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-con' onSubmit={handleSubmit}>
        <div className='login-popup-title'>
          <h1>{currState}</h1>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>

        <div className='login-popup-input'>
          {currState === 'Sign Up' && (
            <>
              <input
                type='text'
                name='username'
                placeholder='Enter Username'
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className='error'>{errors.username}</p>}
            </>
          )}
          <input
            type='email'
            name='email'
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className='error'>{errors.email}</p>}

          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>

        <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>

        <div className='login-popup-condition'>
          <input
            type='checkbox'
            name='terms'
            checked={formData.terms}
            onChange={handleChange}
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
          {errors.terms && <p className='error'>{errors.terms}</p>}
        </div>

        {currState === 'Login' ? (
          <p>
            Create a New account?{' '}
            <span onClick={() => setCrrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCrrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;

























// import React, { useState } from 'react';
// import './loginpopup.css';
// import { assets } from '../../assets/assets';

// function LoginPopUp({ setShowLogin }) {
//   const [currState, setCrrState] = useState('Login');
//   const [formData, setFormData] = useState({ username: '', email: '', password: '', terms: false });
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let formErrors = {};
//     if (currState === 'Sign Up' && !formData.username) {
//       formErrors.username = 'Username is required';
//     }
//     if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       formErrors.email = 'Valid email is required';
//     }
//     if (!formData.password || formData.password.length < 8 ) {
//       formErrors.password = 'Password must be at least 8 characters long';
//     }
//     if (!formData.terms) {
//       formErrors.terms = 'You must agree to the terms';
//     }
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert(`${currState} Successful`);
//       setShowLogin(false);
//     }
//   };

//   return (
//     <div className='login-popup'>
//       <form className='login-popup-con' onSubmit={handleSubmit}>
//         <div className='login-popup-title'>
//           <h1>{currState}</h1>
//           <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
//         </div>

//         <div className='login-popup-input'>
//           {currState === 'Sign Up' && (
//             <>
//               <input
//                 type='text'
//                 name='username'
//                 placeholder='Enter Username'
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//               {errors.username && <p className='error'>{errors.username}</p>}
//             </>
//           )}
//           <input
//             type='email'
//             name='email'
//             placeholder='Enter Email'
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p className='error'>{errors.email}</p>}

//           <input
//             type='password'
//             name='password'
//             placeholder='Enter Password'
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           {errors.password && <p className='error'>{errors.password}</p>}
//         </div>

//         <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>

//         <div className='login-popup-condition'>
//           <input
//             type='checkbox'
//             name='terms'
//             checked={formData.terms}
//             onChange={handleChange}
//           />
//           <p>By continuing, I agree to the terms of use & privacy policy</p>
//           {errors.terms && <p className='error'>{errors.terms}</p>}
//         </div>

//         {currState === 'Login' ? (
//           <p>
//             Create a New account?{' '}
//             <span onClick={() => setCrrState('Sign Up')}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{' '}
//             <span onClick={() => setCrrState('Login')}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// }

// export default LoginPopUp;
