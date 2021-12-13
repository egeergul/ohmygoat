import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Link } from "react-router-dom";
import {useHistory} from  "react-router-dom";

const StNav = () => {
    let history =   useHistory()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >ohmygoat.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link><p onClick={()=>{history.push("/home")}}>Home</p></Nav.Link>
                            <Nav.Link><p onClick={()=>{history.push("/assignments")}}>Assignment</p></Nav.Link>
                            <Nav.Link><p onClick={()=>{history.push("/clubs")}}>Clubs</p></Nav.Link>
                            <Nav.Link><p onClick={()=>{history.push("/notifications")}}>Notification</p></Nav.Link>
                            <Nav.Link><p onClick={()=>{history.push("/myprofile")}}>My Profile</p></Nav.Link>
                            <Nav.Link><p onClick={()=>{history.push("/login")}}>Logout</p></Nav.Link> 
                        </Nav>    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default StNav
