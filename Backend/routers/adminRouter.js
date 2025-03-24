import express from "express"
import { loginUser,registerUser } from "../controller/adminUserController.js"


const adminRouter=express.Router()

adminRouter.post("/register",registerUser)
adminRouter.post("/login",loginUser)

export default adminRouter;