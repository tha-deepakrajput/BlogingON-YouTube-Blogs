const JWT = require("jsonwebtoken");

// creating a jwt token :
function createTokenForUser(user) {
  const payload = {
    name: user.fullName,
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };
  const token = JWT.sign(payload, process.env.secret);
  return token;
}

// Here we are verifying the created token :
function validateToken(token) {
  const payload = JWT.verify(token, process.env.secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
};
