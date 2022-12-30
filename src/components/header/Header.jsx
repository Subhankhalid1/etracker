import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../images/etracking.jpg'
// import "./Navbar.css";
const Navbars = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  useEffect(() => {
    const userData = localStorage.getItem('response')
    const val = JSON.parse(userData)
    setUser(val)
  }, [])
  // console.log("user:------->",user?.user?._id)
  return (
    <Navbar bg='white' expand='lg' className='col-11 p-2 d-flex m-auto'>
      <Container fluid>
        <div className='col-2  d-flex align-items-center justify-content-center'>
          {/* <h3   classNameName="text-dark"  >E-TRACKER</h3> */}
          <img
            src='https://www.etracker.com/wp-content/uploads/2020/04/Logo_etracker_1-0-RGB-e1621337814937.png'
            alt='E-TRACKER'
            className='logo'
            style={{ width: '110px', height: '40px' }}
            onClick={() => navigate('/activitylog')}
          />
        </div>

        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='nav navbar col-8 me-auto my-2 my-lg-0 d-flex m-auto'
            style={{ maxHeight: '100%', color: 'red' }}
            // navbarScroll
          >
            <div
              className='col-12'
              style={{
                borderRight: '3px solid black',
                borderLeft: '3px solid black'
              }}
            >
              <div className='row p-3 d-flex justify-content-between'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search all kind of activities of any user by its name.'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-dark' type='button'>
                      <i className='fa fa-search'></i>
                    </button>
                  </div>
                </div>
                <div className='row '>
                  <div className='navbar-nav '>
                    <a
                      className='nav-item nav-link m-2 bold'
                      onClick={() => navigate('/')}
                    >
                      Home
                    </a>

                    {user?.user?._id ? (
                      <a
                        className='nav-item nav-link m-2 bold'
                        onClick={() => navigate('/activitylog')}
                      >
                        Activity Log
                      </a>
                    ) : (
                      ''
                    )}
                    <a
                      className='nav-item nav-link m-2 bold'
                      onClick={() => navigate('/')}
                    >
                      Contact us
                    </a>
                    <a
                      className='nav-item nav-link m-2 bold'
                      onClick={() => navigate('/')}
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Nav>

          <div className='leftDiv w-100 d-flex m-auto align-items-around'>
            <div
              className=' d-flex  header-icon w-50 fw-bold '
              style={{ color: 'black' }}
            >
              <a className='nav-item nav-link m-1 bold  d-flex '>
                <h6> All Activities</h6>
              </a>
            </div>
            <div className='nav-item d-flex m-auto login dropdown bold  w-25'>
              {user?.user?._id ? (
                <a
                  className='nav-item nav-link m-1 bold  d-flex '
                  onClick={() => navigate('/profile/sitting')}
                >
                  <h6>{user?.user?.name}</h6>
                </a>
              ) : (
                <a
                  className='nav-item nav-link m-1 bold  d-flex '
                  onClick={() => navigate('/login')}
                >
                  <h6>LOG-IN</h6>
                </a>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars
