import React,{useState,useEffect} from 'react';
import '../css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function About(props) {
  const [resmue,setResume] = useState('')
  
  const [value, setValue] = React.useState(0);
  const [pdf,setPdf] = useState('')
  useEffect (()=>{
    fetch("http://127.0.0.1:8000/api/resume/",{
      method: 'GET',
      body: JSON.stringify(),
      credentials: "same-origin", //include, same-origin
      headers: {  'accept': 'application/json', 'Content-Type': 'application/json',},
        
      },
    )
    .then((response) => response.json())
    .then((data) => {
      setResume(data)

    });
  },[]);

    React.useEffect(() => {
      setValue(100);
    });
    
    




    return (
      <section className='section-about' id='about'>
         
          <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h2>About Me</h2>
                </div>
            </div>
            <div className="Aboutrow">
              <div className="about-content">
                <div className="Aboutrow first-session">
                  <div className='personal-info'>
                    <div className="Aboutrow first-session-aprt1">
                      <div className="about-text">
                        <h3>PERSONAL <span>INFO</span></h3>
                      </div>
                        <div className='info-item'>
                          <p>Birthday : <span>14 Jun 2000</span></p>
                        </div>
                        <div className='info-item'>
                          <p>Age : <span>22</span></p>
                        </div>
                        <div className='info-item'>
                          <p>Website : <span><a href="http://www.oubia.me/"
                          target="_blank"> www.oubia.me</a></span></p>
                        </div>
                        <div className='info-item'>
                        
                          <p>Email : <a href="mailto:dev.oubia@gmail.com?subject=Mail to Mohammed Oubia"><span>dev.oubia@gmail.com</span></a></p>
                        </div>
                        <div className='info-item'>
                          <p>Degree : <span>Bachelor</span></p>
                        </div>
                        <div className='info-item'>
                        
                          <p>Phone : <a href="tel:+212775203979"><span>+212 775 203 979</span></a></p>
                        </div>
                        <div className='info-item'>
                          <p>City : <span>Essaouira Morocco</span></p>
                        </div>
                        <div className='info-item'>
                          <p>Work : <span style={{color:"lightgreen"}} className='Availabel'><h3>Available</h3></span></p>
                        </div>
                    </div>
                    <div className="Aboutrow">
                      <div className='buttons'>
                        <a href='http://127.0.0.1:8000/media/pdfs/M.pdf' target="_blank" className='downloadBtn' ><span>Download CV</span> <FontAwesomeIcon className='FontAwesomeIconDownload' icon={faDownload} /> </a>
                      </div>
                    </div>
                  </div>
                  <div className='skills'>
                    <div className='Aboutrow Aboutrowskill'>
                      <div className='skill-item'>
                        <h4 className='cricletitle'>Arabic</h4>
                        <div className="progressdiv">
                          <CircularProgressbar value={100} text={`${100}%`}styles={buildStyles({
                            pathColor: `rgb(92, 11, 8, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#d5df94dc',
                            backgroundColor: '#AFBF48',
                          })}/>;
                        </div>
                      </div>
                      <div className='skill-item'>
                        <h4 className='cricletitle'>English</h4>
                        <div className="progressdiv">
                          <CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({
                            pathColor: `rgb(92, 11, 8, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#d5df94dc',
                            backgroundColor: '#AFBF48',
                          })}/>;
                        </div>
                      </div>
                      <div className='skill-item'>
                        <h4 className='cricletitle'>French</h4>
                        <div className="progressdiv">
                          <CircularProgressbar value={70} text={`${70}%`} styles={buildStyles({
                            pathColor: `rgb(92, 11, 8, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#d5df94dc',
                            backgroundColor: '#AFBF48',
                          })}/>;
                        </div>
                      </div>
                      <div className='skill-item'>
                        <h4 className='cricletitle'>Espangol</h4>
                        <div className="progressdiv">
                          <CircularProgressbar value={10} text={`${10}%`} styles={buildStyles({
                            pathColor: `rgb(92, 11, 8, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#d5df94dc',
                            backgroundColor: '#AFBF48',
                          })}/>;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Aboutrow">
                    <div className='devider'/>
                </div>
              </div>

              <div className='skill-details'>
                <h3>SKILLS</h3>
                <div className="skills">
                    <div className="progressdiv1">
                      <h4>PYTHON</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>JAVA</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${160}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>JAVASCRIPT</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>DART</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${120}px`}} className="progress">
                          </div>
                        </div>
                    </div>


                    <div className="progressdiv1">
                      <h4>DJANGO</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
                          </div>
                        </div>
                    </div>
                    
                    <div className="progressdiv1">
                      <h4>NodeJs</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${150}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>FLLUTER</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${120}px`}} className="progress">
                          </div>
                        </div>
                    </div>


                    <div className="progressdiv1">
                      <h4>REACT</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${170}px`}} className="progress">
                          </div>
                        </div>
                    </div>


                    <div className="progressdiv1">
                      <h4>MONGO</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>HTML</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>CSS</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${150}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>BOOTSTRAP</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${150}px`}} className="progress">
                          </div>
                        </div>
                    </div>
                    

                </div>
              </div>

              <div className="about-content">
                <div className="Aboutrow">
                      <div className='devider'/>
                </div>
              </div>

                <div className="about-content">
                  <div className="Aboutrow">
                    <div className='education'>
                      <h3 className='title'>Education</h3>
                      <div className="Aboutrow">
                        <div className='timeline-div'>
                          <div className='timeline shadow-box'>
                          {Array.from(resmue).map((e) => (
                              e.Type=="Education"?<div className='timeline-item' key={e.id}>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <FontAwesomeIcon className='calendar' icon={faCalendar} />{e.Date}                    
                              </h3>
                              <h4 className='timeline-title'>{e.Title}</h4>
                              <p className='timeline-text'>
                                {e.Description}
                               </p>
                            </div>:<div key={e.id}></div>
                          ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='experience'>
                      <h3 className='title'>Experience</h3>
                      <div className="Aboutrow">
                        <div className='timeline-div'>
                          <div className='timeline shadow-box'>
                          {Array.from(resmue).map((e) => (
                              e.Type=="Experience"?
                            <div className='timeline-item' key={e.id}>
                              <div className='circle-dot'></div>
                              <h3 className='timeline-date'>
                                <FontAwesomeIcon className='calendar' icon={faCalendar} />{e.Date}                         
                              </h3>
                              <h4 className='timeline-title'>{e.Title}</h4>
                              <p className='timeline-text'>
                              {e.Description}
                              </p>
                            </div>:<div key={e.id}></div>
                          ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>

      </section>
    );
  }
  
  export default About;
  