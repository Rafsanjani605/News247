import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle , FaGithub , FaFacebook, FaWhatsapp , FaTwitter} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import trump from '../../../assets/brands/trump.webp'
import newss from '../../../assets/brands/news.jpeg'
import nn from '../../../assets/brands/n.jpeg'
import { Authcontext } from '../../../context/Authprovider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import './rightnav.css';

const Rightnav = () => {    
  const {providerLogin} =  useContext(Authcontext)
  const googleprovider = new GoogleAuthProvider()
  const handleGooglsignin = () =>{
    providerLogin(googleprovider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .cathch(error => console.log(error))
  }
    return (
        <div className='rightnav'>
             <ButtonGroup vertical>
      <Button onClick={handleGooglsignin} className='mb-2' variant='outline-primary'> <FaGoogle></FaGoogle>  Signin with google</Button>
      <Button variant='outline-dark'><FaGithub></FaGithub> signin with github</Button>

    </ButtonGroup>

    <div className='mt-2'>
        <h5>Find us on</h5>

        <ListGroup className='mt-2'>
      <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> facebook</ListGroup.Item>
      <ListGroup.Item className='mb-3'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-3'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-3'>Terms and contition</ListGroup.Item>
    </ListGroup>
    </div>
    <div>
    <Carousel>
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {newss}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {nn}
          alt="Third slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
            
        </div>
    );
};
export default Rightnav;
