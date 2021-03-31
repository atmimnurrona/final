import React, {useEffect, useState} from "react";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {connect} from "react-redux";
import {Redirect, useHistory, useParams} from 'react-router-dom'
import Containers from "../../components/Containers/Container";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";
import {Row, Col, FormGroup, Input, Label, Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import {findRoleByIdAction, removeByIdRoleAction, saveRoleAction, updateRoleAction} from "../../actions/roleAction";


const RoleMenu = ({saveRoleAction, saveRole, error, isLoading, role, findRoleByIdAction, updateRoleAction}) => {
    const {id} = useParams()
    const [redirect] = useState(false)

    const [data, setData] = useState({
        name: "",
        inputCustomer: false,
        readAllCustomer: false,
        inputTransaction: false,
        readAllTransaction: false,
        approveTransaction: false,
        readAllReport: false,
        readAllReportByTransaction: false
    })
    const history = useHistory()

    useEffect(() => {
        if (id) {
            findRoleByIdAction(id)
        }
    }, [id, findRoleByIdAction])

    useEffect(() => {
        if (id && role) {
            setData({...role})
        }
    }, role)

    useEffect(() => {
        if (saveRole) {
            swal("Add Loan Purpose Success", "", "success")
            history.push('/role')
        }
        if (error) {
            swal("Sorry data already exist", '', "error")
        }
    }, [saveRole, history, error])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value})

    }

    const handleChecked = (e) => {
        let name = e.target.name
        let value = e.target.checked
        setData({...data, [name]: value})
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateRoleAction(id, data)
        } else {
            saveRoleAction(data)
        }
        swal("Save Success!", "", "success");
        console.log("handlesubmit", data)
        history.push('/role')
    }

    if (redirect === true) {
        return <Redirect to="/role"/>
    }

    return (
        <div>
            {
                localStorage.getItem("master") == "true" ?
                    <>
                        <Containers>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">Management Role</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-8" style={{alignContent: "center"}}>

                                                <div className="card">
                                                    <div className="card-header border-0">
                                                    </div>

                                                    <div className="card-body table-responsive">
                                                        <form onSubmit={handleSubmit}>
                                                            <FormGroup row>
                                                                <Col>
                                                                    <h6 style={{textAlign: "left", color: "grey"}}>Role
                                                                        name
                                                                        <span style={{color: "red"}}> *</span>
                                                                    </h6>
                                                                </Col>
                                                                <Col sm={12} style={{textAlign: "left"}}>
                                                                    <Input
                                                                        required
                                                                        onChange={handleChange}
                                                                        value={data?.name}
                                                                        type="text"
                                                                        name="name"
                                                                        placeholder="input role"/>
                                                                </Col>
                                                            </FormGroup><br/>

                                                            <Row>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <h4>Customer</h4>
                                                                </Col>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="inputCustomer"
                                                                               onChange={handleChecked}
                                                                               checked={data.inputCustomer}
                                                                               value={data.inputCustomer}
                                                                               id="defaultCheck1"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck1">
                                                                            Input Customer
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllCustomer"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllCustomer}
                                                                               checked={data?.readAllCustomer}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Customer
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <hr/>
                                                            <Row>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <h4>Transaction</h4>
                                                                </Col>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="inputTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.inputTransaction}
                                                                               checked={data?.inputTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Input Transaction
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllTransaction}
                                                                               checked={data?.readAllTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Transaction
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="approveTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.approveTransaction}
                                                                               checked={data?.approveTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Approval Transaction
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <hr/>
                                                            <Row>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <h4>Report</h4>
                                                                </Col>
                                                                <Col style={{textAlign: "left"}}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllReport"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllReport}
                                                                               checked={data?.readAllReport}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read All Report
                                                                        </label>
                                                                    </div>

                                                                    <div className="form-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox"
                                                                               name="readAllReportByTransaction"
                                                                               onChange={handleChecked}
                                                                               value={data?.readAllReportByTransaction}
                                                                               checked={data?.readAllReportByTransaction}
                                                                               id="defaultCheck2"/>
                                                                        <label className="form-check-label"
                                                                               htmlFor="defaultCheck2">
                                                                            Read Report By Submitter
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col/>
                                                            </Row>
                                                            <br/>

                                                            <Row>
                                                                <Col sm={{size: 10, offset: 2}}
                                                                     style={{textAlign: "right"}}>
                                                                    <Button style={{background: "#e42256"}}>
                                                                        <FontAwesomeIcon icon={faSave}/>
                                                                        Submit
                                                                    </Button> {' '}
                                                                    <Button href="/role"
                                                                            style={{background: "#e42256"}}>
                                                                        <FontAwesomeIcon
                                                                            icon={faArrowLeft}/>
                                                                        Cancel
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<Footer/>*/}

                        </Containers>
                        <Footer/>
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
    return {
        saveRole: state.saveRoleReducer .data,
        error: state.saveRoleReducer.error,
        isLoading: state.saveRoleReducer.isLoading || state.findRoleByIdReducer.isLoading,
        role: state.findRoleByIdReducer.data,

    }
}

const mapDispatchToProps = {
    saveRoleAction,
    findRoleByIdAction,
    removeByIdRoleAction,
    updateRoleAction
}


export default connect(mapStateToProps, mapDispatchToProps)(RoleMenu)