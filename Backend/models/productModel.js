import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    // qty:{type:Number,required:true},
    price:{type:Number,required:true},
    // category:{type:String,required:true},
    // city:{type:String,required:true},
    // country:{type:String,required:true},
    image:{type:String,required:true}
})

const productModel=mongoose.models.product||mongoose.model('product',productSchema)
export default productModel;