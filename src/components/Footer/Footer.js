import React from 'react';

import "./Footer.css";

import Navbar from 'react-bootstrap/Navbar';

const footer = () => (
    <Navbar  bg="lightgray" variant="lightgray" fixed="bottom">
        <Navbar.Brand>Wiley © 2019</Navbar.Brand>
    </Navbar>
);

export default footer;