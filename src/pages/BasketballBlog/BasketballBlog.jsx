import { FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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