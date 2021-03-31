import React, {Component} from "react";
import Cardbox from "./CardboxMaster";
import {Row, Jumbotron, Col} from "reactstrap";
import './HomeContainer.css';
import Image from "../../assets/images/undraw_Code_thinking_re_gka2.svg"
import Header from "../../components/navbar/nav/Navbar";

class HomeContainerAdmin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron">
                    <Jumbotron className="jumbotron-fluid" style={{height:"30vh"}}>
                        <Row style={{marginTop:"-5%"}}>
                            <Col>
                                <h1 style={{color: "#e42256", fontSize:"5vw", marginLeft:"15%"}}>Hello, Admin!</h1>
                                <p style={{fontSize:"2vw", marginLeft:"15%"}}>What do you want to do?</p>
                            </Col>
                            <Col>
                                <img src = {Image} alt="image" className="img-fluid float-right" style={{marginRight:"15%"}}/>
                            </Col>
                        </Row>
                    </Jumbotron>
                </div>
                <Cardbox/>
            </div>
        );
    }
}

export default HomeContainerAdmin;