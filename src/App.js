import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <h3>
            Math Magicians
          </h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Calculator/">Calculator</a></li>
            <li><a href="/Quote/">Quote</a></li>
          </ul>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calculator/" element={<Calculator />} />
          <Route path="/Quote/" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
