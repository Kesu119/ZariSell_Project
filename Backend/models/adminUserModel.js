import mongoose from "mongoose"

const adminSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    // cartData:{type:Object,default:{}}
},
    {minimize:false}
)

const adminUserModel=mongoose.models.user||mongoose.model("admin",adminSchema);
export default adminUserModel;