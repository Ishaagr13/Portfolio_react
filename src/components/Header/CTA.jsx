import React from 'react'
import Cv from '../../assets/Cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {Cv} download className='btn'>Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Lets Talk</a>
      
    </div>
  )
}

export default CTA
