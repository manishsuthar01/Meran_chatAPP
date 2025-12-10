const jwt = require("jsonwebtoken");
const secretKey = "manish@123"; // can store in .env file

// crete token
function generateTokenAndSetcookie(userId, res) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOly: true, // prevent xss attacks cross-side scripting attack
    sameSite: "strict", // CSRF attacks corss-side request forgery attacks
  });
}

module.exports = generateTokenAndSetcookie;
