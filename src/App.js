import { Nav, Container, NavDropdown, Image, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './assets/Screenshot 2023-12-08 085511.png';
import logo2 from './assets/Screenshot 2023-12-13 110757.png';
import img1 from './assets/play.png';
import img2 from './assets/instagram.png';
import img3 from './assets/facebook.png';
import './App.css';
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/AboutUs';
import { Gallery } from './Pages/Gallery';
import { ContactUs } from './Pages/ContactUs';
import { Footer } from './Pages/Footer';

function App() {
  return (
    <div className="App">


      <div><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Image src={logo2} alt=""
            style={{ width: '100px', height: '90px' }} thumbnail /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
           

          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className='socials'>
            
<Nav.Link href="https://www.youtube.com/watch?v=E_yLLWdNd5w"><Image src={img1} alt=""
  style={{ width: '31px', height: '29px', margin: '7px' }} /></Nav.Link>
<Nav.Link href="https://www.instagram.com/mbawulayouthfilmfest/"><Image src={img2} alt=""
  style={{ width: '31px', height: '29px', margin: '7px' }} /></Nav.Link>
<Nav.Link href="https://www.facebook.com/mbawulayouthfilmfest"><Image src={img3} alt=""
  style={{ width: '31px', height: '29px', margin: '7px' }} /></Nav.Link>

</Navbar.Brand>
      </Container>
    </Navbar></div>

      <Home/>

      <AboutUs/>

      <Gallery/>

      <ContactUs/>

      <Footer/>

    </div>
  );
}

export default App;
