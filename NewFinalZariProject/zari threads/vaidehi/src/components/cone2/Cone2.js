import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './cone2.css'
import { assets } from '../../assets/assets';

function Cone2() {
    const images = [assets.lightCone1, assets.lightCone2,assets.lightCone3];
            const [mainImage, setMainImage] = useState(images[0]);
            const [liked, setLiked] = useState(false);
            const navigate = useNavigate(); 
          
            const handleOrderClick = () => {
              navigate("/order/Imitation Light colour Cone");
            };
  return (
    <div><div className="product-container">
    {/* Product Image Gallery */}
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-20 h-20 cursor-pointer border rounded"  onClick={() => setMainImage(img)} />
      ))}
    </div>

    {/* Main Product Image */}
    <div className="main-image">
      <img src={mainImage} alt="Main Product" className="w-96 h-96 border rounded" />
      <button className={`like-button ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}></button>
    </div>

    {/* Product Details */}
    <div className="product-details">
      <h1>Imitation Light colour Cone</h1>
      <h3>Description:</h3>
      <p className="description" style={{ color: "black" }}>Cone shade2 </p> 
      <h3>Price:</h3>       
      <p className="description" style={{ color: "black" }}>300rs. per/reel</p>        

      {/* Order Button */}
      <button className="add-to-cart" onClick={handleOrderClick}>ORDER</button>
    </div>
  </div></div>
  )
}

export default Cone2