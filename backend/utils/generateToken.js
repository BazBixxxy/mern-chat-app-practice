import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    // the industry standard is setting it to 15 days
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    // we set the token to a cookie after generating it using, jwt.
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // prevent cross-site scripting attacks
    sameSite: "strict",
    // 
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
