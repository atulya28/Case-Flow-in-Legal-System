import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import img2 from '../Assets/Component 3.svg'
import { useState } from 'react'
const ForgetPassword = () => {
  const naviagte = useNavigate()
  const [loginstate, setLoginstate] = useState(false)

  return (
    <div className='d-flex w-100 flex-column' style={{height: ''}}>
        <Header/>
        <div className='w-100 py-4 d-flex pe-0' style={{height: "55vh", paddingLeft: '6rem'}}>
           {!loginstate ? <div className="d-flex flex-column w-50">
          <div className="d-flex flex-column w-100">
            <div className='header-font2 mb-4' style={{ textAlign: 'left', fontWeight: '700',fontSize: '20px' }}>Password Recovery</div>
            <label className='input-font mb-2' style={{ textAlign: 'left' }}>License ID</label>
            <input className='input-inp mb-2' style={{border: 'none', width: '14rem'}} />
          </div>
          <button className='login-btn2' onClick={() => setLoginstate(true)}>Submit</button>
          <button className='login-btn2' onClick={() => naviagte("/")}>Login</button>
        </div> : <div className="d-flex flex-column w-50"> 
        <div className='reset'> Password recovery Link has been send to your registered mobile no. <br/>
            in case of you didn’t recieve link,<br />
          Contact Admin office of your near-by Court </div>
            <div className="reset mt-4">Click here to, <span style={{ cursor: 'pointer', color: 'black' }} onClick={() => naviagte("/")}>Login</span></div>
          </div>}
            <div className="d-flex w-50 justify-content-center align-items-center">
              <img src={img2} alt="supreme court" className='w-100' style={{height: '88%'}}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ForgetPassword