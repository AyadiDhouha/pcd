import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { Link as LinkS } from 'react-scroll'
import './Navbar.css'
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }
  const [scrollNav, SetScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true)
    } else {
      SetScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>

      <div className={scrollNav ? 'navbar scrollNav' : 'navbar'} scrollNav={scrollNav} >
        <div className='navbarContainer'>
          <Link to='/' className='navlogo' onClick={toggleHome}>
            LET'S TRAVEL
          </Link>
          <div className='mobileIcon' onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>

          </div>
          <div className={clicked ? "navMenu" : "navMenu close"} >
            <div className='navItem'>
              <LinkS className='navLinks' to='home'>Home</LinkS>
            </div>
            <div className='navItem'>
              <LinkS className='navLinks' to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About</LinkS>
            </div>
            <div className='navItem'>
              <LinkS className='navLinks' to='subscribe'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Subscribe</LinkS>
            </div>
            <div className='navItem'>
              <LinkS className='navLinks' to='service'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Service</LinkS>
            </div>
            <div className='navItem'>
              <Link className='navLinks' to='/register'
              >Sign Up</Link>
            </div>
          </div>
          <div className='navBtn'>
            <a href='/login'>
              <button type="submit" className="navBtnLink">Login</button>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar