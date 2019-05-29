import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './Header.css';

const header = () => (
    
    <Navbar bg="gray" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/Wiley_logo.svg"
            width="65"
            height="65"
            className="d-inline-block align-top"
            alt="Wiley logo"
            />
           </Navbar.Brand>
           <Navbar.Brand href="#home">Skill Matix</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Logged as: <a href="#login">Manoj</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);

export default header;