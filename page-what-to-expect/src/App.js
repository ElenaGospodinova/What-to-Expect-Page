import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import "./styles/App.css";
import Navbar from './components/Navbar';
import  './styles/ResponsiveStyle.css';
import './styles/ResponsiveSmallScreens.css';
import './styles/ResponsiveMobiles.css';


function App() {
  return (
    <>
      <Header/>
      <div>
      <Navbar />
      </div>
      <MainContent/>
    </>
  );
}

export default App;
