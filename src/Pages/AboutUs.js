import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav, Container, NavDropdown, Image, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Img from '../assets/Screenshot 2023-12-08 164258.png';
import pic1 from '../assets/awake.png';
import pic2 from '../assets/Bethany.jpg';
import pic3 from '../assets/Workshop.jpg';
import pic4 from '../assets/capetown.jpg';
import pic5 from '../assets/sunshine.jpg';
import pic6 from '../assets/nfvf.jpg';
import '../Styles/AboutUs.css';
import { useState } from 'react';


export const AboutUs = () => {

    return (
        <div id="about">
            <div className="About">
                <h1 className="abtHeading">About Us</h1> </div>
            <Container>
                <Row className='px-4 my-5'>
                    <Col sm={7}>

                        <Image src={Img}
                            fluid
                            rounded
                            className='abtImg' />

                    </Col>


                    <Col className="paragraph" sm={4}>
                        <p class='font-weigh-light' className="abtTxt">The Mbawula Film Festival is a
                            storytelling initiative that is
                            designed to nurture, educate &
                            encourage literacy through film. <br /> <br />
                            Quality films are presented in a
                            non-competitive, utilitarian way
                            with strands that emphasize human rights,
                            social issues and the environment.The Sense Of Community Is Beautiful And Necessary To Bridge The Gap In Getting Our Mission And Vision Across Of Architecting Change.
                            <br /> <br />Since 2021 the festivals includes film screenings,
                            panel discussions, workshops and exhibitions. We have hosted these events in Kimberley, Kuruman, Platfontein and Barkely West. </p>
                    </Col>
                </Row>
            </Container>

            <div className="abt">
                <h1 className="abtHeading">Our Sponsors</h1>
                <h3 className="subHeading">Our sponsors and collaborators are Awakening Creative Projects, National Film and Video Foundation, Heinrich Böll <br />
                    Stiftung Office Cape Town, Sunshine Cinema, The Workshop ko Kasi , Bethany Foundation and many more.</h3>
            </div>
            <Container>
                <Row>
                    <Col xs={6} md={4}><img src={pic1} alt="" className="ImgSponsor" /></Col>
                    <Col xs={6} md={4}> <img src={pic2} alt="" className="ImgSponsor" /></Col>
                    <Col xs={6} md={4}> <img src={pic3} alt="" className="ImgSponsor" /></Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}> <img src={pic4} alt="" className="ImgSponsor" /></Col>
                    <Col xs={6} md={4}> <img src={pic5} alt="" className="ImgSponsor" /></Col>
                    <Col xs={6} md={4}> <img src={pic6} alt="" className="ImgSponsor" /></Col>
                </Row></Container>
        </div>
    )
}