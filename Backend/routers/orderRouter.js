import express from "express"
import authMiddleware from "../middleware/auth.js"
import{getAllOrder,placeOrder, StripePayment,updateStatus,verifyPayment} from "../controller/orderController.js"


const orderRouter =express.Router();

orderRouter.get("/getorder",authMiddleware,getAllOrder)
orderRouter.post("/addorder",authMiddleware,placeOrder)
orderRouter.post("/status",updateStatus)
orderRouter.post("/payment",StripePayment)
 orderRouter.post("/verify",verifyPayment)

export default orderRouter;























