import React,{useState,useEffect} from 'react';
import '../css/portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink} from '@fortawesome/free-solid-svg-icons'
import AnimationPage from './anim/animation'

function Portfolio(props) { 

 
    const [db,setDb] = useState('')
    const [open, setOpen] = useState(false)

    
    
    let value = ''
    const slectedValue=(e)=>{
        let data = []
        setDb(' ')
        if(e =='all'){
            setDb(props.data)
        }
        else if(e=='web'){
            props.data.map((item)=>{
                if(item.Type =='Web Development'){
                    data.push(item)
                }
            })
            setDb(data)

        }else if(e=='mobile'){
            props.data.map((item)=>{
                if(item.Type =='Mobiel Development'){
                    data.push(item)
                }
            })
            setDb(data)
            
        }else if(e=='ml'){
            props.data.map((item)=>{
                if(item.Type =='Machine learning'){
                    data.push(item)
                }
            })
            setDb(data)
            
        }else if(e=='desktop'){
            props.data.map((item)=>{
                if(item.Type =='Desktop'){
                    data.push(item)
                }
            })
            setDb(data)
            
        }
    }
    useEffect(() => {
        if(db ==''){
            setDb(props.data)
        }
      });

    return (
    <section className='section-about' >
        <div className='container'>
            <div className='Aboutrow'>
                <div className='section-title'>
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div className='project_headline'>
                <div className="Pitem">
                    <h4 onClick={(e) => slectedValue('all')}>All</h4>
                </div>
                <div className="Pitem">
                    <h4 onClick={(e) => slectedValue('web')}>Web Dev</h4>
                </div>
                <div className="Pitem">
                    <h4 onClick={(e) => slectedValue('mobile')} >Mobiel Dev</h4>
                </div>
                <div className="Pitem">
                    <h4 onClick={(e) => slectedValue('ml')} >Machine learning   </h4>
                </div>
                <div className="Pitem">
                    <h4 onClick={(e) => slectedValue('desktop')} >Desktop</h4>
                </div>
            </div>
            <AnimationPage>

            <div className='protdetails' >
                {Array.from(db).map((e) => (
                <div className='portfolio-item' onClick={() => setOpen(true)}  key={e.id.toString()}>
                <div className='portfolio-item-inner'>
                    <img className='portfolioImage' src={`http://127.0.0.1:8000/${e.myphoto}`} />
                    <div className='info-item-all'>
                        <p><FontAwesomeIcon className='fontawsomeAll' icon={faExternalLink} />
                        View: 
                            <span>
                            <a href={`${e.Preview}`}
                                target="_blank">On github</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        ))}
            </div>
            </AnimationPage>

        </div>
        
    </section>
    
    );
}
export default Portfolio;