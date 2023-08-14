import './App.css'

import Info from '../components/Info.jsx'
import Contact from '../components/Contact.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'


function App() {
  return (
      <div className='container-sm' style={{padding: '0', maxWidth: '360px'}}>
            <Info />
            <Contact />
            <About />
            <Footer />
      </div>
  )
}

export default App
