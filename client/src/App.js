import {
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
import Resume from "./pages/Resume"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Goals from "./pages/Goals"
import './styles.scss';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is Home!</div>,
//   },
// ]);

function App() {
  return (
    <div className="app">
      <div className="container">
       <Router>
       <Routes>
    <Route path="/" element={<Resume />} exact/>
    <Route path="/login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/goals" element={<Goals />}/>
  </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
