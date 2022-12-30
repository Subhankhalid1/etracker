import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Signup = ({ heading, success }) => {
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const [formVal, setFormVal] = useState({
    name: '',
    password: '',
    phone: '',
    email: ''
  })

  const handleInputChange = e => {
    console.log(e.target.value)
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitted(true)
    if (formVal.name && formVal.password && formVal.email && formVal.phone) {
      setValid(true)

      const postData = {
        name: formVal.name,
        password: formVal.password,
        email: formVal.email,
        phone: formVal.phone,
        expiresIn: 60000
      }
      // console.log('formValue===>12', formVal)
      try {
        setLoading(true)
        const res = await axios.post(
          'https://etracker.onrender.com/api/user/register',
          postData
        )
        if (res) {
          // console.log('res------->', res.data)
          //   localStorage.setItem("response", JSON.stringify(res.data));
          //   navigate("/login");
          toast.success('Congrts,You Are Registered Successfully.')
          refreshPage()
          setFormVal({
            name: '',
            password: '',
            email: '',
            phone: ''
          })

          setLoading(false)
        }
      } catch (err) {
        toast.error('Sorry, try another time with valid info.')
        console.log(err)
      }
    }
  }

  function refreshPage () {
    navigate('/login')
    // window.location.reload(false);
  }

  return (
    <div className='container w-50 pb-5'>
      <ToastContainer />
      <section className='text-center bygga-parent equip-parent py-3'>
        {heading !== false && (
          <section className='container text-center mt-4'>
            <span
              className=' h2 bold'
              style={{ borderBottom: '3px solid #dc3545', color: 'black' }}
            >
              {success ? success : 'SIGN UP'}
            </span>
            <div className={success ? 'my-4' : 'mx-auto my-2 service-text'}>
              {!success && (
                <span className='text-center mt-2 mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              )}
            </div>
          </section>
        )}
      </section>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='mb-3'>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            value={formVal.email}
            name='email'
            onChange={handleInputChange}
          />
        </div>
        {submitted && !formVal.email ? (
          <span id='user-name-error' className='text-danger'>
            Please enter a email.
          </span>
        ) : (
          ''
        )}
        <div className='mb-3'>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            value={formVal.password}
            name='password'
            onChange={handleInputChange}
          />
        </div>
        {submitted && !formVal.password ? (
          <span id='user-name-error ' className='text-danger'>
            Please enter a password.
          </span>
        ) : (
          ''
        )}
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter an user name'
            value={formVal.name}
            name='name'
            onChange={handleInputChange}
          />
        </div>
        {submitted && !formVal.name ? (
          <span id='user-name-error ' className='text-danger'>
            Please enter a user name.
          </span>
        ) : (
          ''
        )}
        <div className='mb-3'>
          <input
            type='phone'
            className='form-control'
            placeholder='Enter an user phone'
            value={formVal.phone}
            name='phone'
            onChange={handleInputChange}
          />
        </div>
        {submitted && !formVal.phone ? (
          <span id='user-name-error ' className='text-danger'>
            Please enter an user phone number.
          </span>
        ) : (
          ''
        )}
        <div className='mb-3'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label
              className='custom-control-label fw-bold'
              htmlFor='customCheck1'
            >
              Remember me
            </label>
          </div>
        </div>
        <div className='d-grid'>
          <button
            className='btn btn-primary mt-4 mb-4 p-3 bold'
            type='submit'
            value='submit'
          >
            {loading ? (
              <>
                <span
                  className='spinner-border spinner-border-sm'
                  role='status'
                  aria-hidden='true'
                ></span>
                <span class='sr-only m-3'>Loading...</span>
              </>
            ) : (
              'REGISTER NOW!'
            )}
          </button>
        </div>
        <p className='forgot-password text-right'>
          Go To The <a onClick={() => navigate('/login')}>Login Page</a>
        </p>
        <p className='forgot-password text-right'>
          if you haven't account, kindly Register to yourself.
          <a onClick={() => navigate('/login')}>
            <h3 className='forgot-password text-right fw-bold'>LOGIN HERE! </h3>
          </a>
        </p>
      </form>
    </div>
  )
}

export default Signup
