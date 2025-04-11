import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./cone.css";
import { assets } from "../../assets/assets";

function Cone() {
  const images = [assets.cone1, assets.cone2, assets.cone3, assets.cone4];
  const [mainImage, setMainImage] = useState(images[0]);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate("/order/Imitation silver colour cone");
  };

  return (
    <div className="product-container">
      {/* Product Image Gallery */}
      <div className="image-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-20 h-20 cursor-pointer border rounded"  onClick={() => setMainImage(img)} height={165}  width={200}/>
        ))}
      </div>

      {/* Main Product Image */}
      <div className="main-image">
        <img src={mainImage} alt="Main Product" className="w-96 h-96 border rounded" />
        <button className={`like-button ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}></button>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h1>Imitation silver colour cone</h1>
        <h3>Description:</h3>
        <p className="description" style={{ color: "black" }}>Cone</p> 
        <h3>Price:</h3>       
        <p className="description" style={{ color: "black" }}>300rs. per/cone</p>        

        {/* Order Button */}
        <button className="add-to-cart" onClick={handleOrderClick}>ORDER</button>
      </div>
    </div>
  );
}

export default Cone;
