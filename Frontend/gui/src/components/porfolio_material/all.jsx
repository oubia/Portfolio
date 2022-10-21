import React,{useState} from 'react';
import 'E:/homy/Portfolio/Portfolio/Frontend/gui/src/css/portfolio.css';
import siteImg from "E:/homy/Portfolio/Portfolio/Frontend/gui/src/assets/images/Untitleddesign.jpg"
import Modal from './Modal'
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
           Fancy Modal
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