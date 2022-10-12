import React from 'react';
import '../css/banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function Aside(props) {
  
  return (
    <aside className="Asidedev">
        <div className='logo'>
            <a href='/' ><span className="Ou">O</span><span className="ubi">ub<span className="Ou">i</span>a</span></a>
        </div>
        <div className='nav-toggler'>
            <span>

            </span>
        </div>
            <ul className='nav'>
              <div className='wrapper'>
                <li>
                <a href="/">
                  {props.data == '/'?<div className="button" style={{ background:'#5c0a08'}}>
                        <div className='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faHome} />
                        </div>
                            <span>Home</span>
                    </div>:<div className="button">
                        <div className='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faHome} />
                        </div>
                            <span>Home</span>
                    </div>}
                    
                </a>
                </li>
                  <li>
                    <a href='/about' >
                    {props.data == '/about'?<div className='button' style={{ background:'#5c0a08'}}>
                        <div className='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faUser} />
                        </div>
                          <span>About</span>
                    </div>:<div className='button'>
                        <div className='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faUser} />
                        </div>
                          <span>About</span>
                    </div>}
                    
                    </a>
                  </li>
                <li>
                  <a href='/services' >
                  {props.data == '/services'?<div className='button' style={{ background:'#5c0a08'}}>
                          <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faList} />                       
                          </div>
                          <span>Services</span>
                    </div>:<div className='button'>
                          <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faList} />                       
                          </div>
                          <span>Services</span>
                    </div>}
                  </a>
                </li>
                
                <li>
                  <a href='/portfolio' >
                  {props.data == '/portfolio'?<div className='button' style={{ background:'#5c0a08'}}>
                          <div className='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faBriefcase} />                      
                          </div>
                          <span>Portfolio</span>
                    </div>:<div className='button'>
                          <div className='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faBriefcase} />                      
                          </div>
                          <span>Portfolio</span>
                    </div>}
                    
                  </a>
                </li>
                <li>
                  <a href='/contact' >
                  {props.data == '/contact'?<div className='button' style={{ background:'#5c0a08'}}>
                          <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faComments} />
                          </div>
                          <span>Contact</span>
                    </div>:<div className='button'>
                          <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faComments} />
                          </div>
                          <span>Contact</span>
                    </div>}
                  </a>
                </li>
              </div>
            </ul>
    </aside>
  );
}

export default Aside;
