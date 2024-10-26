import './output.css'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='w-screen'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}


export default App