import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Sec1 from './Components/Sec1.jsx'
import Sidebar from './Components/Sidebar.jsx'
import './App.css'

function App() {

  return(
    <div className='App'>
       <Header/>
       <Sidebar/>
       <Dashboard/>
       <Sec1/>
       <Footer/>
    </div>
  );
  
}

export default App
