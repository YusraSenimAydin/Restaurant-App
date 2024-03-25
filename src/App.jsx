
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import CartPage from './pages/CartPage';
import BillPaga from './pages/BillPage'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPaga />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
