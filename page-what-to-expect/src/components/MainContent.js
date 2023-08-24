import React, { useState, useEffect } from 'react';
import Studying_Students from '../img/studying_students.jpg';
import Group_Students from '../img/Group_of_Students.jpeg';
import Crafts_Classes from '../img/Crafts_Classes.jpeg';
import Business_Class from '../img/business-class.jpeg';
import StudentsRevies from './StudentsReviews';
import Hero from '../components/Hero.js';
import '../styles/MainContent.css';

const slidesData = [
  {
    title: 'Skills Bootcamp',
    text: "In today's fast-paced digital world, mastering the right skills can set you on the path to success. Our comprehensive Skills Bootcamp offers immersive modules in four key sectors: Digital Marketing, UX/UI Design, Data Analysis & Machine Learning, and Agile Project Management. ",
    linkHref: "https://www.bathspa.ac.uk/courses/?courseLevelMulti=short+course/",
    linkLabel: "Learn more",
    img: Studying_Students,
  },
  {
    title: "ESG Essentials For Fashion Professionals",
    text: "This course provides an in-depth exploration of the fashion industry's Environmental, Social, and Governance (ESG) elements. Students will delve into human rights, sustainable materials, avoiding 'greenwashing', and promoting social change. With added optional activities, participants can gain a comprehensive understanding of topics like circular fashion and impactful strategies.",
    linkHref: "https://www.bathspa.ac.uk/courses/sc-esg-fashion-professionals/",
    linkLabel: "Learn more",
    img: Crafts_Classes,
  },
  {
    title: "Introduction To Immersive Audio",
    text: " Dive into the 'Introduction to Immersive Audio' course and master binaural and ambisonic sound technologies in just two days. Under the guidance of sound expert, Duncan Speakman, participants will experience both theory and hands-on practice, capturing and refining immersive audio. This compact course not only addresses the digital skills gap but also serves as a launching pad for those keen to amplify their career in the evolving world of immersive sound.",
    linkHref: "https://www.bathspa.ac.uk/courses/sc-immersive-audio/",
    linkLabel: "Learn more",
    img: Group_Students,
  },
  {
    title: "Writing For Young People - Writing Workshop",
    text: "Join our ten-week Writing Workshop designed for enthusiasts of youth literature. Delve into varied genres and styles while benefiting from the guidance of an expert tutor in a small group setting. Tailored mainly for Bath Spa University's MA Writing for Young People alumni, those with similar backgrounds should verify suitability before enrolling.",
    linkHref: "https://www.bathspa.ac.uk/courses/sc-wfyp-writing-workshop/",
    linkLabel: "Learn more",
    img: Business_Class,
  },
];

function MainContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 

  return (
    <>
      <Hero />
      <main>
        
            <div className='what-to-expect'>
          
              <p>If you're considering enhancing your skillset or diving into a new area of interest, our short courses might be the perfect choice for you. Whether you've been away from learning for a while or are seeking a boost in your current profession, these courses are tailored to meet diverse needs. We recognize that not everyone comes from a conventional educational background, so we value real-world experiences and non-traditional qualifications just as much. Your prior learning (APL) and hands-on experiences (APEL) are seen as invaluable assets, forming the basis for your further education in our courses.</p>
              <br />
              <p>Explore our Guide on Recognizing Prior Learning for a more detailed insight.</p>
              <br />
              <p>By enrolling in our short courses, you can expect to:</p>
              <ul className='experience'>
                <li>Acquire and hone specific skills.</li>
                <li>Elevate your professional trajectory.</li>
                <li>Engage in continuous learning and growth.</li>
                <li>Experience enriching and transformative life moments.</li>
              </ul>
            </div>

        <div className="slider">
          {slidesData.map((data, index) => (
            <input 
              type="radio" 
              name="toggle" 
              id={`btn-${index}`} 
              checked={index === activeIndex} 
              onChange={() => setActiveIndex(index)}
              key={index}
            />
          ))}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <i className="bi bi-chevron-compact-left" aria-hidden="true"></i>
                <span className="visually-hidden"></span>
             </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <i className="bi bi-chevron-compact-right" aria-hidden="true"></i>
              <span className="visually-hidden"></span>
            </button>


          <div className="slider-controls">
            {slidesData.map((_, index) => (
              <label htmlFor={`btn-${index}`} key={index}></label>
            ))}
          </div>

          <ul className="slides">
            {slidesData.map((data, index) => (
              <li className="slide" key={index}>
                <div className="slide-content">
                  <h2 className="slide-title">{data.title}</h2>
                  <p className="slide-text">{data.text}</p>
                  <a href={data.linkHref} className="slide-links">{data.linkLabel}</a>
                </div>
                <div className="slide-image">
                   <img src={data.img} alt="Studing Students" width="320" height="240" fluid />
                </div>
              </li>
            ))}
          </ul>
        </div>
       
        <StudentsRevies/>
        <aside className='aside-list'>
          <h2 className='last'>You might also like</h2>
          <ul className='aside-li'>
            <li><a href='/news-and-events/'>News and events</a></li>
            <li><a href='/about-us/'>About us</a></li>
            <li><a href='/business/'>Business</a></li>
            <li><a href='/Blog/'>Blog</a></li>
          </ul>
          <p className='end'>
            <a  href='https://t4-www.bathspa.ac.uk/reminalfour/pagesection#edit/14201/contents' className='web'>Edit section</a>
            <a  href='mailto:web@bathspa.ac.uk?subject=Web%edit%20edit%20or%20feedback;body=Please%20URL%20to%20edit:' className='web'>Website feedback to web@bathspa.ac.uk</a>
          </p>
        </aside>

      </main>
    </>
  );
}

export default MainContent;
