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
import "../navbarStyle.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckDouble,
    faCopy,
    faHome,
    faListAlt,
    faMoneyCheck, faSignOutAlt,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav class="navbar">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#"><span class="fa fa-home"></span><span class="link"> Home</span></a>
                    </div>

                    <div class="navbar-collapse collapse" id="collapse-1">

                        <ul class="nav navbar-nav">

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span class="fa fa-tags"></span><span class="link"> Products</span> <span class="fa fa-caret-down"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#"><span class="fa fa-tag"></span> Catalogue 1</a></li>
                                    <li><a href="#"><span class="fa fa-tag"></span> Catalogue 2</a></li>
                                </ul>
                            </li>

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span class="fa fa-gears"></span>
                                    <span class="link"> Services</span>
                                    <span class="fa fa-caret-down"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">
                                        <span class="fa fa-gear"/> Service 1</a></li>
                            <li><a href="#"><span class="fa fa-gear"/> Service 2</a></li>
                        <li><a href="#"><span class="fa fa-gear"/> Service 3</a></li>
                </ul>
            </li>

            <li><a href="#"><span class="fa fa-info-circle"></span><span class="link"> About</span></a></li>

            <li><a href="#"><span class="fa fa-phone"></span><span class="link"> Contact</span></a></li>
        </ul>

    <form class="navbar-form navbar-right">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Search"/>
        </div>
        <button type="submit" class="btn"><span class="fa fa-search"></span></button>
    </form>
</div>
</div>
</nav>
        </div>
    );
}

export default Header