import React, { useState, useEffect } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
		<footer>
    <div className="footer" id="footer">
        <div className="about-company1">
            <h2>About Company</h2>
            <p>Our company  produce textile product in Surat district in Gujarat, India.which is made from yarns of silk and cotton mixed with gold, silver or copper.The zari threads are used to make intricate designs by weaving into generally silk fabrics.It's use is extensive in textile industries and handicrafts.</p>
            {/* <p>Review us on <span className="stars">⭐⭐⭐⭐☆ 4.2</span></p> */}
            {/* <img src="google-logo.png" alt="Google"/> */}
        </div>

        <div className="quick-links1">
            <h2>Quick Links</h2>
            <ul>
                <Link to='/home' href="#">Home</Link>
                <Link to='/about'>About Us</Link>
                {/* <Link to={'/'}>Home</Link> */}
            </ul>
        </div>

        <div className="contact-info1">
            <h2>Contact Info</h2>
            <p>9/746 amliran surat</p>
            <p><strong>Mon to sat:</strong> 8:00 AM - 08:00 PM</p>
            <p><strong>Sun:</strong> 9:00 AM - 2:00 PM</p>
            <p>📞 <strong>+91-00000-11111</strong></p>
            {/* <p>📧 <a href="mailto:info@helixwebi.net">INFO@HELIXWEBI.NET</a></p> */}
            <div className="social-icons1">
                <i className='fa-brands fa-twitter' alt="Twitter" style={{color:"#1DA1F2"}}/> <a style={{color:"white"}}>Twitter</a> 
                <i className='fa-brands fa-facebook' alt="Facebook" style={{color:"#1877F2"}}/><a style={{color:"white"}}>Facebook</a>
                <i className='fa-brands fa-instagram' alt="Instagram" style={{color:"#cd486b"}}/> <a style={{color:"white"}}>Instagram</a>
            </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9127014407745!2d72.82496037471883!3d21.195626632027487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e609bf82c3b%3A0x10f17b1b520ead5b!2sAmliran%2C%20Gopipura%2C%20Surat%2C%20Gujarat%20395008!5e0!3m2!1sen!2sin!4v1741616265283!5m2!1sen!2sin" width="600" height="350"  a></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.912701440736!2d72.8249603738816!3d21.195626632029036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e609bf82c3b%3A0x10f17b1b520ead5b!2sAmliran%2C%20Gopipura%2C%20Surat%2C%20Gujarat%20395008!5e0!3m2!1sen!2sin!4v1743771400204!5m2!1sen!2sin" width="600" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</footer>
        </>
    );
}

export default Footer;
