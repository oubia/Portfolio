import React,{useEffect,useState} from 'react';
import axios from "axios";

import Aside from './components/aside';
import BottomBanner from './components/bottomBanner';
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import AnimatedCursor from "react-animated-cursor"
import Portfolio from "./components/Portfolio"
import Contact from './components/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimationPage from './components/anim/animation'
function App() {
  const [project,setProject] = useState('')

  useEffect (()=>{

    // axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
        fetch("https://portfolio-oubia.herokuapp.com/api/project/")
        .then((response) => response.json())
        .then((data) => { 
          setProject(data)
          Array.from(project).map((e)=>{
          })
        }).catch(error => {
          console.log(error);
        });

        
  },[]);
  
  async function sendEmail(item){
    // let items = data["items"];
    if(item['name']!= ''&& item['email']!='' && item['subject'] != '' && item['message']!=''){
        await fetch("https://portfolio-oubia.herokuapp.com/api/contact-data/", {method: "POST",})
        .then((response) => response.json())
        .then((data) => {
          alert("Thank you your email had been sent successfuly");
        });
    }else{
      alert("please enter correct e-mail");
    }


  };
  return (
    

    <div >
      <AnimatedCursor
      innerSize={15}
      outerSize={15}
      cursorOuter={30}
      color='175, 191, 72'
      outerAlpha={0.2}
      innerScale={0.2}
      outerScale={3}
    />
      
     <main className="center-content" id='main'>

      <BrowserRouter>
        <AnimationPage>

          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About  />} />
              <Route path="/services" element={<Services /> } />
              <Route path="/portfolio" element={<Portfolio data={project}/>} />
              <Route path="/contact" element={<Contact  sendEmail={sendEmail}/>} />
          </Routes>
        </AnimationPage>

      </BrowserRouter>

     </main>
     <Aside data={window.location.pathname}/>
      <BottomBanner data={window.location.pathname}/>

    </div>
  );
}

export default App;
