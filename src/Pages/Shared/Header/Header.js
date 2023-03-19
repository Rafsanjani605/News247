import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/Authprovider/AuthProvider';
import Sidenav from '../sideNav/Sidenav';
import './header.css'



const Header = () => {
  const { user , logout } = useContext(Authcontext)

  const handlelogout = () =>{
    logout()
    .then(() => {})
    .catch( error => console.log(error))
  }
  console.log(user)
  // const userPhotoURL = user?.photoURL || '';
    return (
     <div className='header'>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">News 247</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link>
              {
               user?.uid?
               <>
               <span className='px-'>{user.displayName}</span>
               <Button variant ="light" onClick={handlelogout} className="mr-3">Log out</Button>
               </>
                
               :
               <>
               <Link className='pe-3' to='/login'>login</Link>
               <Link to='/signup'>Sign up</Link>
               </>
                
              }
             </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL ?
                <Image
                roundedCircle
                style={{height : '40px'}}
                src={user.photoURL}
                ></Image>
                :
                <FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
    );
};

export default Header;