import React from 'react';
import '../css/banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
function BottomBanner(props) {
  
  return (
    <aside className="AsidedevBottom">
        <ul className='nav'>
            <div className='wrapper'>
                <li>
                <a href="/">
                    {props.data == '/'?<div className="button" style={{ background:'#5c0a08'}}>
                        <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faHome} />
                        </div>
                    </div>:<div className="button">
                        <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faHome} />
                        </div>
                    </div>}
                    
                </a>
                </li>
                    <li>
                    <a href='/about' >
                    {props.data == '/about'?<div className='button' style={{ background:'#5c0a08'}}>
                        <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faUser} />
                        </div>
                    </div>:<div className='button'>
                        <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faUser} />
                        </div>
                    </div>}
                    
                    </a>
                    </li>
                <li>
                    <a href='/services' >
                    {props.data == '/services'?<div className='button' style={{ background:'#5c0a08'}}>
                            <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faList} />                       
                            </div>
                    </div>:<div className='button'>
                            <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faList} />                       
                            </div>
                    </div>}
                    </a>
                </li>
                
                <li>
                    <a href='/portfolio' >
                    {props.data == '/portfolio'?<div className='button' style={{ background:'#5c0a08'}}>
                            <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faBriefcase} />                      
                            </div>
                    </div>:<div className='button'>
                            <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faBriefcase} />                      
                            </div>
                    </div>}
                    
                    </a>
                </li>
                <li>
                    <a href='/contact' >
                    {props.data == '/contact'?<div className='button' style={{ background:'#5c0a08'}}>
                            <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faComments} />
                            </div>
                    </div>:<div className='button'>
                            <div className='icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon' icon={faComments} />
                            </div>
                    </div>}
                    </a>
                </li>
            </div>
        </ul>
    </aside>
  );
}

export default BottomBanner;
