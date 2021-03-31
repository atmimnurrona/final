import React, {useState} from "react";
import {
    NavbarBrand,
    Navbar,
    UncontrolledDropdown,
    NavbarToggler,
    Collapse,
    NavLink,
    NavItem,
    Nav,
    DropdownMenu,
    DropdownToggle,
    DropdownItem
} from "reactstrap";
import "./navbarStyle.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckDouble,
    faCopy,
    faHome,
    faListAlt,
    faMoneyCheck, faSignOutAlt,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

const HeaderMaster = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleOnclick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('roles')
        localStorage.removeItem('username')
    }


    return (
        <div>
            <Navbar className="navbar" light expand="sm" >
                <NavbarBrand href="/master/home" style={{color: "#fff", fontSize : "2vw"}}>OK'Finance</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="nav-item">
                            <NavLink href="/master/home" style={{fontSize:"20px", color:"#FFffff"}}><FontAwesomeIcon icon={faHome} style={{color:"#FFffff"}}/> Home  </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faUsers} style={{color:"#FFffff"}}/>  Customer
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/customer/form" style={{fontSize:"20px", color:"#e42256"}}>
                                        <FontAwesomeIcon icon={faCopy} style={{color:"#e42256"}}/>  Form Customer</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/customer" style={{fontSize:"20px", color:"#e42256"}}>
                                        <FontAwesomeIcon icon={faListAlt} style={{color:"#e42256"}}/>  List Customer</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="nav-item">
                            <NavLink href="/master/transaction" style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faMoneyCheck} style={{color:"#FFffff"}}/>  Transaction</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink href="/master/report" style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faCheckDouble} style={{color:"#FFffff"}}/>  Report</NavLink>
                        </NavItem>
                        <NavItem className="nav-item" >
                            <NavLink href="/" onClick={handleOnclick} style={{fontSize:"20px", color:"#FFffff"}}>
                                <FontAwesomeIcon icon={faSignOutAlt} style={{color:"#FFffff"}}/>  Log out</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default HeaderMaster