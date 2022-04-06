import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import Services from '../../Components/Service/Services'
import Subscribe from '../../Components/Subscribe/Subscribe'

const Home = () => {
    let [screen, setScreen] = useState()
    const [y, setY] = useState('')
    let [scale, setScale] = useState()
    let [open, setOpen] = useState(false)
    window.onresize = function () {
        if (window.innerWidth > 1200) {
            setScreen(true)
        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }
    }

    useEffect(() => {


        if (window.innerWidth > 1200) {
            setScreen(true)

        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }

    })

    
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 0) {
            setY('rgba(0,0,0,0)')
        }
        else {
            setY('rgba(0,0,0,0)')
        }

    })
    return (
    
        <div className='home'>
            <Fragment>
         <Navbar />
         <div id="header">
          <Header/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="subscribe">
        <Subscribe />
        </div>
        <div id="service">
          <Services/>
        </div>
        <div id="footer">
          <Footer/>
        </div>
        </Fragment>

        </div>
    )
}

export default Home