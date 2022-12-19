import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import TakeLoan from "./components/customer/TakeLoan";
import Dashboard from "./components/customer/Dashboard";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/takeLoan" element={<TakeLoan/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
  );
}

export default App;
