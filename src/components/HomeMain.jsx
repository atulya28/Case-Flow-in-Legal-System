import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import sc from '../Assets/supreme court.svg'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const HomeMain = () => {
    const [caseData, setCaseData] = useState([])
    const navigate = useNavigate()
    const fetchCases = async () => {
        await axios.get(`https://law-manager-backend.onrender.com/api/case/fetchallcases?page=1`).then((res) => {
            // console.log(res.data)
            setCaseData(res.data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        fetchCases()
    }, [])
    return (
        <div>
            <Header />
            <Navbar />
            <div className=" d-flex flex-column w-100 ">
                <img src={sc} alt="Supreme Court" style={{ height: '74.5vh', width: '100%' }} />
                <div className="d-flex p-5">
                    <div className="d-flex flex-column box p-3 align-items-center">
                        <div className='header' style={{ textAlign: 'center' }}>Priority Case’s</div>
                        {caseData && caseData?.length > 0 && caseData?.slice(0, 6)?.map((item) => {
                            return (<div className="d-flex card-main p-2 mt-2 mx-4" >
                                <div className='d-flex align-items-center justify-content-center' style={{ width: '33.3%', textTransform: 'lowercase' }}>
                                    <div>
                                    <strong className='me-2'>Case:- </strong >
                                    <span className='me-2'>{item?.caseno?.slice(0, 10) + "..."}</span>
                                    </div>
                                    <span className='mx-2'>|</span>
                                    </div>
                                <div className='d-flex align-items-center justify-content-center' style={{ width: '38.3%', textTransform: 'lowercase' }}>
                                    <div>
                                    <strong className='me-2'>Party Name:- </strong >
                                    <span className='me-2'>{item?.partyName?.slice(0,10) + "..."}</span>
                                    </div>
                                    <span className='mx-2'>|</span>
                                    </div>
                                <div className='d-flex align-items-center justify-content-center' style={{ width: '33.3%', textTransform: 'lowercase' }}>
                                    <div>
                                    <strong className='me-2'>Filling Date:- </strong >
                                    <span className='me-2'>{item?.filldate}</span>
                                    </div>
                                    </div>
                            </div>
                            )
                        })}
                        <button className='see-more' onClick={() => navigate("/priority-cases")}>See More</button>
                    </div>

                    <div className="box-2 p-3">
                        <div className='dummy mb-3' style={{ fontSize: '24px', textAlign: 'center', fontWeight: '600', border: 'none' , textDecoration: 'underline'}}>ARTICLES</div>
                        <div className='dummy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.</div>
                        <div className='dummy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.</div>
                        <div className='dummy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.</div>
                        <div className='dummy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.</div>
                        <div className='dummy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.</div>
                        <div className='dummy' style={{border: 'none'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeMain