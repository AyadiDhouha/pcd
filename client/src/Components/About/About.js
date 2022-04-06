import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className="about-section">
      <div className='about-header text-center'>
        <h3>ABOUT US</h3>
        <h2>A SIGNATURE OF EXCELLENCE</h2>
      </div>
      <div className='about-us'>
        <div className='about'>
          <div className='about-icon'>
            <i className="fas fa-heart"></i>
          </div>
          <h4>HAPPY CLIENTS</h4>
          <p>Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.</p>
          <button type='submit' className='about-btn'>VIEW MORE</button>
        </div>
        <div className='about'>
          <div className='about-icon'>
            <i class="fas fa-plane"></i>      </div>
          <h4>AMAZING TOUR</h4>
          <p>Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.</p>
          <button type='submit' className='about-btn'>VIEW MORE</button>
        </div>
        <div className='about'>
          <div className='about-icon'>
          <i class="fas fa-dollar-sign"></i>
                    </div>
          <h4> BEST PRICES</h4>
          <p>Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.</p>
          <button type='submit' className='about-btn'>VIEW MORE</button>
        </div>
        <div className='about'>
          <div className='about-icon'>
            <i class="far fa-credit-card"></i>
          </div>
          <h4>FLEXIBLE PAYMENT</h4>
          <p>Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.</p>
          <button type='submit' className='about-btn'>VIEW MORE</button>
        </div>
      </div>



    </div>
  )
}
export default About;