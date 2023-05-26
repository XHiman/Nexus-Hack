import './styles/App.css'
import Home from './Home'
import Header from './Pages/Header'
import About from './Pages/About'
import Sponsors from './Pages/Sponsors'
import Footer from './Pages/Footer'
import Navbar from './Navbar'
import Domains from './Pages/Domains'
import Phases from './Pages/Phases'
import Countdown from './Pages/Countdown'

function App() {

  return (
    <><img src='../BG2.png' className='BG12' />
      <div className="vidbg">
        <video id="background-video" autoPlay loop muted>
          <source src="../man.mp4" type="video/mp4"/>
      </video>
      </div>
      
    <div classname="app-grid">
      
      <Header/>
      <Home/>
      <About/>
      <Domains/>
      <Phases/>
      <Sponsors/>
      <Countdown/>  
      <Footer/>
    </div>
  </>
  )
}

export default App
/**/