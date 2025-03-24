import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // Check if the Authorization header is present
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Not authorized. Please log in again." });
  }

  //  Check if the token is in the correct "Bearer <token>" format
  const token = authHeader.split(" ")[1]; // Get token after "Bearer"

  if (!token) {
    return res.status(401).json({ success: false, message: "Token is missing or malformed." });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;  // Store the user ID in the request object for further use
    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error(error);
    return res.status(403).json({ success: false, message: "Invalid or expired token." });
  }
};

export default authMiddleware;














// import jwt from "jsonwebtoken"
// import userModel from "../models/userModel.js";

// const authMiddleware=async(req,res,next)=>{
// const {token}=req.headers.authorization?.split(" ")[1];
// if(!token){
//     return res.json({success:false,message:"not authorized login again"})
//  }
//  try{
//     const token_decode=jwt.verify(token,process.env.JWT_SECRET); 
//    //  const userId=token_decode.id;
//      req.userId=token_decode.id;
//     next();
//  }catch(error){
//     console.log(error);
//     res.json({success:false,message:"Error"})
//  }
// }
// export default authMiddleware;