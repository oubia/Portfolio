import React from 'react';
import {Container, Row,Col} from 'react-bootstrap'
import '../css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function About() {
  
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
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                        </div>
                      </div>
                      <div className='skill-item'>
                        <h4>English</h4>
                        <div className="progressdiv">
                          <CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                        </div>
                      </div>
                      <div className='skill-item'>
                        <h4>French</h4>
                        <div className="progressdiv">
                          <CircularProgressbar value={70} text={`${70}%`} styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                        </div>
                      </div>
                      <div className='skill-item'>
                        <h4>Espangol</h4>
                        <div className="progressdiv">
                          <CircularProgressbar value={10} text={`${10}%`} styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="Aboutrow">
                    <div className='devider'></div>
                </div>
              </div>
              <div className='skill-details'>
                <h3>SKILLS</h3>
                <div className="skills">
                    <div className="progressdiv1">
                          <CircularProgressbar value={100} text={`${100}%`} styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                      <h4>Java</h4>
                    </div>
                        <div className="progressdiv1">
                          <CircularProgressbar value={100} text={`${100}%`}styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                        <h4>Java</h4>
                        </div>
                        <div className="progressdiv1">
                          <CircularProgressbar value={100} text={`${100}%`}styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                                                <h4>Java</h4>

                        </div>
                        <div className="progressdiv1">
                          <CircularProgressbar value={100} text={`${100}%`}styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                                                <h4>Java</h4>

                        </div><div className="progressdiv1">
                          <CircularProgressbar value={100} text={`${100}%`}styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                          <h4>Java</h4>

                        </div><div className="progressdiv1">
                          <CircularProgressbar value={100} text={`${100}%`}styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                          <h4>Java</h4>

                        </div><div className="progressdiv1">
                          <CircularProgressbar value={100} text={`${100}%`}styles={buildStyles({
                            pathColor: `rgb(101, 21, 240, ${100 / 100})`,
                            textColor: '#ffffff',
                            trailColor: '#ffffffd8',
                            backgroundColor: '#59595ad8',
                          })}/>;
                          <h4>Java</h4>

                        </div>
                </div>
              </div>
              <div class="about-content">
              <div className="Aboutrow">
                    <div className='devider'></div>
                </div>
              </div>
              

            </div>
          </div>
      </section>
    );
  }
  
  export default About;
  