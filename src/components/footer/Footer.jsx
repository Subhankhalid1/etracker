import React from 'react'
import '../assets/style.css'
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 footer-links'>
              <h3>etracker</h3>
              <p>
                etracker let you manage and track workout. Easily <br />
                record your training logs, start the rest time, track <br />
                your exercise, and analyze your data.
              </p>
            </div>

            <div className='col-lg-4 col-md-6 footer-links'>
              <h3>Quick Links</h3>
              <div className='social-links mt-3'>
                <a href='#' className='twitter'>
                  <i className='bx bxl-twitter'></i>
                </a>
                <a href='#' className='facebook'>
                  <i className='bx bxl-facebook'></i>
                </a>
                <a href='#' className='instagram'>
                  <i className='bx bxl-instagram'></i>
                </a>
                <a href='#' className='google-plus'>
                  <i className='bx bxl-skype'></i>
                </a>
                <a href='#' className='linkedin'>
                  <i className='bx bxl-linkedin'></i>
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='footer-info'>
                <h3>Get In Touch</h3>
                <p>
                  Address: 1st floor 22, <br />
                  Liberty Chowk,Lahore
                  <br />
                  <br />
                  <strong>Phone:</strong> +92 310 1234567
                  <br />
                  <strong>Email:</strong> etracker@example.com
                  <br />
                </p>
                <div className='social-links mt-3'>
                  <a href='#' className='twitter'>
                    <i className='bx bxl-twitter'></i>
                  </a>
                  <a href='#' className='facebook'>
                    <i className='bx bxl-facebook'></i>
                  </a>
                  <a href='#' className='instagram'>
                    <i className='bx bxl-instagram'></i>
                  </a>
                  <a href='#' className='google-plus'>
                    <i className='bx bxl-skype'></i>
                  </a>
                  <a href='#' className='linkedin'>
                    <i className='bx bxl-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
