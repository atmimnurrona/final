import React, {useState} from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckDouble,
    faHome,
    faMoneyCheck,
    faSignOutAlt,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleOnclick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('roles')
        localStorage.removeItem('username')
    }

        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar style={{background:"#e42256"}} expand="lg" sticky="top">
                                <Navbar.Brand style={{color:"#FFffff"}}>OK'200</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/master/home" style={{color:"#FFffff"}}><FontAwesomeIcon icon={faHome}/></Nav.Link>
                                    </Nav>
                                    <Nav.Link href="/customer" style={{color:"#FFffff"}}><FontAwesomeIcon icon={faUsers}/></Nav.Link>
                                    <Nav.Link href="/master/transaction" style={{color:"#FFffff"}}><FontAwesomeIcon icon={faMoneyCheck}/></Nav.Link>
                                    <Nav.Link href="/master/report" style={{color:"#FFffff"}}><FontAwesomeIcon icon={faCheckDouble}/></Nav.Link>
                                    <Nav.Link href="/" style={{color:"#FFffff"}}><FontAwesomeIcon icon={faSignOutAlt}/></Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                        </Router>
                    </div>
                </div>
            </div>
        )
    }

export default Header;