import React from 'react'
import './showimg.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
function ShowImg() {
  return (
    
  <div>
        <div className='header'>
            <div className='header-content'>
                <div className='heading'>NMJ Zari traders</div>
                <div className='name'>Nathubhi Murchanas Jariwala</div>
                <button className='button'>View product</button>
            </div>
        </div> 

{/* image card */}
  <div className="container">
    <h1>Some of Our Project</h1>
    <p className="subtitle">Explore the different thread we specialize in, ranging from raw goods.</p>

    <div className="projects">
      {/* <!-- Cotton Fabric --> */}
      <div className="project-card">
        <img src={assets.product3}  alt="Cotton Fabric"/>
        <h3>Imitation Crape zari</h3>
        <p>Learn more....</p>
        {/* <p>Learn more about our ......</p> */}
        <Link to={'/about'}>Read More</Link>
      </div>

      {/* <!-- Wool Fabric --> */}
      <div className="project-card">
        <img src={assets.product1} alt="Wool Fabric"/>
        <h3>Imitation Golden zari</h3>
        <p>Explore our....</p>
        <Link to={'/about'}>Read More</Link>
      </div>

      {/* <!-- Linen Fabric --> */}
      <div className="project-card">
        <img src={assets.product6}alt="Linen Fabric"/>
        <h3>Imitation Silver zari</h3>
        <p>Discover our...</p>
        <Link to={'/about'}>Read More</Link>
      </div>
    </div>
  


{/* image  */}
  <div className='image-set'>
    <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={assets.machine2} height={250}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={assets.product2} height={450}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={assets.product4} height={450}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={assets.machine} height={250}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={assets.machine3} height={250}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src={assets.machine1} height={450} 
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
      </div>
    </div> 
</div>     
  )   
}

export default ShowImg