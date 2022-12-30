import React from 'react'
import slide1 from '../images/hiking.jpg'
import '../assets/style.css'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div
      id='carouselExampleDark'
      className='carousel carousel-dark slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src={slide1}
            className='d-block w-100 '
            alt='...'
            style={{ height: '700px' }}
          />
          <div
            className='carousel-caption d-none d-sm-block border fw-bold text-white bg-dark'
            onClick={() => navigate('/signup')}
          >
            <h2>JOIN US</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
