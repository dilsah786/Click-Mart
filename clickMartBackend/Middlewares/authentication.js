const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.json({ status:"Un - Authorized",message: "Please Login First" });
  }
  const token = authToken.split(" ")[1];

  jwt.verify(token, process.env.secretToken, function (err, decoded) {
    if (err) {
      return res.json({status:"Invalid token", message: "Please try to login again with right credential" });
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = { authentication };