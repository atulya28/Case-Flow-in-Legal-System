import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {

  const [caseData, setCaseData] = useState([])
  const [skip, setSkip] = useState(1)
  const fetchCases = async () => {
    await axios.get(`https://law-manager-backend.onrender.com/api/case/fetchallcases?page=${skip}`).then((res) => {
      // console.log(res.data)
      setCaseData(res.data)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    fetchCases()
  }, [skip])
  useEffect(() => {
    fetchCases()
  }, [])

  return (
    <div>
      <Header />
      <Navbar />

      <div className="d-flex flex-column p-5" style={{ height: '80vh' }}>
        <div className='header'>Priority Case’s</div>
        <Table striped bordered hover size="sm" style={{ border: '1px solid', borderRadius: '12px' }}>
          <thead>
            <tr>
              <th>Case No.</th>
              <th>Party Name</th>
              <th>Advocate</th>
              <th>Filling Date</th>
              <th>Evidences</th>
              <th>No. of Hearings</th>

            </tr>
          </thead>
          <tbody>
            {caseData && caseData?.length > 0 && caseData?.map((item) => {
              return (
                <tr>
                  <td>{item?.caseno}</td>
                  <td>{item?.partyName}</td>
                  <td>{item?.advocate}</td>
                  <td>{item?.filldate}</td>
                  <td>{item?.noOfNewEvidences}</td>
                  <td>{item?.noOfHearingBefore}</td>

                </tr>
              )
            })}
          </tbody>
        </Table>
        <div className="d-flex mt-3" style={{marginLeft: 'auto'}}>
          <div className={skip == 1 ? 'me-2 fw-bold' : 'me-2 fw-bold2'} onClick={() => setSkip(1)}>1</div>
          <div className={skip == 2 ? 'me-2 fw-bold' : 'me-2 fw-bold2'} onClick={() => setSkip(2)}>2</div>
          <div className={skip == 3 ? 'me-2 fw-bold' : 'me-2 fw-bold2'} onClick={() => setSkip(3)}>3</div>
          <div className={skip == 4 ? 'me-2 fw-bold' : 'me-2 fw-bold2'} onClick={() => setSkip(4)}>.... &nbsp; 4</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// const containerStyle = {
//   display: 'flex',
//   justifyContent: 'left',
//   alignItems: 'center',
//   height: '70vh',
// };

// const boxStyle = {
//   position: 'absolute', // Use absolute positioning
//   top: '50%',            // Position from the top
//   left: '15%',           // Position from the left
//   transform: 'translate(-50%, -30%)', // Center the box horizontally and vertically
//   border: '2.5px solid black',
//   padding: '30px',
//   backgroundColor: 'lightgrey',
// };

// const rowStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   margin: '10px 0',
// };

// const dataStyle = {
//   flex: '1',
//   border: '1px solid #000',
//   padding: '10px',
//   borderRadius: '5px',
// };

export default Home;
