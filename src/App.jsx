import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
    <div id="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <h1>Hello World</h1>

      <footer>

      </footer>
    </div>
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
