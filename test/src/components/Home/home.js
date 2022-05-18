import React from 'react';
import Navbar from './navbar';
import Header from './header'
import About from './about'
import Service from './service';
import MainMenu from './main-menu';
import TeamWork from './team-work';
import ConatctUs from './conatct_us';

const Home = () => {
  return (
    <div>
    <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home" />
    <Navbar/>
    <Header/>
    <About/>
    <Service/>
    <MainMenu/>
    <TeamWork/>
    <ConatctUs/>
    </div>
  );
}

export default Home;
