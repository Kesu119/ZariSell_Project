import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
// import ShowImg from './components/showimg/ShowImg';
import { ToastContainer } from 'react-toastify'
import Home from './page/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About_us from './components/about_us/About_us';
import { useState } from 'react';
import LoginPopUp from './components/loginpopup/LoginPopUp';
import RequirementForm from './components/requirementForm/RequirementForm';
import Gold from './components/gold_colour/Gold';
import Light from './components/light/Light';
import Silver from './components/silver/Silver';
import Cone from './components/cone/Cone';
import Crap from './components/crap/Crap';
import Review from './components/review/Review';
import Cart from './page/cart/Cart';
import PlaceOrder from './page/PlaceOrder/PlaceOrder';
import Order from './components/order/Order';
import DarkGold1 from './components/darkGold1/DarkGold1';

import DarkGold2 from './components/darkGold2/DarkGold2';
import LightGold1 from './components/lightGold1/LightGold1';
import LightGold2 from './components/lightGold2/LightGold2';
import Silver1 from './components/silver1/Silver1';
import Cone1 from './components/cone1/Cone1';
import Cone2 from './components/cone2/Cone2';
import Bill from './components/bill/Bill';
import Track_order from './components/track_order/Track_order';
import Other from './components/other/Other';
import Verify from './components/verify/Verify';



function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
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
        <Route exact path='/darkGold1' element={<DarkGold1/>}/>
        <Route exact path='/darkGold2' element={<DarkGold2/>}/>
        <Route exact path='/lightGold1' element={<LightGold1/>}/>
        <Route exact path='/lightGold2' element={<LightGold2/>}/>
        <Route exact path='/silver1' element={<Silver1/>}/>
        <Route exact path='/cone1' element={<Cone1/>}/>
        <Route exact path='/cone2' element={<Cone2/>}/>
        <Route exact path='/other' element={<Other/>}/>
        <Route exact path='/bill' element={<Bill/>}/>
        <Route exact path='/track_order' element={<Track_order/>}/>
        <Route exact path='/verify' element={<Verify/>}/>
       
        
        
      </Routes>
    <Footer/>
    </div>
    
    </>

  );
}

export default App;
