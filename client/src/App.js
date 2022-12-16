import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import TakeLoan from "./components/customer/takeLoan";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/takeLoan" exact component={TakeLoan} />
        </Routes>
      </Router>
  );
}

export default App;
