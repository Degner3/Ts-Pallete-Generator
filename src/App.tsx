import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Pallette from './Layout/Pallette/Pallette'
import Navbar from './components/Navigation/Navbar'
import Homepage from './Layout/Homepage/Homepage'
import Footer from './components/footer/Footer'
import TestPage from './Layout/TestPage.tsx/TestPage'


function App() {
 

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/palletes" element={<Pallette />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
