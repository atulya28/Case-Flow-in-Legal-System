import React from 'react'
import img2 from '../Assets/image3.svg'
import img3 from '../Assets/image4.svg'
const Header = () => {
  return (
    <div className='w-100 d-flex align-items-center justify-content-between p-3 py-1 top' style={{borderBottom: '1px solid black'}}>
        <div className="d-flex align-items-center">
              <img src={img2} alt="ministry" style={{ height: '4.5rem', width: '4.5rem' }} />
              <div className="d-flex flex-column ms-2">
                  <div className='header-font1' style={{ textAlign: 'left' }}>विधि और  न्याय मंत्रालय</div>
                  <div className='header-font2' style={{ textAlign: 'left' }}>MINISTRY OF LAW <br/> AND JUSTICE</div>
              </div>
        </div>
        <div className="d-flex align-items-center">
              <div className='header-font2 me-2' style={{ textAlign: 'right' }}>SMART <br /> INDIA <br /> HACKATHON</div>
              <img src={img3} alt="sih" style={{ height: '4.5rem', width: '4.5rem' }} />
              
        </div>
    </div>
  )
}

export default Header 



