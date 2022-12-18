import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import TakeLoan from "./components/customer/TakeLoan";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/takeLoan" element={<TakeLoan/>} />
        </Routes>
      </Router>
  );
}

export default App;
