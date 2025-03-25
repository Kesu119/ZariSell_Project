import express from "express"
import authMiddleware from "../middleware/auth.js"
import{getAllOrder,placeOrder, updateStatus} from "../controller/orderController.js"


const orderRouter =express.Router();

orderRouter.get("/getorder",authMiddleware,getAllOrder)
orderRouter.post("/addorder",authMiddleware,placeOrder)
orderRouter.post("/status",updateStatus)
export default orderRouter;





























// orderRouter.post("/place",authMiddleware,placeOrder);
// orderRouter.post("/verify",verifyOrder);
// orderRouter.post("/userorders",authMiddleware,userOrder);
// orderRouter.get('/list',listOrders);
// orderRouter.post("/status",updateStatus);
//import { getAllOrder, listOrders, placeOrder, updateStatus, userOrder, verifyOrder } from "../controller/orderController.js"

