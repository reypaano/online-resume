import {
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
import Resume from "./pages/Resume"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Goals from "./pages/Goals"
import './styles.scss';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddEdit from "./pages/AddEdit"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <div className="container">
      <ToastContainer position='top-center' />
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />}  exact/>
          <Route path="/landing" element={<Resume />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/goals" element={<Goals />}/>
          <Route path="/add-goal" element={<AddEdit />}/>
          <Route path="/update/:id" element={<AddEdit />}/>
        </Routes>
        <Footer/>
      </Router>
      </div>
    </div>
  );
}

export default App;
