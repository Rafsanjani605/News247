import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Rightnav from '../Pages/Shared/rightnav/Rightnav';
import Sidenav from '../Pages/Shared/sideNav/Sidenav';
import './main.css'

const Main = () => {
    return (
        <div className='main'>
            <div className='text-center'>
                <Header className='head'></Header>
            </div>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                    <Sidenav></Sidenav>
                    </Col>
                    <Col lg="7">
                    <Outlet></Outlet>
                    
                    </Col>
                    <Col lg="3">
                    <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;