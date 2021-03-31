import {
    Navbar,
    NavDropdown,
    Nav,
} from "react-bootstrap";
import {Link} from 'react-router-dom'
import React from "react";


const NavBar = () => {
    return (
        <Navbar bg="black" expand="lg">
                <Navbar.Brand href="#home"> CREDIT </Navbar.Brand>
                <Navbar.Brand href="#home">
                    <Link to="/" style={{color:"black"}} >
                        HOME
                    </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="CREDIT" id="basic-nav-dropdown" style={{color:"black"}}>
                            <NavDropdown.Item href="#action/3.1">
                                <Link to="/customer"  style={{color:"black"}} >
                                    CUSTOMER
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Link to="/transaction" style={{color:"black"}}>
                                    {" "}
                                    TRANSACTION
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Link to="/customer/add" style={{color:"black"}}>
                                    {" "}
                                    ADD CUSTOMER
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
