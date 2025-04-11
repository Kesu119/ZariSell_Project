import React, { useEffect, useState } from "react";
import './Other.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Other() {
  const url = "http://localhost:5000";
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  const navigate = useNavigate();

  const handleOrderClick = (productName) => {
    const formattedName = encodeURIComponent(productName);
    navigate(`/order/${formattedName}`);
  };

  const fetchProductList = async () => {
    const response = await axios.get(url + "/api/product/list");
    setList(response.data.data);
    setDisplayList(response.data.data); // Sync display list with original
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const sortLowToHigh = () => {
    const sorted = [...displayList].sort((a, b) => a.price - b.price);
    setDisplayList(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...displayList].sort((a, b) => b.price - a.price);
    setDisplayList(sorted);
  };

  return (
    <>
      <p className="other-name"><b><u>Our Other Product</u></b></p>

      <div className='filter-buttons'>
        <button onClick={sortLowToHigh}>Sort: Low to High ₹</button>
        <button onClick={sortHighToLow}>Sort: High to Low ₹</button>
      </div>

      <div className="food-item">
        {displayList.map((product, index) => (
          <div key={index} className="food-item-img-con">
            <img height={250} width={300} className='food-item-img' src={`${url}/images/` + product.image} alt={product.name} />
            <div className="food-item-info">
              <p className='food-item-name'>{product.name}</p>
              <p className='food-item-desc'>{product.description}</p>
              <p className='food-item-price'>₹{product.price}</p>
              <button className="add-to-cart" onClick={() => handleOrderClick(product.name)}>Order</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Other;





//old code 

// import React, { useEffect, useState } from "react";
//  import './Other.css'
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";


// function Other() {

//     const url="http://localhost:5000";
//     const [list,setList]=useState([]);

//     const navigate = useNavigate();
//     const [displayList,setDisplayList]=useState([])

//     const handleOrderClick = (productName) => {
//       const formattedName = encodeURIComponent(productName);
//       navigate(`/order/${formattedName}`);
//   };

//     const fetchProductList=async()=>{
//         const response=await axios.get(url+"/api/product/list");
//         setList(response.data.data)
//     }

//     useEffect(()=>{
//         async function loadData() {
//             await fetchProductList(); 
//         }
//         loadData()
//     },[]);

//     const sortLowToHigh = () => {
//       const sorted = [...displayList].sort((a, b) => a.price - b.price)
//       setDisplayList(sorted)
//     }
  
//     const sortHighToLow = () => {
//       const sorted = [...displayList].sort((a, b) => b.price - a.price)
//       setDisplayList(sorted)
//     }
//   return (
//     <>
//     <p className="other-name"><b><u>Our Other Product</u></b></p>

//     <div className='filter-buttons'>
//         <button onClick={sortLowToHigh}>Sort: Low to High ₹</button>
//         <button onClick={sortHighToLow}>Sort: High to Low ₹</button>
//       </div>
//         <div className="food-item">
//         {list.map((product,index)=>{
//                   return (
//     <div key={index} className="food-item-img-con">
//       <img height={250} width={300} className='food-item-img'src={`${url}/images/`+product.image}/>

//                       <div className="food-item-info">
                    
//                       <p className='food-item-name'>{product.name}</p>
//                       <p className='food-item-desc'>{product.description}</p>
//                       <p className='food-item-price'>₹{product.price}</p>
//       <button className="add-to-cart"onClick={() => handleOrderClick(product.name)}>Order</button>
//                       </div>
//                     </div>
                    
//                   )
//                 })}
//         </div>
//         </>
//   );
// }

// export default Other;















