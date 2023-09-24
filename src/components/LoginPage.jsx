import React from 'react'
import img1 from '../Assets/Component 1.svg'
import img2 from '../Assets/image3.svg'
import img3 from '../Assets/image4.svg'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const naviagte = useNavigate()
  return (
    <div className='d-flex w-100 h-100'>
        <div className="w-60 " style={{width: '54.5%'}}> 
        <img src={img1} alt="high court" style={{height: '100vh', width: '100%'}} />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '45.5%'}}>
        <div className="d-flex w-100 justify-content-center" style={{gap: '3rem'}}>
                  <img src={img2} alt="ministry" style={{ height: '10rem', width: '10rem' }} />
                  <img src={img3} alt="sih" style={{ height: '10rem', width: '10rem' }} />
            </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5" style={{width: '43%', gap: '1rem'}}>
              <div className="d-flex flex-column w-100">
                <label className='input-font' style={{textAlign: 'left'}}>License ID</label>
                <input className='input-inp' />
              </div>
              <div className="d-flex flex-column w-100">
            <label className='input-font' style={{ textAlign: 'left' }}>Password</label>
                <input className='input-inp' />
              </div>
          <button className='login-btn' onClick={() => naviagte("/home")}>Login</button>
          <div className='login-forget' onClick={() => naviagte("/forgot-password")}>Forgot Password</div>
            </div>
          </div>
    </div>
  )
}

export default LoginPage