import React from 'react'
import '../Header/Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Isha Agrawal</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" style={{height:"290px" , width:"310px"}}/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header
