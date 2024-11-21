import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import MapView from './components/MapView'
import CropChart from './components/CropCharts'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <MapView/>
      <CropChart/>
      <Footer/>
    </div>
  )
}

export default App
