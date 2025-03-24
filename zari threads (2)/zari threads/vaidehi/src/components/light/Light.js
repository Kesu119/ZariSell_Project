import React,{useState} from 'react'
import './light.css' 
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
function Light() {
    const images = [assets.gold1,  assets.gold3, assets.gold4];
      const [mainImage, setMainImage] = useState(images[0]);
      const navigate = useNavigate();

   const handleOrderClick = () => {
    navigate("/order/Imitation Light colour");
  };
      return (
        <div className="product-container">
                {/* <!-- Product Image Gallery --> */}
                <div className="image-gallery">
                {images.map((img, index) => (
                 <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-20 h-20 cursor-pointer border rounded" onClick={()=> setMainImage(img)} />
          ))}
                </div>
        
                {/* <!-- Main Product Image --> */}
                
                <div className="main-image">
                <img src={mainImage} alt="Main Product" className="w-96 h-96 border rounded" />
                </div>
        
                {/* <!-- Product Details --> */}
                <div className="product-details">
                    <h1>Imitation Light colour</h1>
                    <h3>Description:</h3>
                 <p className="description" style={{ color: "black" }}>Light Colour</p> 
                 <h3>Price:</h3>       
                 <p className="description" style={{ color: "black" }}>350rs. per/cone</p>
        
                    {/* <!-- Add to Cart --> */}
                    <button className="add-to-cart"onClick={handleOrderClick}>ORDER</button>
                </div>
            </div>
  )
}

export default Light