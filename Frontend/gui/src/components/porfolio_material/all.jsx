import React,{useEffect, useState} from 'react';
import 'E:/homy/Portfolio/Portfolio/Frontend/gui/src/css/portfolio.css';
import siteImg from "E:/homy/Portfolio/Portfolio/Frontend/gui/src/assets/images/Untitleddesign.jpg"
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faExternalLink} from '@fortawesome/free-solid-svg-icons'

function All(props) { 
  const [open, setOpen] = useState(false)
  const [project,setProject] = useState('')

  const datanew = []
    useEffect (()=>{
        fetch("http://127.0.0.1:8000/project/")
        .then((response) => response.json())
        .then((data) => {
          setProject(data)
        });
        Array.from(project).map((e)=>{
            if(e.Type == "Web Development"){
                datanew.push(e);
            }
        })
        Array.from(datanew).map((e) => (
          console.log("inside fr",e)
        ));
    },[]);
// 
      return (
        <div className='Aboutrow'>
          {Array.from(datanew).map((e) => (
            <><div className='portfolio-item' onClick={() => setOpen(true)}>
              <div className='portfolio-item-inner'>
                <img className='portfolioImage' src={`http://localhost:8000${e.img}`} />
              </div>
            </div>
            <Modal className="modal" isOpen={open} onClose={() => setOpen(false)}>
                <div class="all-content">
                  <div className='all-info'>
                    <div className="Aboutrow first-session-aprt1">
                      <div className='info-item-all'>
                        <p><FontAwesomeIcon className='fontawsomeAll' icon={faProjectDiagram} />
                          Project: <span>e.Type</span></p>
                      </div>
                      <div className='info-item-all'>
                        <p><FontAwesomeIcon className='fontawsomeAll' icon={faCode} />
                          Language: <span className='respoSpans'>e.Languages</span></p>
                      </div>
                      <div className='info-item-all'>
                        <p><FontAwesomeIcon className='fontawsomeAll' icon={faUser} />
                          Client: <span>e.Client</span></p>
                      </div>
                      <div className='info-item-all'>
                        <p><FontAwesomeIcon className='fontawsomeAll' icon={faExternalLink} />
                          Preview: <span><a href="https://github.com/oubia"
                            target="_blank">e.Preview</a></span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal></>
          ))}
            
       
        </div>
      );
    }
    
    export default All;