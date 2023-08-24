import React from 'react';
import Students from '../img/students.jpg';
import '../styles/Hero.css';

function Hero() {
  return (
    <div>
      <div data-aos="fade-right">
        <img src={Students} alt='Studends group hands' className='group-hands' fluid/>
        <h1 className='hero-text'>What to Expect</h1>
      </div>
  
      <nav className='sub-navb'>
        <ol>
          <li className='sub-home'>
            <a href='https://www.bathspa.ac.uk/'>Home </a>
          </li>
          <li className='sub-clases'>
            <a className='sub-link'  href='https://www.bathspa.ac.uk/courses/'> Courses</a>
          </li>
        </ol>
      </nav>

      <div className='motivation'>
        <h2>Experience the power of short courses. Transform quickly with impactful lessons!</h2>
      </div>

      <div className='short-courses'>
        <h2 className='courses'>Short Courses</h2>
        <br/>
        <ul className='links'>
          <li><a href='https://www.bathspa.ac.uk/courses/click-start/'>Click Start</a></li>
          <li><a href='https://www.bathspa.ac.uk/courses/sc-entrepreneurship-for-beginners/'>Entrepreneurship for Beginners</a></li>
          <li><a href='https://www.bathspa.ac.uk/courses/sc-esg-fashion-professionals/'>ESG Essentials for Fashion Professionals</a></li>
          <li><a href='https://www.bathspa.ac.uk/courses/sc-immersive-audio/'>Introduction to Immersive Audio</a></li>
          <p>Skills Bootcamps:</p>
          
          <ul>
            <li><a href='https://www.bathspa.ac.uk/courses/project-management-bootcamp/'>Skills Bootcamp in Agile Project Management</a></li>
            <li><a href='https://www.bathspa.ac.uk/courses/data-analytics-and-machine-learning-bootcamp/'>Skills Bootcamp in Data Analytics and Machine Learning</a></li>
            <li><a href='https://www.bathspa.ac.uk/courses/digital-marketing-bootcamp/'>Skills Bootcamp in Digital Marketing</a></li>
            <li><a href='https://www.bathspa.ac.uk/courses/ux-ui-bootcamp/'>Skills Bootcamp in UX/UI Design</a></li>
          </ul>
          <li><a href='https://www.bathspa.ac.uk/courses/sc-wfyp-writing-workshop/'>Writing Young People - Writing Workshop</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
