import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Home from './pages/Home'
import Earphones from './pages/Earphones'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import './App.css'

function App() {
  return (
    <div>
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
