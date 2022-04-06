import React from 'react'
import './Subscribe.css'
function Subscribe() {
  return (
    <div className='subscribe-section'>
      <div className='subscribe text'>
        <h3>SUBSCRIBE</h3>
        <h2>LET'S SUBSCRIBE</h2>
      </div>
      <div className='subscribe-form'>
        <input type="email" name="email" placeholder="enter your email"/>
        <button type="submit" className="subscribe-btn">SUBSCRIBE</button>

      </div>
    </div>
  )
}

export default Subscribe