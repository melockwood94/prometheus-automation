import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'

function App() {
  return (
    <>
    <div id="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>

      </footer>
    </div>
    </>
  )
}

export default App
