import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const PriorityCases = () => {
  return (
    <div>
      <Header />
      <Navbar/>

      <div className="breadcrumb">
        <span>Home &gt;&gt; <strong>Priority Cases</strong></span>
        <div className="breadcrumb-icons"></div>
      </div>

      <div className="case-listing">
        <span className="priority-cases-text">Case Listing</span>
      </div>


      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Case No.</th>
              <th>Parties Name</th>
              <th>Filing Date</th>
              <th>Judge Name</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                <td>Rcxx7891</td>
                <td>Yxxxxx vs Acxxxx</td>
                <td>xx/yy/zzzz</td>
                <td>Hon'ble JxxE</td>
              </tr>
            ))}
          </tbody>
          </table>
          </div>

      <Footer /> 
    </div>

  )
}

export default PriorityCases 