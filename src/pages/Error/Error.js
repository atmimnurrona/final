import React from 'react'
import undraw_page_not_found_su7k from "../../assets/images/undraw_page_not_found_su7k.svg";
import {FaFontAwesome} from "react-icons/all";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faHome} from "@fortawesome/free-solid-svg-icons";
import {Button} from "reactstrap";

const Error = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5 pr-lg-5 mb-md-0">
                    <div>
                        <img src={undraw_page_not_found_su7k} alt=""
                             className="img-fluid d-none d-md-block"/>
                    </div>
                </div>

                <div className="col-md-7 col-lg-6 ml-auto">
                    <h1 style={{color: "#e42256", fontSize: "55px"}}>Page not found!</h1><br/>
                    <h4 style={{color: "#e42256"}}>Sorry, you can not access this page!</h4><br/>
                    <h4 style={{color: "#e42256"}}>Please, back to home!</h4><br/>
                    <Button href="/dashboard"
                            style={{background: "#e42256"}}>
                        <FontAwesomeIcon
                            icon={faHome}/> Back
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Error