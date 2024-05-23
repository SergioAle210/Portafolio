import { FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '@components/Button'
import Paragraph from '@components/Paragraph'
import Footer from '@components/Footer'
import Title from '@components/Title'
import CustomLink from '@components/CustomLink'

import './Calculator.css'

const Calculator = () => {

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
      <Title text={'Calculator'} Class={'welcome'}/>
      <div className='content'>
        <div className='paragraph-container'>
          <Paragraph text={'Create a simple calculator with a display and numeric keypad using HTML buttons. The calculator must support addition, subtraction, multiplication, and equality, with input limited to 9 digits. Display "ERROR" for negative numbers or results exceeding 999999999. Publish the calculator and provide links to the deployed app and source code. Implement tests and ensure they run with "npm test".'}
          />
          <CustomLink text={'View Repository'} href={'https://github.com/SergioAle210/Calculadora'}/>
          <CustomLink text={'View Calculator'} href={'https://calculadorasergio.netlify.app/'}/>
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

export default Calculator

