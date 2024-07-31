// frontend/src/components/Contact.jsx

import React from 'react';
import './Contact.css';
import trainer1 from '../assets/t1.jpg';
import trainer2 from '../assets/t2.jpg';
import trainer3 from '../assets/t3.jpg';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Headings */}
      <h2 className="small-heading">Our Trainers</h2>
      <h1 className="large-heading">Meet Our Experienced Trainers</h1>
      <p className="intro-text">Our trainers are skilled professionals with years of experience in the fitness industry. They are dedicated to helping you achieve your health and fitness goals.</p>

      {/* Trainer Cards */}
      <div className="cards-container">
        <div className="card">
          <img src={trainer1} alt="Trainer 1" className="trainer-img" />
          <div className="card-content">
            <h3>John Doe</h3>
            <p>Fitness Trainer</p>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={trainer2} alt="Trainer 2" className="trainer-img" />
          <div className="card-content">
            <h3>Jane Smith</h3>
            <p>Yoga Instructor</p>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={trainer3} alt="Trainer 3" className="trainer-img" />
          <div className="card-content">
            <h3>Mark Johnson</h3>
            <p>Cardio Coach</p>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
      </div>

      {/* See All Trainers Button */}
      <button className="see-all-btn">See All Trainers</button>
    </div>
  );
};

export default ContactUs;



