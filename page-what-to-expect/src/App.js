import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import "./styles/App.css";
import Navbar from './components/Navbar';
import  './styles/ResponsiveStyle.css';
import './styles/ResponsiveSmallScreens.css';



function App() {
  return (
    <>
      <Header/>
      <div>
      <Navbar />
      </div>
      <MainContent/>
      {/* <StudentsRevies/> */}
    </>
  );
}

export default App;
