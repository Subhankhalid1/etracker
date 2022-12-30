import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Login = ({ heading, success }) => {
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const [formVal, setFormVal] = useState({
    email: '',
    password: ''
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
    if (formVal.email && formVal.password) {
      setValid(true)

      const postData = {
        email: formVal.email,
        password: formVal.password,
        expiresIn: 60000
      }
      // console.log('formValue===>12', formVal)
      try {
        setLoading(true)
        const res = await axios.post(
          'https://etracker.onrender.com/api/user/login',
          postData
        )
        if (res) {
          // console.log('login res------->', res.data)
          localStorage.setItem('response', JSON.stringify(res.data))
          toast.success('Login now.')

          setFormVal({
            email: '',
            password: ''
          })
          navigate('/activitylog')
          refreshPage()
          setLoading(false)
        }
      } catch (err) {
        toast.error('Sorry, try another time with valid info.')
        console.log(err)
      }
    }
  }

  function refreshPage () {
    //navigate("/activitylog")
    window.location.reload(false)
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
              {success ? success : 'LOGIN'}
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
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
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
              'SUBMIT REQUEST'
            )}
          </button>
        </div>
        <p className='forgot-password text-right'>
          Forgot <a href='#'>password?</a>
        </p>
        <p className='forgot-password text-right'>
          if you haven't account, kindly Register to yourself.
          <a onClick={() => navigate('/signup')}>
            <h3 className='forgot-password text-right fw-bold'>
              SIGN UP NOW!{' '}
            </h3>
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
