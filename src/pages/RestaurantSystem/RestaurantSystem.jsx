import { FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '@components/Button'
import Paragraph from '@components/Paragraph'
import Footer from '@components/Footer'
import Title from '@components/Title'
import CustomLink from '@components/CustomLink'

import './RestaurantSystem.css'

const RestaurantSystem = () => {

  const handleGitHubClick = () => {
    window.open('https://github.com/SergioAle210', '_blank')
  }

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sergioalejandro210@gmail.com', '_blank')
  }

  const handleHomeClick = () => {
    window.location.href = '/';
  }

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
    <div className='cuadro'>
      <div className='botones'>
        <div className='left'>
          <Button text="" Icon={FaHome} onClick={handleHomeClick} />
        </div>
        <div className='right'>
          <Button text="" Icon={FaGithub} onClick={handleGitHubClick} />
          <Button text="" Icon={FaEnvelope} onClick={handleEmailClick} />
        </div>
      </div>
      <Title text={'Restaurant System'} Class={'welcome'}/>
      <div className='content'>
        <div className='paragraph-container'>
          <Paragraph text={'The project involves developing an application to manage and analyze restaurant operations. The restaurant has one physical location, divided into areas with various table configurations, some of which can be combined. The system includes opening and closing table accounts, adding orders, printing receipts, and handling payments, including tips and multiple payment methods. It also involves user sign-in/log-in with encrypted passwords, order input by waiters, kitchen and bar displays showing orders in FIFO order, and generating printable reports for orders and invoices. Additionally, it supports customer surveys and complaint management. Reports include most ordered dishes, peak order times, average dining times by group size, and complaints grouped by person or dish. '}           />
          <CustomLink text={'View Repository'} href={'https://github.com/SergioAle210/Proyecto-2-DB'}/>
        </div>
        <div className='project'>
          <Title text={'Projects'} Class={'projects'}/>
          <ul>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/restaurantsystem">Restaurant System</Link></li>
            <li><Link to="/basketballblog">Basketball Blog</Link></li>
            <li><Link to="/froggame">Frog Game</Link></li>
            <li><Link to="/walmartapp">Walmart App</Link></li>
          </ul>
        </div>        
      </div>
      <Footer />
    </div>
  )
}

export default RestaurantSystem

