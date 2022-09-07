import React from 'react';
import {Container, Row,Col} from 'react-bootstrap'
import '../css/home.css';
import {ArrowRightCircle} from 'react-bootstrap-icons';

function Home() {
    return (
      <section className='home' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>{`Hi I'm Mohammed Oubia`}<span className='warp'>Data scientist software</span></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sincethe 1500s, when an unknown printer took a galley</p>
              <button onClick={()=>console.log('connect selected')}>Let's connect
              <ArrowRightCircle size={25}></ArrowRightCircle></button>
            </Col>
            <Col>
              {/* add the picture and complete the home page */}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  
  export default Home;
  