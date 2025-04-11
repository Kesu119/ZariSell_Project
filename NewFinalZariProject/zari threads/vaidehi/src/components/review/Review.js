import React from 'react'
import './review.css'
import { assets } from '../../assets/assets'
function Review() {
  return (
    <><div className="container" id="review">
    <h2 style={{color:"black"}}>Customer's Love</h2>
    <div className="rating-overview">
        <div className="rating-summary">3/5 <span className="stars">★★★☆☆</span><br/> Reviewed by 7 Users</div>
        <div>
            <div className="bar-container">5 <img src={assets.star_icon}/> <div className="bar"><div className="bar-fill" style={{width: "43%"}}></div></div> 4</div>
            <div className="bar-container">4<img src={assets.star_icon}/> <div className="bar"><div className="bar-fill" style={{width: "0%"}}></div></div> 0</div>
            <div className="bar-container">3 <img src={assets.star_icon}/><div className="bar"><div className="bar-fill" style={{width: "50%"}}></div></div> 5</div>
            <div className="bar-container">2<img src={assets.star_icon}/> <div className="bar"><div className="bar-fill" style={{width: "14%"}}></div></div> 2</div>
            <div className="bar-container">1<img src={assets.star_icon}/> <div className="bar"><div className="bar-fill" style={{width: "29%"}}></div></div> 3</div>
        </div>
        
    </div>
    <h3>User Satisfaction</h3>
    <div className="user-satisfaction">
        <p>Response <span className="bar"> <div className="bar"><div className="bar-fill" style={{width: "50%"}}></div></div></span> 50%</p>
        <p>Quality <span className="bar"><div className="bar"><div className="bar-fill" style={{width: "100%"}}></div></div></span> 100%</p>
        <p>Delivery <span className="bar"><div className="bar"><div className="bar-fill" style={{width: "80%"}}></div></div></span> 80%</p>
    </div>
    <div className="review-section">
        <h3>Most Relevant Reviews</h3>
        <div className="review">
            <h3>R.K Srikanthan  ★★★★☆ </h3>
            <p> Bangalore, Karnataka</p>
            <p>Product Name: Gold Zari Thread</p>
            <p>Response 👍🏻 Quality 👍🏻 Delivery 👍🏻</p>
        </div>
        <div className="review">
            <h3>Ramanujam S ★★★★★</h3>
            <p>Coimbatore, Tamil Nadu</p>
            <p>Product Name: Silver Zari Thread</p>
        </div>
        <div className="review">
            <h3>Dipesh Gada ★★☆☆☆</h3>
            <p>Chitradurga, Karnataka</p>
        </div>
    </div>
</div></>
  )
}

export default Review