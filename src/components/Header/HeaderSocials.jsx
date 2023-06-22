import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/isha-agrawal13/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Ishaagr13" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/IshaAgr56779959" target='_blank'><FaTwitterSquare/></a>
      
    </div>
  )
}

export default HeaderSocials
