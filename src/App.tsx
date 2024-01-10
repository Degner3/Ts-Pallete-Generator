import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Pallette from './Layout/Pallette/Pallette'
import Navbar from './components/Navigation/Navbar'
import Homepage from './Layout/Homepage/Homepage'


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
