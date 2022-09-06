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
              <li><a href='#' className='active'><FontAwesomeIcon className='FontAwesomeIcon' icon={faHome} />Home</a></li>
              <li><a href='#' ><FontAwesomeIcon className='FontAwesomeIcon' icon={faUser} />About</a></li>
              <li><a href='#' ><FontAwesomeIcon className='FontAwesomeIcon' icon={faList} />Services</a></li>
              <li><a href='#' ><FontAwesomeIcon className='FontAwesomeIcon' icon={faBriefcase} />Portfolio</a></li>
              <li><a href='#' ><FontAwesomeIcon className='FontAwesomeIcon' icon={faComments} />Contact</a></li>

            </ul>
    </aside>
  );
}

export default Aside;
