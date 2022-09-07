import React from 'react';
import Aside from './components/aside';
import Home from './components/home'
import './css/banner.css';

function App() {
  return (
    <div className="App">
      <Aside/>
     <main className="flex-item-1 center-content" id='main'>
    
      <Home/>
     </main>

    </div>
  );
}

export default App;
