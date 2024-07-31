// // backend/middleware/auth.js

// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config();

// module.exports = async (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ message: 'Authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ message: 'Invalid token' });
//   }
// };


// backend/middleware/auth.js

// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config();

// module.exports = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1]; // Get token from header and remove 'Bearer'

//   if (!token) {
//     return res.status(401).json({ message: 'Authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.userId; // Assuming the token has userId

//     next();
//   } catch (err) {
//     console.error(err.message);
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };


// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config();

// module.exports = (req, res, next) => {
//   const authHeader = req.header('Authorization');
//   const token = authHeader && authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'

//   if (!token) {
//     return res.status(401).json({ message: 'Authorization denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.userId; // Ensure userId is correctly extracted

//     console.log('Token decoded:', decoded); // Debug log to check token details
//     next();
//   } catch (err) {
//     console.error('Token validation error:', err.message);
//     res.status(401).json({ message: 'Invalid token.' });
//   }
// };



// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Assuming JWT contains userId
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};
