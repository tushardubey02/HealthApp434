import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import HealthData from './pages/HealthData/HealthData';
import ExerciseData from './pages/ExerciseData/ExerciseData';
import Settings from './pages/AddItem/AddItem'; 
import Search from './pages/Search/Search'; 
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/healthdata" element={<HealthData />} />
          <Route path="/exercisedata" element={<ExerciseData />} />
          <Route path="/AddItem" element={<Settings />} /> 
          <Route path="/search" element={<Search />} /> 
        </Routes>
        <Footer closeMenu={closeMenu} />
      </div>
    </Router>
  );
}

export default LandingPage;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
