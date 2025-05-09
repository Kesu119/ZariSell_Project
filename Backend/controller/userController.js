import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
//login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user= await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"user dosen't exist"})
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid User"})
        }

        const token=createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser=async(req,res)=>{
    const {username,password,email}=req.body;
    try {
        //checking user is already exist
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user alredy exist"})
        }
        //validating email & pwd
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"pls enter valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"pls enter Strong pwd"})
        }

        //hashing user pwd

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new userModel({
            username:username,
            email:email,
            password:hashedPassword
        })

        const user=await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}