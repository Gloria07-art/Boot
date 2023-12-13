import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/Screenshot 2023-12-08 085511.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import img1 from '../assets/2021/251455970_126614773096604_6735717349596739023_n.jpg';
import img2 from '../assets/2021/251655554_126614836429931_1608719895292761405_n.jpg';
import img3 from '../assets/2021/252014218_126852653072816_8663127116287338934_n.jpg';
import img4 from '../assets/2021/252967308_127410233017058_8879887992969399171_n.jpg';
import img5 from '../assets/2021/258027083_130062369418511_1345113450953656939_n.jpg';
import img6 from '../assets/2021/258262086_130062539418494_3487150417665511039_n.jpg';

import photo1 from '../assets/2022/286794537_176561904768557_9051805675151816600_n.jpg';
import photo2 from '../assets/2022/288712435_176158081475606_5812708914927865418_n.jpg';
import photo3 from '../assets/2022/288809917_176160161475398_1469390139021476582_n.jpg';
import photo4 from '../assets/2022/289120060_176626948095386_2409720842612875072_n.jpg';
import photo5 from '../assets/2022/289225528_176582084766539_5581914995918332172_n.jpg';
import photo6 from '../assets/2022/289269621_176562448101836_7843958792178237577_n.jpg';

import pic1 from '../assets/2023/396720246_349961434213867_1394277843355307318_n.jpg';
import pic2 from '../assets/2023/397456148_353115920565085_7798306575083063465_n.jpg';
import pic3 from '../assets/2023/406270141_367128869163790_3625985318413052933_n.jpg';
import pic4 from '../assets/2023/406924754_367685045774839_1551050178180501462_n.jpg';
import pic5 from '../assets/2023/407239805_368325782377432_7435058766243016490_n.jpg';
import pic6 from '../assets/2023/407269926_367569102453100_338159342957721069_n.jpg';
import '../Styles/Gallery.css'
import { useState } from 'react';


export const Gallery = () => {
    const [key, setKey] = useState('home');

    return(
        <div  id="gallery" className="galleryMain">
<div className="Header"> <h1 className="Heading">Gallery</h1>
            <h3 className="subHeading">Here are some of the images from past festivals from 2021 to 2023 around the Northern Cape.</h3>
            </div>
<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="2021">
      <Row>
      <Col xs={6} md={4}><img src={img1} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={img2} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={img3} alt="" className="galImg"/></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}><img src={img4} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={img5} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={img6} alt="" className="galImg"/></Col>
      </Row>
      </Tab>

      <Tab eventKey="profile" title="2022">
      <Row>
      <Col xs={6} md={4}><img src={photo1} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={photo2} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={photo3} alt="" className="galImg"/></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}><img src={photo4} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={photo5} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={photo6} alt="" className="galImg"/></Col>
      </Row>
      </Tab>

      <Tab eventKey="contact" title="2023">
      <Row>
      <Col xs={6} md={4}><img src={pic1} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={pic2} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={pic3} alt="" className="galImg"/></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}><img src={pic4} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={pic5} alt="" className="galImg"/></Col>
        <Col xs={6} md={4}><img src={pic6} alt="" className="galImg"/></Col>
      </Row>
      </Tab>
    </Tabs>


    </div>
    )}