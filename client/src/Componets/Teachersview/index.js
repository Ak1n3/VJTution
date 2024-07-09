import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../Sidebar'; // Importing Sidebar component
import './index.css'; // Importing the CSS file

function Teachersview() {
  return (
    <div className="teachers-view"> {/* Class name for the container */}
      <div>
        <Sidebar /> {/* Sidebar component for navigation */}
      </div>
     
      <div className='Homecontainer'> {/* Container for the main content */}
        <h1 className='titalheading'>Vj's Mukyaprana study zone</h1> {/* Title */}
        
        <div className='container'> {/* Container for cards */}
          {/* Link to teacher registration */}
          <Link to="/teacherregistration" className="link">
            <div className='card'> {/* Card for teacher registration */}
              <h1>Teacher Registration</h1>
              <p>Register teacher here</p>
            </div>
          </Link>

          {/* Link to teacher details */}
          <Link to="/teacherdetails" className="link">
            <div className='card'> {/* Card for teacher details */}
              <h1>Teacher Details</h1>
              <p>See teacher details here</p>
            </div>
          </Link>
        </div>
      </div>

      {/* SVG for decorative wave effect */}
      <div className='waves'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,256L30,250.7C60,245,120,235,180,202.7C240,171,300,117,360,117.3C420,117,480,171,540,208C600,245,660,267,720,266.7C780,267,840,245,900,245.3C960,245,1020,267,1080,277.3C1140,288,1200,288,1260,266.7C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Teachersview;
