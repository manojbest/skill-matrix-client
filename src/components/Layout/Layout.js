import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import "./Layout.css";

const layout = (props) => (
    <React.Fragment>
    
    <Header/>
       
            <Row  className="Layout">
                <Col className="Navigation" md = "3">
                    <ListGroup>
                        <ListGroup.Item variant="light" action href="#link1">
                            My Skills
                        </ListGroup.Item>
                        <ListGroup.Item variant="light" action href="#link2">
                            Add Skills
                        </ListGroup.Item>
                        <ListGroup.Item variant="light" action href="#link3">
                            Search Skills
                        </ListGroup.Item>
                    </ListGroup>
                    
                </Col>
                <Col md = "1">
                    <div class="vl"></div>
                </Col>
                
                <Col md = "8">{props.children}</Col>
            </Row>
      
            
        <Footer/>
       
    </React.Fragment>
);

export default layout;