import React from 'react';
import Aside from './components/aside';
import BottomBanner from './components/bottomBanner';
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import AnimatedCursor from "react-animated-cursor"
import Portfolio from "./components/Portfolio"
import Contact from './components/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    

    <div className="App">
      <AnimatedCursor
      innerSize={15}
      outerSize={15}
      cursorOuter={30}
      color='175, 191, 72'
      outerAlpha={0.2}
      innerScale={0.2}
      outerScale={3}
    />
      <Aside data={window.location.pathname}/>
      <BottomBanner data={window.location.pathname}/>

     <main className="flex-item-1 center-content" id='main'>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services /> } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
     </main>

    </div>
  );
}

export default App;
