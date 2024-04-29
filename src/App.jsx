import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <Router> {/* Wrap Routes with Router */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
