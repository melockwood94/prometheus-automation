import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
      <h1>Hello World</h1>

    <footer>
      
    </footer>
    </>
  )
}

function Home() {
  return (
    <>
    <h1>Home</h1>
    </>
  )
}

function About() {
  return (
    <>
    <h1>About</h1>
    </>
  )
}

export default App
