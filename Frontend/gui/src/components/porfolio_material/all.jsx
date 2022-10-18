import React from 'react';
import 'E:/homy/Portfolio/Portfolio/Frontend/gui/src/css/portfolio.css';
import siteImg from "E:/homy/Portfolio/Portfolio/Frontend/gui/src/assets/images/Untitleddesign.jpg"

function All() { 

      return (
        <div className='Aboutrow'>
          <div className='portfolio-item'>
            <div className='portfolio-item-inner'>
                <img className='portfolioImage' src={siteImg}/>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='portfolio-item-inner'>
                <img className='portfolioImage' src={siteImg}/>
            </div>
          </div>
        </div>
      );
    }
    
    export default All;