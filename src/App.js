import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>    
    </div>
  </>
  );
}

export default App;
