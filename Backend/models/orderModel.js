import mongoose from "mongoose"

const orderSchema=new mongoose.Schema({
    // userId:{type:String,required:true},
    // items:{type:Array,required:true},
    // amount:{type:Number,required:true},
    // address:{type:Object,required:true},
    // status:{type:String,default:"Product Processing"},
    // date:{type:Date,default:Date.now()},
    // payment:{type:Boolean,default:false}

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    productname:{type:String,required:true},
    qty:{type:Number,required:true},
    amount:{type:Number,required:true},
    address:{type:String,required:true},
    status:{type:String,required:true},
    date:{type:Date,default:Date.now()},
    paymode:{type:String,required:true}
})

const orderModel=mongoose.models.order||mongoose.model("order",orderSchema);
export default orderModel;