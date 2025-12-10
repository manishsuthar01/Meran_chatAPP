const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

async function protectRoute(req, res, next) {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401).json({ error: "unautherized-no token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ error: "unautherized-token is invalid" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      res.status(404).json({ error: "user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error in protecRoute : ", error.message);
    res.status(500).json({ error: "internal server error" });
  }
}

module.exports = protectRoute; 

// decode is a object with fields you passed in the token generation
// {
//   id: "67485c9a93a1fc2asdasd91",
//   iat: 1733766280,
//   exp: 1734975880
// }
