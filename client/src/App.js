import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/register";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/register" exact component={Register} />
          {/*<Route path="/customers />*/}
        </Routes>
      </Router>
  );
}

export default App;
