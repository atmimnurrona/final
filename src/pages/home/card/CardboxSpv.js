import {CardImg} from "react-bootstrap";
import React from "react";
import undraw_Hiring_re_yk5n from '../../../assets/images/undraw_Hiring_re_yk5n.svg';
import undraw_selection_re_ycpo from '../../../assets/images/undraw_selection_re_ycpo.svg';
import undraw_data_processing_yrrv from '../../../assets/images/undraw_data_processing_yrrv.svg';
import {Button, CardBody} from "reactstrap";
import '../home.css';

const CardboxSpv = (props) => {
    return (
        <div className="container">
            <div className="card-columns" style={{marginTop:"-70px"}}>
                <div className="card">
                    <div className="card-body text-center">
                        <CardImg
                            alt="Card image"
                            className="n-logo"
                            src={undraw_data_processing_yrrv}
                            height="250px"
                            width="300px"
                        />
                        <CardBody>
                            <Button href="/list/customer" size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>List Customer</Button>
                        </CardBody>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <CardImg
                            alt="Card image"
                            className="n-logo"
                            src={undraw_selection_re_ycpo}
                            height="250px"
                            width="300px"
                        />
                        <CardBody>
                            <Button href="/list/transaction" size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>List Transaction</Button>
                        </CardBody>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <CardImg
                            alt="Card image"
                            src={undraw_Hiring_re_yk5n}
                            height="250px"
                            width="300px"
                        />
                        <CardBody>
                            <Button href="/report" size="lg" block style={{background:"#E42256", borderBlockColor:"#FFB8B8", fontSize:"20px"}}>Report Transaction</Button>
                        </CardBody>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardboxSpv;