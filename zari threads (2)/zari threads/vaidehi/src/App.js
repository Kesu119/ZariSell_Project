import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
// import ShowImg from './components/showimg/ShowImg';
import Home from './page/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About_us from './components/about_us/About_us';
import { useState } from 'react';
import LoginPopUp from './components/loginpopup/LoginPopUp';
import RequirementForm from './components/requirementForm/RequirementForm';
// import Order from './components/order/Order';
import Gold from './components/gold_colour/Gold';
import Light from './components/light/Light';
import Silver from './components/silver/Silver';
import Cone from './components/cone/Cone';
import Crap from './components/crap/Crap';
import Review from './components/review/Review';
import Cart from './page/cart/Cart';
import PlaceOrder from './page/PlaceOrder/PlaceOrder';
import Order from './components/order/Order';

function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    
      <Header setShowLogin={setShowLogin}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/order' element={<PlaceOrder/>}/>

        <Route exact path='/require' element={<RequirementForm/>}/>
        <Route exact path='/about' element={<About_us/>}/>
        <Route exact path='/gold' element={<Gold/>}/>
        <Route exact path='/light' element={<Light/>}/>
        <Route exact path='/silver' element={<Silver/>}/>
        <Route exact path='/cone' element={<Cone/>}/>
        <Route exact path='/crap' element={<Crap/>}/>
        <Route exact path='/review' element={<Review/>}/>
        <Route exact path='/order/:productName' element={<Order/>}/>

      </Routes>
    <Footer/>
    </div>
    
    </>

  );
}

export default App;
