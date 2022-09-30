import React from 'react';
import '../css/banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

function Aside() {
  return (
    <aside className="Asidedev">
        <div className='logo'>
            <a href='#' ><span className="Ou">O</span><span className="ubi">ub<span className="Ou">i</span>a</span></a>
        </div>
        <div className='nav-toggler'>
            <span>

            </span>
        </div>
            <ul className='nav'>
              <div class='wrapper'>
                <li>
                <a href="#">
                    <div class='button'>
                        <div class='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faHome} />
                        </div>
                            <span>Home</span>
                    </div>
                </a>
                </li>
                  <li>
                    <a href='#' >
                    <div class='button'>
                        <div class='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faUser} />
                        </div>
                          <span>About</span>
                    </div>
                    </a>
                  </li>
                <li>
                  <a href='#' >
                    <div class='button'>
                          <div class='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faList} />                       
                          </div>
                          <span>Services</span>
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href='#' >
                    <div class='button'>
                          <div class='icon'>
                          <FontAwesomeIcon className='FontAwesomeIcon' icon={faBriefcase} />                      
                          </div>
                          <span>Portfolio</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#' >
                    <div class='button'>
                          <div class='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faComments} />
                          </div>
                          <span>Contact</span>
                    </div>
                  </a>
                </li>
              </div>
            </ul>
    </aside>
  );
}

export default Aside;
