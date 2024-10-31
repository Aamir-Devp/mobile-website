import logo from './logo.svg';
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router} from "react-router-dom"
import Slider from "./components/Slider.js"
function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider/>
    </Router>
  );
}

export default App;
