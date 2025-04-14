import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://zariSellings:zariSell@cluster0.aorih.mongodb.net/zarisell?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("db conneccted"))
}
