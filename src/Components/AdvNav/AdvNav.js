import React from 'react'
import {
    Navbar,
    Nav,
    NavLink,
    Container,
    NavDropdown
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useHistory} from "react-router-dom";
import "./AdvNav.css"
const AdvNav = () => {
    let history = useHistory()
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>ohmygoat.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <NavLink as={Link}
                                to="/home">Home</NavLink>
                            <NavDropdown title="My Club" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/club-members">
                                    Club Members
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/club-events">
                                    Club Events
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/documents">
                                    Documents
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/view-club">
                                    View Club
                                </NavDropdown.Item>
                            
                            </NavDropdown>

                            <NavLink as={Link}
                                to="/notifications">Notification</NavLink>
                            <NavLink as={Link}
                                to="/"
                                onClick={
                                    () => {
                                        sessionStorage.clear()
                                        window.location.reload();


                                    }
                            }>Logout</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AdvNav
