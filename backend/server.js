
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;
// app.use(cors());
// // Middleware

// // router.get("/", (req, res) => {
// //   res.setHeader("Access-Control-Allow-Origin", "*")
// //   res.setHeader("Access-Control-Allow-Credentials", "true");
// //   res.setHeader("Access-Control-Max-Age", "1800");
// //   res.setHeader("Access-Control-Allow-Headers", "content-type");
// //   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
// //    });
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from localhost:3000
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Allow sending cookies and other credentials
// }));

// // Database Connection
// const uri = process.env.MONGO_URI || 'your_default_mongodb_connection_string';
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB database connection established successfully"))
// .catch(err => {
//   console.error('MongoDB connection error:', err);
//   if (err.name === 'MongoNetworkError') {
//     console.error('Network issue or incorrect IP whitelist settings.');
//   }
// });

// // Routes
// const authRoutes = require('./routes/authRoutes');
// // const userRoutes = require('./routes/measurementRoutes');
// const foodRoutes = require('./routes/foodRoutes');
// // const workoutRoutes = require('./routes/workoutRoutes');

// app.use('/api/auth', authRoutes);
// // app.use('/api/measurements', userRoutes);
// app.use('/api/foodintakes', foodRoutes);
// // app.use('/api/workouts', workoutRoutes);

// // Handle 404 for undefined routes
// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const logRoutes = require('./routes/log');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://chenavenikeerthana:KTNPpWA7goi2wWbv@fitness-cluster.vq1r0re.mongodb.net/?retryWrites=true&w=majority&appName=Fitness-cluster', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// app.use('/api/auth', authRoutes);
// app.use('/api/log', logRoutes);

// app.listen(5000, () => {
//     console.log('Server running on port 5000');
// });

  


// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const logRoutes = require('./routes/log');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://chenavenikeerthana:KTNPpWA7goi2wWbv@fitness-cluster.vq1r0re.mongodb.net/?retryWrites=true&w=majority&appName=Fitness-cluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/log', logRoutes); // Use '/api/log' for log routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
