const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const createToken = (user) => {
  // Sign the JWT with the user ID
  return jwt.sign(
    { userId: user._id }, // Payload: user ID
    process.env.JWT_SECRET, // Secret key from environment variables
    { expiresIn: '1h' } // Token expiry time
  );
};

module.exports = createToken;
