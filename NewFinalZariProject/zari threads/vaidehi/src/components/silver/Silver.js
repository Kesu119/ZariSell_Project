import React,{useState} from 'react'
import './silver.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
function Silver() {
  const images = [assets.silver1, assets.silver2, assets.silver3];
    const [mainImage, setMainImage] = useState(images[0]);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

   const handleOrderClick = () => {
    navigate("/order/Imitation Silver colour");
  };
    return (
      <div className="product-container">
              {/* <!-- Product Image Gallery --> */}
              <div className="image-gallery">
              {images.map((img, index) => (
               <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-20 h-20 cursor-pointer border rounded" onClick={() => setMainImage(img)}
              />
        ))}
              </div>
      
              {/* <!-- Main Product Image --> */}
              <div className="main-image">
              <img src={mainImage} alt="Main Product" className="w-96 h-96 border rounded" />
              <button className={`like-button ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}></button>
              </div>
      
              {/* <!-- Product Details --> */}
              <div className="product-details">
                  <h1>Imitation Silver colour</h1>
                  <h3>Description:</h3>
                 <p className="description" style={{ color: "black" }}>Silver colour</p> 
                 <h3>Price:</h3>       
                 <p className="description" style={{ color: "black" }}>300rs. per/cone</p>
      
                  {/* <!-- Add to Cart --> */}
                  <button className="add-to-cart" onClick={handleOrderClick}>ORDER</button>
              </div>
          </div>
  )
}

export default Silver