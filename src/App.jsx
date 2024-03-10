import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/result' element={<Result />} />
      </Routes>

    </>
  )
}

export default App
