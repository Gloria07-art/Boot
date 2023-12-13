import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav, Container, NavDropdown, Image, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import '../Styles/Footer.css';
import { useState } from 'react';


export const Footer = () => {

    return( 
    <div  className="footer">
    <Nav className="justify-content-center" activeKey="/home" >
        <Nav.Item>
        <div className="footer-text">Powered by Mandelite <br/>
           </div>
           <div className="footer-text">Copyright @ 2024 <br/>
           </div>
        </Nav.Item>
      </Nav>
     
      
      

  </div>

        
    )}