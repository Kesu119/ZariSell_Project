import express  from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routers/productRouter.js"
import userRouter from "./routers/userRouter.js"
import "dotenv/config"
import cartRouter from "./routers/cartRouter.js"
import orderRouter from "./routers/orderRouter.js"
import requirementRouter from "./routers/requirementRouter.js"
import adminRouter from "./routers/adminRouter.js"

//app config
const app=express()
const port=5000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/product",productRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/requirement",requirementRouter)
app.use("/api/admin",adminRouter)

app.get("/",(req,res)=>{
    res.send("api working");
})

app.listen(port,()=>{
    console.log("server start on port no 5000")
})