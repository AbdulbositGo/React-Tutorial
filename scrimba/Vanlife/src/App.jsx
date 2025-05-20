import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

import Vans from "./pages/van/Vans"
import Detail from "./pages/van/Detail"

import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

import Layout from "./components/Layout"


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Detail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
