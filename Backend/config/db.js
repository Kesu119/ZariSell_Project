import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://zariSelling:zariSell786@cluster0.aorih.mongodb.net/zarisell?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("db conneccted"))
}
//username:zariSelling
//pwd:zariSell786