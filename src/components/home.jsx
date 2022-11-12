import { useState,useEffect } from 'react';
import React from 'react';
import '../css/home.css';
import headerImg from "../assets/avatar.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub} from 'react-icons/fa'
import { IconContext } from "react-icons";


function Home() { 

  const [loopNum,setLoopNum] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);
  const toRotate = ['Web developer','Mobile developer','Data analyst'];
  const [text,setText] = useState('');
  const [delta,setDelta] = useState(30 - Math.random()*100);
  const period = 2000;

  useEffect(()=>{
    let ticker = setInterval(() =>{
      tick();
    },delta)
    return () => { clearInterval(ticker)};
  },[text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length - 1): fullText.substring(0,text.length + 1);
    
    setText(updatedText);
    
    if(isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }
    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }
 

    return (
      <section className='home' id='home'>
       
          <div className='row'>

            <div className='home-description'>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>{`Hi I'm Oubia`}<span className='warp'> {text}</span></h1>
              <p>
              An innovative, creative software engineer with a bachelor's degree and over a year of experience in coding high-quality platforms and IA models.
              With extensive expertise in both backend and front-end coding, And software engineering. Familiar with programming features and strong knowledge of Java, Python, JavaScript, and Flutter among other web and mobile-related solutions and database and operating systems.
              Proficient at testing web applications and interacting with UI and UX teams.
              </p>

              <a href='/contact/'>
              <button  className='connectBtn' >Let's connect<span> </span>
              </button>
              </a>
              <div className='social-links'>
                <IconContext.Provider  value={{ color: "#afbf48",className: "linkedIn", size: '1%' }}>
                  <a href="https://www.linkedin.com/in/oubia-mohammed-724b32189/"
                          target="_blank">
                  <FaLinkedin className='links' />
                  </a>

                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#ffffff", className: "Github",size: '1%' }} >
                <a href="https://github.com/oubia"
                          target="_blank">
                  <FaGithub className='links' />
                </a>
                
                </IconContext.Provider>
              </div>
            </div>
            <div className='home-image'>
              <img src={headerImg} className='homeImg' alt="Header Img"/>
            </div>
          </div>
          
      </section>
    );
  }
  
  export default Home;
  