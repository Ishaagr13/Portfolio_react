import React from 'react'
import '../Footer/Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Isha Agrawal</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="http://facebook.com"><BsFacebook/></a>
        <a href="http://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com/IshaAgr56779959"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
