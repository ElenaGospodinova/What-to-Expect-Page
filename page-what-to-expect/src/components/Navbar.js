import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container" onClick={handleShow}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <a onClick={handleShow} className="vertical-title">
        <span className='menu first'> M</span>
        <span className='menu first'> E</span>
        <span className='menu first'> N</span>
        <span className='menu first'> U</span>
      </a>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton={false}>
          <Offcanvas.Title className="vertical-title close-title" onClick={handleClose}>
            <span className='menu'> C</span>
            <span className='menu'> L</span>
            <span className='menu'> O</span>
            <span className='menu'> S</span>
            <span className='menu'> E</span>
          </Offcanvas.Title>


        </Offcanvas.Header>
        <Offcanvas.Body className='nav'>
        <p className='main-menu'>MAIN MENU</p>
          <ul className="navbar-menu">
            <li>COURSES<button className="bi bi-chevron-right" type='button'></button></li>
            <li>CLEARING<button className="bi bi-chevron-right" type='button'></button></li>
            <li>STUDENT LIFE<button className="bi bi-chevron-right" type='button'></button></li>
            <li>OPEN DAYS<button className="bi bi-chevron-right" type='button'></button></li>
            <li>HOW TO APPLY<button className="bi bi-chevron-right" type='button'></button></li>
            <li>SCHOOLS OF STUDY<button className="bi bi-chevron-right" type='button'></button></li>
            <li>RESEARCH AND ENTERPRISE<button className="bi bi-chevron-right" type='button'></button></li>
            <li>NEWS AND EVENTS<button className="bi bi-chevron-right" type='button'></button></li>
          </ul>
          <div className='footer-main'>
              <ul className="navbar-footer">
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">LIBRARY</a></li>
                <li><a href="#">STUDENTS</a></li>
                <li><a href="#">INTERNATIONAL</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">SUPPORT</a></li>
                <li><a href="#">BUSINESS</a></li>
              </ul>
              <ul className="navbar-footer"> 
                <li><a href="#">TERM DATES</a></li>
                <li><a href="#">CAREERS SUPPORT</a></li>
                <li><a href="#">GRADUATE SUPPORT</a></li>
                <li><a href="#">INTRANET</a></li>
                <li><a href="#">MINERVA</a></li>
                <li><a href="#">MY SERVICES</a></li>
                <li><a href="#">WORK AT BATH SPA</a></li>
              </ul>
          </div>

            <div className='foother-last'>
            <ul className='policies'>
                <li>ACCESSIBILITY STATEMENT</li>
                <li>MODERN SLAVERY STATEMENT</li>
                <li>POLICIES</li>
                <li>PRIVACY NOTICES</li>
            </ul>
            </div>
          
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
