import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Layout/Homepage'
import Pallette from './Layout/Pallette'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/palletes" element={<Pallette />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
