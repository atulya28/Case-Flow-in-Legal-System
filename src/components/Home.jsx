import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div style={containerStyle}>
        <div style={boxStyle}>

          <h2>Priorities</h2>

          <div style={rowStyle}>
            <div style={dataStyle}>Case No.</div>
            <div style={dataStyle}>Party Name</div>
            <div style={dataStyle}>Filing Date</div>
          </div>

          <div style={rowStyle}>
            <div style={dataStyle}>Case No.</div>
            <div style={dataStyle}>Party Name</div>
            <div style={dataStyle}>Filing Date</div>
          </div>

          <div style={rowStyle}>
            <div style={dataStyle}>Case No.</div>
            <div style={dataStyle}>Party Name</div>
            <div style={dataStyle}>Filing Date</div>
          </div>

          <div style={rowStyle}>
            <div style={dataStyle}>Case No.</div>
            <div style={dataStyle}>Party Name</div>
            <div style={dataStyle}>Filing Date</div>
          </div>
          
          <Link to="/prioritycases">See more...</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  height: '70vh',
};

const boxStyle = {
  position: 'absolute', // Use absolute positioning
  top: '50%',            // Position from the top
  left: '15%',           // Position from the left
  transform: 'translate(-50%, -30%)', // Center the box horizontally and vertically
  border: '2.5px solid black',
  padding: '30px',
  backgroundColor: 'lightgrey',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0',
};

const dataStyle = {
  flex: '1',
  border: '1px solid #000',
  padding: '10px',
  borderRadius: '5px',
};

export default Home;
