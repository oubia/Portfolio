import { useState,useEffect } from 'react';
import React from 'react';
import {Container, Row,Col} from 'react-bootstrap'
import '../css/home.css';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../assets/avatar.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub} from 'react-icons/fa'
import { IconContext } from "react-icons";


function Home() { 

  const [loopNum,setLoopNum] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);
  const toRotate = ['Web developer','Mobiel developer','Data analysist'];
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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sincethe 1500s, when an unknown printer took a galley</p>
              
              
              <button onClick={()=>console.log('connect selected')} className='connectBtn' href='/contact'>Let's connect<span> </span>
              </button>
              <div className='social-links'>
                <IconContext.Provider value={{ color: "#afbf48",className: "linkedIn", size: '1%' }}>
                  <FaLinkedin className='links' />
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#ffffff", className: "Github",size: '1%' }} >
                  <FaGithub className='links' />
                </IconContext.Provider>
              </div>
            </div>
            <div className='home-image'>
              <img src={headerImg} alt="Header Img"/>
            </div>
          </div>
      </section>
    );
  }
  
  export default Home;
  