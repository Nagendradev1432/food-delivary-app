import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CollapsibleExample.css'; // Import the CSS file

function CollapsibleExample() {
  return (
    <div className="background-container">
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
           <h1>Nv foods</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="About">
               <p style={{marginTop:"11px",fontSize:"30px",marginLeft:"-20px"}}>About</p>
              </Nav.Link>
             
              <Nav.Link href="#login" className="Login">
                <button style={{backgroundColor:"black",width:"140px",height:"50px",color:"white",borderRadius:"30px"}}>Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <div className='content-container'>
      <img  src="swiggy1.jpg" alt="Left Vegetables" />
      <div className='content-dispaly'>
        <p>Order food & groceries. Discover best restaurants. NV foods!</p>
        <div className='input-button'>
        <input type="text" placeholder="Search for restaurant, item or more" />
        <button>Search</button>
        </div>
       
      </div>
      <img src="swiggy2.jpg" alt="Right Sushi" />
      </div>
      <div className='three-images'>
        <img src='navbar.jpg' alt='images' className='image1' style={{height:"290px"}}/>
        <img src='navbar1.jpg' alt='images'className='image1'  style={{height:"290px"}}/>
        <img src='navbar2.jpg' alt='images' className='image1' style={{height:"290px"}}/>
        
      </div>
      </div>
  );
}

export default CollapsibleExample;
