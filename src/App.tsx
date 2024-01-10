import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './Layout/MainLayout'
import Homepage from './Layout/Homepage/Homepage'
import Pallette from './Layout/Pallette/Pallette'
import Navbar from './components/Navigation/Navbar'

function App() {
 

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/palletes" element={<Pallette />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
