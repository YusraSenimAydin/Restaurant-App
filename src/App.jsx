
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import CartPage from './pages/CartPage';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </div>
  )
}

export default App
