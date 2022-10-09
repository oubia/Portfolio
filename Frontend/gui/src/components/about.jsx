import React from 'react';
import {Container, Row,Col} from 'react-bootstrap'
import '../css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faPython } from '@fortawesome/free-solid-svg-icons'

import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function About() {

  const [value, setValue] = React.useState(0);

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
              <div class="about-content">
                {/* <div className="Aboutrow">
                  <div className="about-text">
                    <h3>I'm Oubia <span>I am a software engineer</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.</p>
                  </div>
                </div> */}
                <div className="Aboutrow">
                  <div className='personal-info'>
                    <div className="Aboutrow">
                    <div className="about-text">
                    <h3>PERSONAL <span>INFO</span></h3>
                    </div>
                      <div className='info-item'>
                        <p>Birthday : <span>14 jun 2000</span></p>
                      </div>
                      <div className='info-item'>
                        <p>Age : <span>22</span></p>
                      </div>
                      <div className='info-item'>
                        <p>Website : <span>www.domain.com</span></p>
                      </div>
                      <div className='info-item'>
                        <p>Email : <span>dev.oubia@gmail.com</span></p>
                      </div>
                      <div className='info-item'>
                        <p>Degree : <span>Bachelor</span></p>
                      </div>
                      <div className='info-item'>
                        <p>Phone : <span>+212 643 49 03 38</span></p>
                      </div>
                      <div className='info-item'>
                        <p>City : <span>Essamouira Morocco</span></p>
                      </div>
                      <div className='info-item'>
                        <p>Work : <span style={{color:"lightgreen"}}>Available</span></p>
                      </div>
                    </div>
                    <div className="Aboutrow">
                      <div className='buttons'>
                        <a href='#' className='downloadBtn'><span>Download CV</span> <FontAwesomeIcon className='FontAwesomeIconDownload' icon={faDownload} /> </a>
                      </div>
                    </div>
                  </div>
                  <div className='skills'>
                    <div className='Aboutrow'>
                      <div className='skill-item'>
                        <h4>Arabic</h4>
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
                        <h4>English</h4>
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
                        <h4>French</h4>
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
                        <h4>Espangol</h4>
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
                          <div style={{width: `${value}px`}} className="progress">
                          </div>
                        </div>
                    </div>

                    <div className="progressdiv1">
                      <h4>JAVA</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
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
                          <div style={{width: `${180}px`}} className="progress">
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
                      <h4>FLLUTER</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
                          </div>
                        </div>
                    </div>


                    <div className="progressdiv1">
                      <h4>REACT</h4>
                        <div className="progress-div" style={{width: `${200}px`}}>
                          <div style={{width: `${180}px`}} className="progress">
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
                </div>
              </div>

              <div class="about-content">
                <div className="Aboutrow">
                      <div className='devider'/>
                </div>
              </div>

                <div class="about-content">
                  <div className="Aboutrow">
                    <div className='education'>
                      <h3 className='title'>Education</h3>
                    </div>

                    <div className='experience'>
                      <h3 className='title'>Experience</h3>
                    </div>
                  </div>
                </div>

              
              

          </div>
        </div>

      </section>
    );
  }
  
  export default About;
  