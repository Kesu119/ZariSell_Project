import React from 'react'
import './about_us.css'
import { assets } from '../../assets/assets'
function About_us() {
  return (

<section className="features" style={{color:"black",fontFamily:"Georgia, serif"}}>
    
    {/* copper */}
<div className="feature">
    <img src={assets.copper} alt="Luxury Bedsheet"/>
    <div className="description" >
        <h3 >Copper...</h3>
        <p style={{color:"black"}}>A copper wire bar used in making zari thread is a solid, rectangular block of copper metal that is specifically designed to be drawn into thin, flexible copper wires which are then further processed to create the metallic "zari" thread used in embroidery and weaving, often coated with silver or gold for a decorative effect; this copper bar is typically melted from raw copper ingots and is considered the base material for imitation zari, a more affordable alternative to pure gold or silver zari. </p>
    </div>
</div>

{/* silver */}
<div className="feature">
    <img src={assets.silver} alt="Luxury Bedsheet" height="100" width="100"/>
    <div className="description">
        <h3 >Silver...</h3>
        <p style={{color:"black"}}>Silver Zari is a type of metallic thread traditionally used in weaving luxurious fabrics such as sarees, lehengas, and dupattas. It consists of fine silver-coated strands that give textiles a shimmering, elegant appearance.Traditionally, pure silver was used, which was flattened into thin sheets and wrapped around a silk or cotton core.Modern Zari threads usesilver-plated copper or polyester for durability and cost-effectiveness.Some high-quality Zari threads still retain a thin layer of real silver to maintain the authentic shine.
</p>
    </div>
</div>

{/* yan */}
<div className="feature">
    <img src={assets.yan} alt="Luxury Bedsheet" height="100" width="100"/>
    <div className="description">
        <h3 >Yan...</h3>
        <p style={{color:"black"}}>Zari yarn is the core material used to create Zari threads, which are metallic threads woven into fabrics to add a shimmering effect. The yarn acts as the base onto which metallic coatings or films are applied.<br/>
        <h4>  **Types of Yarn Used in Zari Threads**<br/></h4>
        <b>-Silk Yarn:</b> Traditionally, pure silk is used as the base for premium Zari threads, providing a rich texture and strength.<br/>
        <b>-Cotton Yarn:</b> For affordability and flexibility, cotton yarn is often used as a core material, especially in handcrafted Zari work.<br/>
        <b>-Viscose Yarn:</b> A semi-synthetic alternative that mimics silk but is more cost-effective and commonly used in commercial Zari production.<br/>
        <b>-Polyester Yarn:</b> Modern Zari threads use polyester or nylon yarns for durability, shine, and resistance to tarnishing.
        </p>
    </div>
</div><br></br>


{/* <div className="feature">
    <img src={assets.machine1} alt="Luxury Bedsheet" height="100" width="100"/>
    <div className="description">
        <h4 style={{color:"black"}}>The Surat Zari/Jari Craft...</h4>
        <p>which is made from yarns of silk and cotton...</p>
    </div>
</div> */}
</section>
  )
}

export default About_us