import './output.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main className="bg-gradient-to-b from-gray-900 to-blue-950 p-6 font-sans font-bold font-weight-600">
            <About />
            <Portfolio />
            <Resume />
            <Contact />
        </main>
        <Footer />
      </Router>
    </div>
  )
}


export default App