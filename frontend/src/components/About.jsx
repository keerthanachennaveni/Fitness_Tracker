
import React from 'react';

import classImage1 from '../assets/g.jpg';
import classImage2 from '../assets/2.webp';
import classImage3 from '../assets/3.webp';
import scheduleImage1 from '../assets/yogaclass.jpg';
import scheduleImage2 from '../assets/4.2.jpg';
import scheduleImage3 from '../assets/4.3.jpg';
import scheduleImage4 from '../assets/4.4.jpg';
import './About.css';



const About = () => {
  return (
    <div className="about-container">
      {/* Featured Classes Section */}
      <div className="featured-classes">
        <h1>
          <span className="block-color">FEATURED</span> 
          <span className="light-pink">CLASSES</span>
        </h1>
        <div className="cards-container">
          <div className="card" style={{ backgroundImage: `url(${classImage1})` }}>
            <div className="card-content">
              <h2>Yoga</h2>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${classImage2})` }}>
            <div className="card-content">
              <h2>Cardio</h2>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${classImage3})` }}>
            <div className="card-content">
              <h2>Strength Training</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Gap Between Sections */}
      <div className="section-gap"></div>

      {/* Schedule Section */}
      <div className="schedule">
        <h1>
          <span className="light-pink">OUR</span> 
          <span className="block-color">SCHEDULE</span>
        </h1>
        <div className="cards-container">
          <div className="card schedule-card">
            <div className="card-content">
              <h2>Yoga Class</h2>
              <p>Relax and rejuvenate with our Yoga sessions.</p>
              <p>Time: 7:00 AM - 8:00 AM</p>
              <p>Date: 2024-07-05</p>
              <button className="join-btn">Join Form</button>
            </div>
          </div>
          <div className="card schedule-card" style={{ backgroundImage: `url(${scheduleImage1})` }}>
            <div className="card-content"></div>
          </div>
          <div className="card schedule-card">
            <div className="card-content">
              <h2>Cardio Blast</h2>
              <p>Get your heart pumping with intense cardio workouts.</p>
              <p>Time: 6:00 PM - 7:00 PM</p>
              <p>Date: 2024-07-06</p>
              <button className="join-btn">Join Form</button>
            </div>
          </div>
          <div className="card schedule-card" style={{ backgroundImage: `url(${scheduleImage2})` }}>
            <div className="card-content"></div>
          </div>
        </div>





        <div className="cards-container">
          <div className="card schedule-card" style={{ backgroundImage: `url(${scheduleImage3})` }}>
            <div className="card-content"></div>
          </div>
          <div className="card schedule-card">
            <div className="card-content">
              <h2>Strength Training</h2>
              <p>Build strength with our guided training sessions.</p>
              <p>Time: 9:00 AM - 10:00 AM</p>
              <p>Date: 2024-07-07</p>
              <button className="join-btn">Join Form</button>
            </div>
          </div>
          <div className="card schedule-card" style={{ backgroundImage: `url(${scheduleImage4})` }}>
            <div className="card-content"></div>
          </div>
          <div className="card schedule-card">
            <div className="card-content">
              <h2>Pilates</h2>
              <p>Improve flexibility and core strength with Pilates.</p>
              <p>Time: 5:00 PM - 6:00 PM</p>
              <p>Date: 2024-07-08</p>
              <button className="join-btn">Join Form</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default About;
