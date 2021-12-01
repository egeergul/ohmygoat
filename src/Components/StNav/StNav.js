import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'


const StNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >ohmygoat.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Assignments</Nav.Link>
                            <Nav.Link href="#">Clubs</Nav.Link>
                            <Nav.Link href="#">Notifications</Nav.Link>
                            <Nav.Link href="#">My Profile</Nav.Link>
                            <Nav.Link href="#">Logout</Nav.Link> 
                        </Nav>    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default StNav
