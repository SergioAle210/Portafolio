import { FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '@components/Button'
import Paragraph from '@components/Paragraph'
import Footer from '@components/Footer'
import Title from '@components/Title'

import './Home.css'

const Home = () => {

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
      <Title text={'Welcome.'} Class={'welcome'}/>
      <div className='content'>
        <div className='paragraph-container'>
          <Paragraph text={'Hi, my name is Sergio, I am a developer with experience in a wide range of programming languages and technologies, including HTML, Python, Java, CSS, Kotlin, and Assembly X86. I have experience working in Linux and Mac environments and am currently expanding my skills in SQL, databases, and the full stack of web development with HTML, CSS, and JavaScript.'} 
          />
          <Paragraph text={'I am a quick learner and have a strong work ethic. I am passionate about technology and am always looking for ways to improve my skills and learn new things. I am currently looking for opportunities to work in a challenging and dynamic environment where I can continue to grow as a developer.'}
          />  
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

export default Home

