import './App.css';
import Navbar from './Navbar';
import Help from './Help';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
