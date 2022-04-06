import React from 'react'
import './Header.css'
function Header() {
    return (
        <div>
            <div className='hero'>

                <div className="content">
                    <div className="header-text text-center">
                        <h2>BOOK WITH US AND BOOK IT OUT OF HERE</h2>
                    </div>
                    <p className="text-center text-white">A Signature Of Excellence and A New Pulse Of Dream</p>

                    <div className='search'>
                        <div className='container'>
                            <label htmlFor=''>Where you want to go</label>
                            <input type="text" placeholder="Search your location" />

                        </div>
                        <div className='container'>
                            <label htmlFor=''>Check-in</label>
                            <input type="date" />
                        </div>
                        <div className='container'>
                            <label htmlFor=''>Check-out</label>
                            <input type="date" />
                        </div>
                    </div>
                    <a href='/login'>
                        <button type="submit" class="banner-btn">Book Now</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header