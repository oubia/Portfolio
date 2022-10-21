import React, { useState } from 'react'
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarked} from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub} from 'react-icons/fa'
import { IconContext } from "react-icons";

function Contact(props){
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [subject, SetSubject] = useState("");
  const [message, SetMessage] = useState("");
  const[popup,SetPopup] = useState(false)

  const SendEmailToBackend= () => {
    props.sendEmail({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    SetName("");
    SetEmail("");
    SetSubject("");
    SetMessage("");
  };


        
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
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        placeholder='Name'
                                        onChange={(e) => SetName(e.target.value)}
                                        value={name}

                                        ></input>
                                </div>
                            </div>
                            <div className='from-item col-6 emailform'>
                                <div className='form-group'>
                                    <input 
                                        type="email" 
                                        className='form-control' 
                                        placeholder='Email'
                                        onChange={(e) => SetEmail(e.target.value)}
                                        value={email}
                                        ></input>
                                </div>
                            </div>
                        </div>
                        <div className='Aboutrow'>
                            <div className='from-item col-12'>
                                <div className='form-group'>
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        placeholder='Subject'
                                        onChange={(e) => SetSubject(e.target.value)}
                                        value={subject}
                                        ></input>
                                </div>
                            </div>
                        </div>
                        <div className='Aboutrow'>
                            <div className='from-item col-12'>
                                <div className='form-group'>
                                    <textarea 
                                    name='' 
                                    className="form-control textArea" 
                                    id=""
                                     placeholder='Message'
                                     onChange={(e) => SetMessage(e.target.value)}
                                     value={message}
                                     ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='Aboutrow'>
                            <button type='button' onClick={SendEmailToBackend} className='connectBtn sendmessagebtn'>Send Message</button>
                        </div>
                        <div className='social-links'>
                        <IconContext.Provider  value={{ color: "#afbf48",className: "linkedIn", size: '0.5%' }}>
                        <a href="https://www.linkedin.com/in/oubia-mohammed-724b32189/"
                                target="_blank">
                        <FaLinkedin className='links' />
                        </a>

                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#ffffff", className: "Github",size: '0.5%' }} >
                        <a href="https://github.com/oubia"
                                target="_blank">
                        <FaGithub className='links' />
                        </a>
                        
                        </IconContext.Provider>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
    
export default Contact;