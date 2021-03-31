import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom'
import {Row, Col, Table} from "reactstrap";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";


function ReportDetail() {

    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {

    }, [])

    return(
        <div>
            {
                localStorage.getItem("readAllReport") ?
                    <>
                        <div>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">Detail Report</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card">
                                                    <div className="card-header border-0">
                                                        <div className="card-tools">
                                                            <a href="#" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-pencil-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <Table>

                                                            <Row>
                                                                <Col xs="6" sm="4">DATA CUSTOMER :</Col>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Name</Col>
                                                                <Col sm="4">Eka</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Email</Col>
                                                                <Col sm="4">Eka@gmail.com</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Id Number</Col>
                                                                <Col sm="4">1234568647834</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Address</Col>
                                                                <Col sm="4">Samping Kamar</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Employee Type</Col>
                                                                <Col sm="4">Non</Col>
                                                            </Row>

                                                            <hr/>

                                                            <Row>
                                                                <Col xs="6" sm="4">TRANSACTION :</Col>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Income</Col>
                                                                <Col sm="4">1000</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Outcome</Col>
                                                                <Col sm="4">300</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Loan</Col>
                                                                <Col sm="4">100</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Interest Rate</Col>
                                                                <Col sm="4">2%</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Tenor</Col>
                                                                <Col sm="4">3</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Main Loan</Col>
                                                                <Col sm="4">1,67</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Interest</Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Installment Total</Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Installment</Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Credit ratio</Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>

                                                            <hr/>

                                                            <Row>
                                                                <Col xs="6" sm="4">APPROVED :</Col>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Finance Criteria</Col>
                                                                <Col sm="4">true</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Employee Criteria</Col>
                                                                <Col sm="4">true</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Submitted Date</Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="6" sm="4"> </Col>
                                                                <Col xs="6" sm="4">Approved Date</Col>
                                                                <Col sm="4"> </Col>
                                                            </Row>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer/>

                        </div>
                    </>
                    :
                    <div>
                        <Error/>
                    </div>
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps) (ReportDetail)
