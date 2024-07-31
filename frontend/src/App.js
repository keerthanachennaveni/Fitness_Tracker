
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './styles.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import LogProgress from './components/LogProgress';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Log from './components/Log';
// import Progress from './components/Progress';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/logprogress" element={<LogProgress />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/log"
//             element={<ProtectedRoute loggedIn={loggedIn} component={<Log />} />}
//           />
//           <Route
//             path="/progress"
//             element={<ProtectedRoute loggedIn={loggedIn} component={<Progress />} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// src/App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Log from './components/Log';  // Renamed for clarity
// import Progress from './components/Progress';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/log" element={<ProtectedRoute loggedIn={loggedIn} component={<Log />} />} />
//           <Route path="/progress" element={<ProtectedRoute loggedIn={loggedIn} component={<Progress />} />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js

// frontend/src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Log from './components/Log';
import Progress from './components/Progress';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/log" element={<ProtectedRoute loggedIn={loggedIn} component={Log} />} />
          <Route path="/progress" element={<ProtectedRoute loggedIn={loggedIn} component={Progress} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
