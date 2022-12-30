import React from 'react'
import '../assets/style.css'
import slide1 from '../images/hiking.jpg'
const TeamMates = ({ heading, success }) => {
  return (
    <div>
      <section className='text-center bygga-parent equip-parent py-3'>
        {heading !== false && (
          <section className='container text-center mt-4'>
            <span
              className=' h2 bold'
              style={{ borderBottom: '3px solid #dc3545', color: 'black' }}
            >
              {success ? success : 'TEAM-MATES'}
            </span>
            <div className={success ? 'my-4' : 'mx-auto my-2 service-text'}>
              {!success && (
                <span className='text-center mt-2 mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem sequi
                </span>
              )}
            </div>
          </section>
        )}
      </section>
      <section id='team' className='team '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='member d-flex align-items-start'>
                <div className='pic'>
                  <img src={slide1} className='img-fluid' alt='' />
                </div>
                <div className='member-info'>
                  <h4>Rana Subhan</h4>
                  <div className='social'>
                    <a href=''>
                      <i className='ri-twitter-fill'></i>
                    </a>
                    <a href=''>
                      <i className='ri-facebook-fill'></i>
                    </a>
                    <a href=''>
                      <i className='ri-instagram-fill'></i>
                    </a>
                    <a href=''>
                      {' '}
                      <i className='ri-linkedin-box-fill'></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 mt-4 mt-lg-0'>
              <div className='member d-flex align-items-start'>
                <div className='pic'>
                  <img src={slide1} className='img-fluid' alt='' />
                </div>
                <div className='member-info'>
                  <h4>Usama Ahmed</h4>
                  <div className='social'>
                    <a href=''>
                      <i className='ri-twitter-fill'></i>
                    </a>
                    <a href=''>
                      <i className='ri-facebook-fill'></i>
                    </a>
                    <a href=''>
                      <i className='ri-instagram-fill'></i>
                    </a>
                    <a href=''>
                      {' '}
                      <i className='ri-linkedin-box-fill'></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mt-4 mt-lg-0'>
              <div className='member d-flex align-items-start'>
                <div className='pic'>
                  <img src={slide1} className='img-fluid' alt='' />
                </div>
                <div className='member-info'>
                  <h4>Khush Bakht</h4>
                  <div className='social'>
                    <a href=''>
                      <i className='ri-twitter-fill'></i>
                    </a>
                    <a href=''>
                      <i className='ri-facebook-fill'></i>
                    </a>
                    <a href=''>
                      <i className='ri-instagram-fill'></i>
                    </a>
                    <a href=''>
                      {' '}
                      <i className='ri-linkedin-box-fill'></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamMates
