import React from 'react'
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarked} from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'


function Contact() { 
    return (
        <section className='section-about' id='about'>
           
            <div className='container'>
                    <div className='section-title'>
                        <h2>Contact Me</h2>
                    </div>
                <h3 className='contact-title'>Do you have any questions?</h3>
                <h4 className='contact-sub-title'>I am at your service</h4>
                <div className='contactinforow'>
                    <div className='contact-info-item'>
                        <div className='icon'>
                            <FontAwesomeIcon className='fontawsome' icon={faPhone} />
                        </div>
                        <h4>call Us on</h4>
                        <p>+212 643 490 338</p>
                    </div>
                    <div className='contact-info-item'>
                        <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faMapMarked} />
                            </div>
                            <h4>Location</h4>
                            <p>Essaouira,Morocco</p>
                    </div>
                    <div className='contact-info-item'>
                        <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faMessage} />
                            </div>
                            <h4>Email</h4>
                            <p>dev.oubia@gmail.com</p>
                    </div>
                    <div className='contact-info-item'>
                        <div className='icon'>
                                <FontAwesomeIcon className='fontawsome' icon={faEarth} />
                            </div>
                            <h4>Website</h4>
                            <p>www.domain.com</p>
                    </div>
                </div>
                <div className='Aboutrow'>
                    <div className='contact-form'>
                        <div className='Aboutrow'>
                            <div className='from-item col-6 nameform'>
                                <div className='form-group'>
                                    <input type="text" className='form-control' placeholder='Name'></input>
                                </div>
                            </div>
                            <div className='from-item col-6 emailform'>
                                <div className='form-group'>
                                    <input type="email" className='form-control' placeholder='Email'></input>
                                </div>
                            </div>
                        </div>
                        <div className='Aboutrow'>
                            <div className='from-item col-12'>
                                <div className='form-group'>
                                    <input type="text" className='form-control' placeholder='Subject'></input>
                                </div>
                            </div>
                        </div>
                        <div className='Aboutrow'>
                            <div className='from-item col-12'>
                                <div className='form-group'>
                                    <textarea name='' className="form-control textArea" id="" placeholder='Message'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='Aboutrow'>
                            <button type='submit' className='connectBtn sendmessagebtn'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;