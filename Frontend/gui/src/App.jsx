import React from 'react';
import Aside from './components/aside';
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import AnimatedCursor from "react-animated-cursor"
import Portfolio from "./components/Portfolio"


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
      <Aside/>
     <main className="flex-item-1 center-content" id='main'>
    
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Services/> */}
      <Portfolio/>
     </main>

    </div>
  );
}

export default App;
