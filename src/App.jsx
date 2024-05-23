import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Home from '@pages/Home/Home'
import Calculator from '@pages/Calculator/Calculator'
import RestaurantSystem from '@pages/RestaurantSystem/RestaurantSystem'
import BasketballBlog from '@pages/BasketballBlog/BasketballBlog'
import FrogGame from '@pages/FrogGame/FrogGame'
import WalmartApp from '@pages/WalmartApp/WalmartApp'

import './App.css'

function App() {

  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.classList.add('cursor')
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)'
      cursor.style.boxShadow = '0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6)'
    }

    const handleMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      cursor.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)'
    }

    const handleHover = () => {
      cursor.classList.add('cursor-hover')
    }

    const handleOut = () => {
      cursor.classList.remove('cursor-hover')
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    document.querySelectorAll('a, button').forEach(element => {
      element.addEventListener('mouseover', handleHover)
      element.addEventListener('mouseout', handleOut)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)

      document.querySelectorAll('a, button').forEach(element => {
        element.removeEventListener('mouseover', handleHover)
        element.removeEventListener('mouseout', handleOut)
      })

      document.body.removeChild(cursor)
    }
  }, [])

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
