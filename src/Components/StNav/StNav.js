import React from 'react'
import {Navbar, Nav, NavLink, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useHistory} from "react-router-dom";

const StNav = () => {
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
                            <NavLink as={Link}
                                to="/assignments">Assignment</NavLink>
                            <NavLink as={Link}
                                to="/clubs">Clubs</NavLink>
                            <NavLink as={Link}
                                to="/notifications">Notification</NavLink>
                            <NavLink as={Link}
                                to="/myprofile">My Profile</NavLink>
                            <NavLink as={Link}
                                to="/"
                                onClick={
                                    () => {
                                        localStorage.clear()
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

export default StNav


/*<Nav.Link><p onClick={()=>{history.push("/home")}}>Home</p></Nav.Link>
<Nav.Link><p onClick={()=>{history.push("/assignments")}}>Assignment</p></Nav.Link>
<Nav.Link><p onClick={()=>{history.push("/clubs")}}>Clubs</p></Nav.Link>
<Nav.Link><p onClick={()=>{history.push("/notifications")}}>Notification</p></Nav.Link>
<Nav.Link><p onClick={()=>{history.push("/myprofile")}}>My Profile</p></Nav.Link>
<Nav.Link><p onClick={()=>{history.push("/login")}}>Logout</p></Nav.Link> * */
