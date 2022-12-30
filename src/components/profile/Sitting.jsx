import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Sitting = ({ heading, success }) => {
  const { register, handleSubmit } = useForm()
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('response')
    const val = JSON.parse(userData)
    setUser(val)
  }, [])

  // console.log('profileData--->', user)

  const onSubmit = async data => {
   
    const formData = {
      userID: user?.user?._id,
      profileImg: data.file[0].name
    }
    console.log('formData', formData)
    const res = await axios.post(
      'https://etracker.onrender.com/api/user/add/image',
      formData
    )
    if (res) {
      // console.log('res------->', res.data)
      alert(JSON.stringify(`${res.msg}, status: ${res.status}`))
    }
    alert(JSON.stringify(`${res.msg}, status: ${res.status}`))
  }



  var img = `https://etracker.onrender.com/${user?.user?.profileImg}`

  const logout = e => {
    e.preventDefault()

    window.localStorage.clear()
    window.location.reload(false)
  }
  return (
    <div className='pb-5 border' style={{ border: '2px solid grey' }}>
      <section className='text-center bygga-parent equip-parent py-3'>
        {heading !== false && (
          <section className='container text-center mt-4'>
            <span
              className=' h2 bold'
              style={{ borderBottom: '3px solid #dc3545', color: 'black' }}
            >
              {success ? success : 'PROFILE SITTING PAGE'}
            </span>
            <div className={success ? 'my-4' : 'mx-auto my-2 service-text'}>
              {!success && (
                <span className='text-center mt-2 mb-4'>
                  {user?.user?.name}
                </span>
              )}
            </div>
          </section>
        )}
      </section>
      <div
        className='container border mb-3'
        style={{ width: '250px', height: '200px' }}
      >
        <img
          src={img}
          alt={user?.user?.name}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <form
        className='container mb-5 d-flex justify-content-around'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class='form-group'>
          <div class='input-group mb-3 align-item-center'>
            <div class='custom-file align-item-center'>
              <input
                type='file'
                class='custom-file-input'
                id='inputGroupFile01'
                name='imageUrl'
                {...register('file')}
                // onChange={onChanges}
                // value={val.imageUrl}
              />
             
              {/* <label class="custom-file-label" for="inputGroupFile01">Choose file</label> */}
            </div>
          </div>
        </div>

        <div class='modal-footer pb-3'>
          {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
          <button
            className='btn bg-primary text-white mt-2 mb-2 bold'
            type='submit'
            value='submit'
           
          >
            Save Profile
          </button>
        </div>
      </form>

      <p className='forgot-password text-right'>
        User Name: <a href='#'>{user?.user?.name}</a>
      </p>
      <p className='forgot-password text-right'>
        User Email: <a href='#'>{user?.user?.email}</a>
      </p>
      <p className='forgot-password text-right'>
        User phone #: <a href='#'>{user?.user?.phone}</a>
      </p>
      <p className='forgot-password text-right'>
        if you want to Logout your account, kindly click on it.
        <a onClick={e => logout(e)}>
          <h2 className='forgot-password text-primary pt-3 fw-bold'>
            LOGOUT!{' '}
          </h2>
        </a>
      </p>
    </div>
  )
}

export default Sitting
