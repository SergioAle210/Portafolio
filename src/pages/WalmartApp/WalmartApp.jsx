import { FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '@components/Button'
import Paragraph from '@components/Paragraph'
import Footer from '@components/Footer'
import Title from '@components/Title'
import CustomLink from '@components/CustomLink'

import './WalmartApp.css'

const WalmartApp = () => {

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
      <Title text={'Walmart App'} Class={'welcome'}/>
      <div className='content'>
        <div className='paragraph-container'>
          <Paragraph text={'The project involved developing an Android mobile application using Kotlin, aimed at creating a shopping list for the next visit to a Walmart store. The app, built in Android Studio, features a user-friendly interface using Jetpack Compose and Jetpack Navigation for UI and navigation. It integrates the Walmart API to fetch product data and follows the MVVM architecture for structured code. The app is designed to run on smartphones, providing a seamless user experience, and adheres to best practices for organizing files and using resources for strings, images, and dimensions.'} 
          />
          <CustomLink text={'View Repository'} href={'https://github.com/Andyfer004/Proyecto_plataformas_moviles'}/>
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

export default WalmartApp

