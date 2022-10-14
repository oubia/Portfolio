import { useState,useEffect } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBrain} from '@fortawesome/free-solid-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject} from '@fortawesome/free-solid-svg-icons'
import { faDesktop} from '@fortawesome/free-solid-svg-icons'

import '../css/services.css';


function Services() { 
    return (
        <section className='section-about'>
           
            <div className='container'>
                <div className='Aboutrow'>
                    <div className='section-title'>
                        <h2>Services</h2>
                    </div>
                </div>
                <div className='Aboutrow'>
                    <div className='service-item'>
                        <div className='service-item-inner'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faCode} />
                            </div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                </p>
                        </div>
                    </div>

                    <div className='service-item'>
                        <div className='service-item-inner'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faMobileAndroid} />
                            </div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                </p>
                        </div>
                    </div>

                    <div className='service-item '>
                        <div className='service-item-inner'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faBrain} />
                            </div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                </p>
                        </div>
                    </div>

                    <div className='service-item'>
                        <div className='service-item-inner'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faDatabase} />
                            </div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                </p>
                        </div>
                    </div>

                    <div className='service-item'>
                        <div className='service-item-inner'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faDiagramProject} />
                            </div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                </p>
                        </div>
                    </div>

                    <div className='service-item'>
                        <div className='service-item-inner'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faDesktop} />
                            </div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
}
export default Services;