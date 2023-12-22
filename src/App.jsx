
import './App.css'
import {  Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';




function App() {

  return (
    <div>
      
        <Routes>
          <Route path="/registerpage" element={<RegisterPage/> }/>
          <Route path="/loginpage" element={<LoginPage/>} /> 
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/" element={<HomePage/>} /> 
        </Routes>
      

    </div>
  )
}

export default App
