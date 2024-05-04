import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // make sure you load the cookie parser in the app.js/server.js
    if (!token) {
      return res
        .status(401)
        .json({ error: "unauthorized - no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // call the jwt to verify the token using the secret

    if (!decoded) {
      return res.status(401).json({ error: "unauthorized - invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal service error || ${error}` });
  }
};

export default protectRoute;
