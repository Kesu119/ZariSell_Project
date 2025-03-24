import React, { useState, useEffect } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
		<footer>
    <div className="container1" id="footer">
        <div className="about-company1">
            <h2>About Company</h2>
            <p>Our company  produce textile product in Surat district in Gujarat, India.which is made from yarns of silk and cotton mixed with gold, silver or copper.The zari threads are used to make intricate designs by weaving into generally silk fabrics.It's use is extensive in textile industries and handicrafts.</p>
            {/* <p>Review us on <span className="stars">⭐⭐⭐⭐☆ 4.2</span></p> */}
            {/* <img src="google-logo.png" alt="Google"/> */}
        </div>

        <div className="quick-links1">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                {/* <Link to={'/'}>Home</Link> */}
            </ul>
        </div>

        {/* <div className="our-services1">
            <h2>Our Services</h2>
            <ul>
                <li><a href="#">Web Solution</a></li>
                <li><a href="#">Software Development</a></li>
                <li><a href="#">Application Development</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Industry</a></li>
            </ul>
        </div> */}

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
                {/* <i className='fa-brands fa-twitter' alt="LinkedIn"/>
                <i className='fa-brands fa-twitter' alt="Google"/> */}
            </div>
            {/* <a href="#" className="whatsapp-button1">WhatsApp Us</a> */}
        </div>
    </div>
</footer>
        </>
    );
}

export default Footer;
