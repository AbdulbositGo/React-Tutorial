import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from "./pages/Vans"
import Detail from "./pages/Detail"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
