import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './Layout/MainLayout'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
