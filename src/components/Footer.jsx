import React from 'react'
import img2 from '../Assets/Group 19.svg'
import img3 from '../Assets/Group 20.svg'
import img4 from '../Assets/Group 21.svg'
import img5 from '../Assets/Group 22.svg'
import img6 from '../Assets/Group 23.svg'
import img7 from '../Assets/image3.svg'
import img8 from '../Assets/National-Informatics-Centre-in-India-Compromised-450279-2 3.svg'
const Footer = () => {
    return (
        <div className='w-100 d-flex flex-column pt-4 bottom' style={{ borderTop: '1px solid black' }}>
            <div className="d-flex w-100 justify-content-between px-3" style={{ height: '6rem' }}>
                <img src={img2} alt="ministry" style={{ height: '100%' }} />
                <img src={img6} alt="ministry" style={{ height: '100%' }} />
                <img src={img5} alt="ministry" style={{ height: '100%' }} />
                <img src={img4} alt="ministry" style={{ height: '100%' }} />
                <img src={img3} alt="ministry" style={{ height: '100%' }} />
            </div>
            <div className='d-flex justify-content-center align-items-center w-100' style={{ background: "black", color: 'white', height: "7rem" }}>
                <div className='p-2' style={{ background: 'white', borderRadius: '1rem', height: '4.5rem' }}>
                    <img src={img7} alt="ministry" style={{ height: '100%' }} />
                </div>

                <img src={img8} alt="ministry" className='ms-4' style={{ height: '2.25rem' }} />
                <div className='line'></div>
                <div className='footer-data'>
                    Website is Owned and Content Managed by Ministry of Law & Justice | Government of India <br/>
                    Designed, Developed and Hosted by &nbsp; <span style={{ color: '#839FFF', textDecoration: 'underline', cursor: 'pointer'}}>National Informatics Centre( NIC )</span><br/>
                    Last Updated: 18 Nov 2022
                </div>
            </div>
        </div>
    )
}

export default Footer