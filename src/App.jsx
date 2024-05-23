import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@pages/Home/Home'
import Calculator from '@pages/Calculator/Calculator'
import RestaurantSystem from '@pages/RestaurantSystem/RestaurantSystem'
import BasketballBlog from '@pages/BasketballBlog/BasketballBlog'
import FrogGame from '@pages/FrogGame/FrogGame'
import WalmartApp from '@pages/WalmartApp/WalmartApp'

import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/restaurantsystem" element={<RestaurantSystem />} />
        <Route path="/basketballblog" element={<BasketballBlog />} />
        <Route path="/froggame" element={<FrogGame />} />
        <Route path="/walmartapp" element={<WalmartApp />} />
      </Routes>
    </Router>
  )
}

export default App
