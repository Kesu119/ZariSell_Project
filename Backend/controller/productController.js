import productModel from "../models/productModel.js";
import fs from "fs"

//add product item
const addProduct=async(req,res)=>{
let image_filename=`${req.file.filename}`;
const product =new productModel({
    name:req.body.name,
    description:req.body.description,
    // qty:req.body.qty,
    price:req.body.price,
    // category:req.body.category,
    // city:req.body.city,
    // country:req.body.country,
    image:image_filename
})
try {
    await product.save();
    res.json({success:true,message:"product add"})
} catch (error) {
    console.log(error);
    res.json({success:false,message:"product not add"})
}
}

//all product list
const listProduct=async(req,res)=>{
try {
    const product=await productModel.find({});
    res.json({success:true,data:product})
} catch (error) {   
    console.log(err);
    res.json({success:false,message:"Error"})   
}
}

//remove product item
const removeProduct=async(req,res)=>{
try{
    const product=await productModel.findById(req.body.id);
    fs.unlink(`uplods/${product.image}`,()=>{})

    await productModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"product delete"})
}
catch(error)
{
    console.log(error)
    res.json({success:false,message:"error"})

}
}//update product item
const updateProduct=async(req,res)=>{
    try{
        const product=await productModel.findById(req.body.id);
        if(!product){
            return res.json({success:false,message:"product not found"});
        }

        let image_filename=product.image;
        if(req.file){
            fs.unlink(`uplods/${product.image}`,()=>{});
            image_filename=req.file.filename;
        }

        const updatedProduct=await productModel.findByIdAndUpdate(req.body.id,{
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image:image_filename
        },{new:true});
        res.json({success:"product update done",data:updatedProduct})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
export {addProduct,listProduct,removeProduct,updateProduct};