
import { BrowserRouter,Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbarr.jsx"
import About from "./Components/Pages/About.jsx"
import Login from "./Components/Pages/Login.jsx"
import Sign_up from "./Components/Pages/SignUpPage.jsx"
import Dashboard from "./Components/Pages/Dashboard.jsx"
import Footer from './Components/Footer.jsx'
import Sec1 from './Components/Sec1.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Temperature from "./Components/Pages/Temperature.jsx"
import PH from "./Components/Pages/PH.jsx"
import Conductivity from "./Components/Pages/Conductivity.jsx"
import Turbidity from "./Components/Pages/Turbidity.jsx"
import Standards from "./Components/Pages/Standards.jsx"
import Account from "./Components/Pages/Account.jsx"
import Settings from "./Components/Pages/Settings.jsx"

import './App.css'

function App() {
  return(
    
    // <div className='App'>
    // <Navbar/>
    //   <Routes>
    //     <Route path="/dashboard" element={<Dashboard />}/>
    //     <Route path="/about" element={<About />}/>
    //     <Route path="/login" element={<Login />}/>
    //     <Route path="/sign_up" element={<Sign_up />}/>
    //   </Routes>
      
    //    <div className="gap">
       
    //    <Sidebar/>
    //    <Sec1/>
    //    </div>
    //    <Footer/>
    // </div>
    
    <div className="liquidsense">
      <Routes>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/sign_up" element={<Sign_up />}/>
    <Route path="/temperature" element={<Temperature />}/>
    <Route path="/pH" element={<PH />}/>
    <Route path="/Conductivity" element={<Conductivity />}/>
    <Route path="/Turbidity" element={<Turbidity />}/>
    <Route path="/Standards" element={<Standards />}/>
    <Route path="/Account" element={<Account />}/>
    <Route path="/Settings" element={<Settings />}/>
    </Routes>
    <div className='App'>
    <Navbar/>
    <div className="gap">
    <Sidebar/>
    <Sec1/>
    </div>
    <Footer/>
    </div>
    </div>
    
  );
  
};

export default App

