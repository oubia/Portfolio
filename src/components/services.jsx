import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBrain} from '@fortawesome/free-solid-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject} from '@fortawesome/free-solid-svg-icons'
import { faDesktop} from '@fortawesome/free-solid-svg-icons'
import AnimationPage from './anim/animation'

import '../css/services.css';
import { FaHtml5 } from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import {DiDjango} from 'react-icons/di'
import {DiDart} from 'react-icons/di'
import {DiPostgresql} from 'react-icons/di'
import {DiSqllite} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {RiMediumLine} from 'react-icons/ri'


function Services() { 
    return (
        <section className='section-about'>
           
            <div className='container'>
                <div className='Aboutrow'>
                    <div className='section-title'>
                        <h2>Services</h2>
                    </div>
                </div>
                <AnimationPage>
                <div className='Aboutrow'>

                    <div className='service-item'>
                        <div className='service-item-inner'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faCode} />
                            </div>
                            <h4>Web Development</h4>
                            <p>Creating dynamic, responsive and secure web applications.
                                </p>
                            <div className='languageContainer'>
                                <div className='divLanguage'>
                                    <FaHtml5 className='iconlanguage' />
                                </div>
                                <div className='divLanguage'>
                                    <FaCss3 className='iconlanguage' />
                                </div>
                                <div className='divLanguage'>
                                    <FaReact className='iconlanguage' />
                                </div>
                                <div className='divLanguage'>
                                    <DiDjango className='iconlanguage' />
                                </div>
                                <div className='divLanguage'>
                                    <DiMongodb className='iconlanguage' />
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className='service-item'>
                            <div className='service-item-inner'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='fontawsome' icon={faMobileAndroid} />
                                </div>
                                <h4>Mobile Development</h4>
                                <p>Developing good UI/UX and secure mobile applications.
                                    </p>
                                <div className='languageContainer'>
                                    <div className='divLanguage'>
                                        <DiDart className='iconlanguage' />
                                    </div>
                                    <div className='divLanguage'>
                                        <DiMongodb className='iconlanguage' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='service-item '>
                            <div className='service-item-inner'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='fontawsome' icon={faBrain} />
                                </div>
                                <h4>Maching Learning</h4>
                                <p>Elaborating a very high accuracy model for decisions making.

                                    </p>
                                    <div className='languageContainer'>
                                    <div className='divLanguage'>
                                        <FaPython className='iconlanguage' />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className='service-item'>
                            <div className='service-item-inner'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='fontawsome' icon={faDatabase} />
                                </div>
                                <h4>Data base</h4>
                                <p>Database administration, creating and modeling good database solutions.
                                    </p>
                                <div className='languageContainer'>
                                    <div className='divLanguage'>
                                        <DiSqllite className='iconlanguage' />
                                    </div>
                                    <div className='divLanguage'>
                                        <DiMongodb className='iconlanguage' />
                                    </div>
                                    <div className='divLanguage'>
                                        <DiPostgresql className='iconlanguage' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='service-item'>
                            <div className='service-item-inner'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='fontawsome' icon={faDiagramProject} />
                                </div>
                                <h4>Project Design</h4>
                                <p>Project modeling, good understanding of clients need and elaborating good solutions.
                                    </p>
                                <div className='languageContainer'>
                                    
                                    <div className='divLanguage'>
                                        <RiMediumLine className='iconlanguage' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='service-item'>
                            <div className='service-item-inner'>
                                <div className='icon'>
                                    <FontAwesomeIcon className='fontawsome' icon={faDesktop} />
                                </div>
                                <h4>Desktop Development</h4>
                                <p>Creating a very high quality with a good UI/UX desktop application using Java.
                                    </p>
                                <div className='languageContainer'>
                                    
                                    <div className='divLanguage'>
                                        <DiJava className='iconlanguage' />
                                    </div>
                                    <div className='divLanguage'>
                                        <DiPostgresql className='iconlanguage' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationPage>
               
            </div>
        </section>
      );
}
export default Services;