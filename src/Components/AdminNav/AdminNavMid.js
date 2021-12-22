import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Link } from "react-router-dom";
import {useHistory} from  "react-router-dom";

const AdminNavMid = () => {
    let history =   useHistory()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand >ohmygoat.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>	  
                    <div class="d-flex ms-auto order-5">
                    <Nav.Link><p onClick={()=>{history.push("/homepage")}}>Back To Main Menu</p></Nav.Link> 
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default AdminNavMid