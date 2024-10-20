import './output.css'
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/AboutMe/AboutMe'
import Projects from './components/Portfolio/Project/Project'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}


export default App