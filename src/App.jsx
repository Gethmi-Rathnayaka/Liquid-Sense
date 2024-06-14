
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbarr.jsx"
import { About } from "./Components/Pages/About.jsx"
import { Login } from "./Components/Pages/Login.jsx"
import { Sign_up } from "./Components/Pages/SignUpPage.jsx"
import { Dashboard } from "./Components/Pages/Dashboard.jsx"
import Footer from './Components/Footer.jsx'
import Sec1 from './Components/Sec1.jsx'
import Sidebar from './Components/Sidebar.jsx'

import './App.css'

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign_up" element={<Sign_up />}/>
      </Routes>
       <div className="gap">
       <Navbar/>
       <Sidebar/>
       <Sec1/>
       </div>
       <Footer/>
    </div>
  );
  
}

export default App
