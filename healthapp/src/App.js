import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Your Health App</h1>
        <p>A brief description of your app</p>
        <button>Download Now</button>
        {/* <Button variant="primary">Primary</Button> */}
      </header>
      <section className="features">
        <h2>Key Features</h2>
        // List your key features here
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        // Display testimonials here
      </section>
    </div>
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
