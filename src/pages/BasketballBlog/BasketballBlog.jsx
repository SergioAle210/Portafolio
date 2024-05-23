import { FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '@components/Button'
import Paragraph from '@components/Paragraph'
import Footer from '@components/Footer'
import Title from '@components/Title'
import CustomLink from '@components/CustomLink'

import './BasketballBlog.css'

const BasketballBlog = () => {

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

    const handleLinkHover = () => {
      cursor.classList.add('cursor-link-hover')
    }

    const handleLinkOut = () => {
      cursor.classList.remove('cursor-link-hover')
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseover', handleLinkHover)
      link.addEventListener('mouseout', handleLinkOut)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)

      document.querySelectorAll('a, button').forEach(link => {
        link.removeEventListener('mouseover', handleLinkHover)
        link.removeEventListener('mouseout', handleLinkOut)
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
      <Title text={'Basketball Blog'} Class={'welcome'}/>
      <div className='content'>
        <div className='paragraph-container'>
          <Paragraph text={'Create a basketball blog using React and Vite, featuring both frontend and basic backend development. The blog should allow users to view posts with titles, publication dates, and content, while being responsive across devices. An admin area at /admin, protected by a login system, should enable creating, viewing, updating, and deleting posts.'}
          />
          <CustomLink text={'View Repository'} href={'https://github.com/SergioAle210/Proyecto1-Web'}/>
          <CustomLink text={'View Blog'} href={'https://blogbasketballsergio.netlify.app/#/'}/>
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

export default BasketballBlog