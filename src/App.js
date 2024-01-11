
import './App.css';
import Navbar from './components/Navbar';
import Home from './screen/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
