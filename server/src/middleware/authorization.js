const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will continue on if the token is inside the local storage
module.exports = async (req, res, next) => {
  const token = req.header("token");
  // set token in cookie
  if (!token) {
    return res.status(403).json("Autherization denied");
  }
  try {
    const verify = jwt.verify(token, process.env.jwtSecret);
    req.user = verify.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Token is not valid");
  }
};
