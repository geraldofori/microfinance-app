import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/auth/register";
import Login from "./components/auth/login";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />

        </Routes>
      </Router>
  );
}

export default App;
