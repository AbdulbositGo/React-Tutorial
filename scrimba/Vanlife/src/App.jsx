import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

import Vans from "./pages/van/Vans"
import Detail from "./pages/van/Detail"

import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import { Vans as HostVans } from "./pages/host/Vans"
import { VanDetail, VanPricing, VanPhotos } from "./pages/host/VanDetail"

import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import HostVanLayout from "./components/HostVanLayout"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Detail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanLayout />}>
              <Route index element={<VanDetail />} />
              <Route path="pricing" element={<VanPricing />} />
              <Route path="photos" element={<VanPhotos />} />

            </Route>

            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
