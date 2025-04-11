import { useState ,useEffect} from 'react'
import React from 'react'
import './header.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

function Header({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({}); 
  const [token,setToken]=useState('');
  const navigate = useNavigate();


  // Retrieve token from localStorage on component mount
    useEffect(() => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);
   
    // Store the token in localStorage and update state
    const handleLoginSuccess = (token) => {
      localStorage.setItem('token', token);
      setToken(token);
    };
  
    // Clear token from localStorage and reset token state
    const handleLogout = () => {
      localStorage.removeItem('token');
      setToken('');
    };

  function openNav() {
    setMenuOpen(true);
  }

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  return (
    <>
      <div className='navbar'>
        {/* Bootstrap Offcanvas */}
        <div className="offcanvas offcanvas-start" id="o1">
          <div className="offcanvas-header" style={{ backgroundColor:"#4D4D4D" }}>
          <div className="offcanvas-title" style={{ color:"goldenrod",fontFamily:"sans-serif" }}><img src='logo.png' height={50} width={200} className='logo' /><br/><b>Nathubhai Murchanddas jariwala</b></div>
            <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
          </div>

          <div className="offcanvas-body mx-4">
            <ul className="dropdown1-menu">
              
              {/* Company Profile */}
              <li>
                <a className="dropdown1-item" href="#" onClick={() => toggleDropdown("companyProfile")} style={{ color: "black" }}>
                  Company profile ▼
                </a>
                {openDropdown.companyProfile && (
                  <ul className="dropdown1-menu">
                    <Link to={'/about'} className="dropdown1-item" style={{ color: "black" }}>About Us</Link>
                    <Link to={'/review'} className="dropdown1-item" href="#" style={{ color: "black" }}>Testimonial</Link>
                  </ul>
                )}
              </li>

              {/* Products Dropdown */}
              <li>
                <a className="dropdown1-item" href="#" onClick={() => toggleDropdown("products")} style={{ color: "black" }}>
                  Products ▼
                </a>
                {openDropdown.products && (
                  <ul className="dropdown1-menu">
                    {/*  product inside 1 */}
                    <li>
                      <a className="dropdown1-item" href="#" onClick={() => toggleDropdown("goldZari")} style={{ color: "black" }}>
                        Imitation Zari gold colour 240 gm ▼
                      </a>
                      {openDropdown.goldZari && (
                        <ul className="dropdown2-menu">
                          <Link to="/darkGold1"  style={{ color: "black" }}>Dark Gold Shade 1</Link>
                          <Link  to="/darkGold2" style={{ color: "black" }}>Dark Gold Shade 2</Link>
                        </ul>
                      )}
                    </li>
                      {/* product inside 2 */}
                    <li>
                      <a className="dropdown1-item" href="#" onClick={() => toggleDropdown("lightZari")} style={{ color: "black" }}>
                      Imitation Zari light colour 240 gm ▼
                      </a>
                      {openDropdown.lightZari && (
                        <ul className="dropdown2-menu">
                          <Link to="/lightGold1"  style={{ color: "black" }}>light Gold Shade 1</Link>
                          <Link to="/lightGold2"  style={{ color: "black" }}>light Gold Shade 2</Link>
                        </ul>
                      )}
                    </li>

                      {/* product inside 3 */}
                    <li>
                      <a className="dropdown1-item" href="#" onClick={() => toggleDropdown("crapZari")} style={{ color: "black" }}>
                      Imitation Zari crape quality 
                      </a>
                    </li>

                      {/* product inside 4 */}
                    <li>
                      <a className="dropdown1-item" href="#" onClick={() => toggleDropdown("silverZari")} style={{ color: "black" }}>
                      Imitation Zari silver quality ▼
                      </a>
                      {openDropdown.silverZari && (
                        <ul className="dropdown2-menu">
                          <Link to="/silver1" className="dropdown2-item" href="#" style={{ color: "black" }}>Silver Shade 1</Link>
                        </ul>
                      )}
                    </li>

                      {/* product inside 5 */}
                    <li>
                      <a className="dropdown1-item" href="#" onClick={() => toggleDropdown("coneZari")} style={{ color: "black" }}>
                      Imitation Zari Cone ▼
                      </a>
                      {openDropdown.coneZari && (
                        <ul className="dropdown2-menu">
                          <Link to="/cone1" href="#" style={{ color: "black" }}>cone Shade 1</Link>
                          <Link to="/cone2" href="#" style={{ color: "black" }}>cone Shade 2</Link>
                        </ul>
                      )}
                    </li>
                    
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar Buttons */}
        <i className="fa-solid fa-bars fa-xl menu-btn" onClick={openNav} data-bs-toggle="offcanvas" data-bs-target="#o1" aria-controls="o1" style={{ color: 'darkgoldenrod' }}></i>
        <Link to="/"><img src='logo.png' height={50} width={200} className='logo' /></Link>

        <div className='nav-menu'>
          <Link to={'/'} onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
          <a href='#footer' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</a>
          <Link to={'/require'} onClick={() => setMenu("Requirement")} className={menu === "Requirement" ? "active" : ""}>Requirement</Link>

          {/* Product Type Dropdown */}
          <a className="dropdown">
            <a href='#Product_Type' onClick={() => setShowDropdown(!showDropdown)} className={menu === "Product_type" ? "active" : ""}>
              Product Type <i className="fa fa-caret-down"></i>
            </a>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/gold">Imitation Zari gold colour 240 gm</Link>
                <Link to='/light'>Imitation Zari light colour 240 gm</Link>
                <Link to='/crap'>Imitation Zari crape quality</Link>
                <Link to='/silver'>Imitation Zari silver quality</Link>
                <Link to='/cone'>Imitation Zari cone</Link>
                <Link to='/other'>Other</Link>
        
              </div>
            )}
          </a>
        </div>

        <div className='button'>
                {!token?<button onClick={()=>setShowLogin(true)} className='signin'>Sign in</button>
                :<div className='navbar-profile'>
                  <img src={assets.profile_icon} alt=""/>
                  <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate('/track_order')}><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
                    <hr/>
                    <li><img src={assets.logout_icon} alt=""/><p onClick={handleLogout}>Logout</p></li>
                  </ul>
                </div>}
              
              </div>
        {/* <div className='button'>
              <button className="signin" onClick={()=>setShowLogin(true)}>Sign in</button>
        </div> */}
      </div>
    </>
  )
}

export default Header;
