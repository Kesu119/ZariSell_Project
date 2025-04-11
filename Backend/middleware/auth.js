import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({ success: false, message: "Not authorized. log in again." });
  }

  const token = authHeader.split(" ")[1]; 

  if (!token) {
    return res.json({ success: false, message: "Token is missing" });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;  
    next(); 
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Invalid or expired token." });
  }
};

export default authMiddleware;

