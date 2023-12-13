import React from "react";
import { Nav, Container, NavDropdown, Image, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/Screenshot 2023-12-08 085511.png'
import { useState } from 'react';
import '../Styles/ContactUs.css'


export const ContactUs = () => {

    return(
        <div id="contact">
         <Card className="text-center">
      <Card.Header className="Title">Contact Us</Card.Header>
      <Card.Body>
        <Card.Title>Email Us:</Card.Title>
        <Card.Text className="bottom">
        tdthalogang@gmailcom
        </Card.Text>

        <Card.Title>Phone Us:</Card.Title>
        <Card.Text className="bottom">
        060 498 3032
        </Card.Text>

        <Card.Title>Location:</Card.Title>
        <Card.Text className="bottom">
        We are in the  Northern Cape, South Africa.
        </Card.Text>
      
      </Card.Body>
     
    </Card>
      </div>
    )}