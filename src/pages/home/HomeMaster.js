import React, {Component} from "react";
import CardboxMaster from "./card/CardboxMaster";
import {Row, Button, Jumbotron, Col} from "reactstrap";
import './home.css';
import Image from "../../assets/images/undraw_Code_thinking_re_gka2.svg"
import HeaderMaster from "../../components/navbar/NavbarMaster";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/sidebar/SideNavBar";
import BootstrapNavbar from "../Home";

class HomeMaster extends Component {
    render() {
        return (

            <div>
                {
                    localStorage.getItem("roles") == "MASTER" ?
                        <>
                            {/*<HeaderMaster/>*/}
                            <BootstrapNavbar/>
                            <Sidebar/>
                            <div className="jumbotron">
                                <Jumbotron className="jumbotron-fluid" style={{height: "30vh"}}>
                                    <Row style={{marginTop: "-5%"}}>
                                        <Col>
                                            <h1 style={{color: "#e42256", fontSize: "5vw", marginLeft: "15%"}}>
                                                Hello, {localStorage.getItem('username')}!</h1>
                                            <p style={{fontSize: "2vw", marginLeft: "15%"}}>What do you want to do?</p>
                                            <Button href="/register"
                                                    style={{background: "#e42256", marginLeft: "15%", marginTop: "5%"}}><FontAwesomeIcon
                                                icon={faPlus}/> New Account</Button>
                                        </Col>
                                        <Col>
                                            <img src={Image} alt="image" className="img-fluid float-right"
                                                 style={{marginRight: "15%"}}/>
                                        </Col>
                                    </Row>
                                </Jumbotron>
                            </div>
                            <CardboxMaster/>
                        </>
                        :
                        <div> cannot access</div>
                }
            </div>
        );
    }
}

export default HomeMaster;