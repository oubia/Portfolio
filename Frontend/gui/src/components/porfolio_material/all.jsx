import React,{useState} from 'react';
import 'E:/homy/Portfolio/Portfolio/Frontend/gui/src/css/portfolio.css';
import siteImg from "E:/homy/Portfolio/Portfolio/Frontend/gui/src/assets/images/Untitleddesign.jpg"
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faExternalLink} from '@fortawesome/free-solid-svg-icons'

function All() { 
  const [open, setOpen] = useState(false)

      return (
        <div className='Aboutrow'>
          <div className='portfolio-item' onClick={() => setOpen(true)}>
            <div className='portfolio-item-inner'>
                <img className='portfolioImage' src={siteImg}/>
            </div>
          </div>
          <Modal className="modal" isOpen={open} onClose={() => setOpen(false)}>
          <div class="about-content">
                <div className='personal-info'>
                  <div className="Aboutrow first-session-aprt1">
                        <div className='info-item'>
                          <p><FontAwesomeIcon className='fontawsomeAll' icon={faProjectDiagram} />
                            Project : <span>Website</span></p>
                        </div>
                        <div className='info-item'>
                          <p><FontAwesomeIcon className='fontawsomeAll' icon={faCode} />
                            Language : <span className='respoSpans'>HTML,CSS,REACT,DJANGO,MONGO</span></p>
                        </div>
                        <div className='info-item'>
                          <p><FontAwesomeIcon className='fontawsomeAll' icon={faUser} />
                            Client : <span>Internship</span></p>
                        </div>
                        <div className='info-item'>
                          <p><FontAwesomeIcon className='fontawsomeAll' icon={faExternalLink} />
                            Preview : <span><a href="https://github.com/oubia"
                                target="_blank">Link</a></span></p>
                        </div>
                      </div>
                    </div>
                    
            </div>
          
          </Modal>

          <div className='portfolio-item'>
            <div className='portfolio-item-inner'>
                <img className='portfolioImage' src={siteImg}/>
            </div>
          </div>
        </div>
      );
    }
    
    export default All;