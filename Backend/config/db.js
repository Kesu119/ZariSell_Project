import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('your_mongodb_url').then(()=>console.log("db conneccted"))
}
