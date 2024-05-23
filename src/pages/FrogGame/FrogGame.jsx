import { FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '@components/Button'
import Paragraph from '@components/Paragraph'
import Footer from '@components/Footer'
import Title from '@components/Title'
import CustomLink from '@components/CustomLink'

import './FrogGame.css'

const FrogGame = () => {

  const handleGitHubClick = () => {
    window.open('https://github.com/SergioAle210', '_blank')
  }

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sergioalejandro210@gmail.com', '_blank')
  }

  const handleHomeClick = () => {
    window.location.href = '/';
  }

  return (
    <div className='cuadro'>
      <div className='botones'>
        <Button text="" Icon={FaHome} onClick={handleHomeClick} />
        <Button text="" Icon={FaGithub} onClick={handleGitHubClick} />
        <Button text="" Icon={FaEnvelope} onClick={handleEmailClick} />
      </div>
      <Title text={'Frog Game'} Class={'welcome'}/>
      <div className='content'>
        <div className='paragraph-container'>
          <Paragraph text={'Design a basic x86-32 assembly language program to implement a Frog Leap game, where 3 frogs from each side swap positions on a 7-position board. The project, developed in groups of 4, requires defensive programming, custom subroutines, and an ASCII-based GUI. The game must include a menu to start, view instructions, and exit. Frogs cannot move backward, can only move one space at a time, can jump over a frog of a different species if theres an empty space, and frogs of the same species cannot jump over each other.'}
          />
          <CustomLink text={'View Repository'} href={'https://github.com/SergioAle210/Proyecto4_Assembly'}/>
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

export default FrogGame