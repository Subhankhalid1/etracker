import React, { useEffect, useState } from 'react'
import './App.css'
import CreateActivity from './components/activity/CreateActivity'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LandingPage from './components/landingPage/index'
import Login from './components/profile/Login'
import Signup from './components/profile/Signup'
import Sitting from './components/profile/Sitting'

function App () {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const userData = localStorage.getItem('response')
    const val = JSON.parse(userData)
    setUser(val)
  }, [])
  // console.log("user:------->",user?.token)

  return (
    <div className='App'>
      {/* <CreateActivity /> */}
      <Router>
        <Header />
        <Routes>
          {user?.token ? (
            <Route exact path='/activitylog' element={<CreateActivity />} />
          ) : (
            <Route path='*' element={<Navigate to='/' />} />
          )}
          {user?.token ? (
            <Route exact path='/profile/sitting' element={<Sitting />} />
          ) : (
            <Route path='*' element={<Navigate to='/' />} />
          )}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
