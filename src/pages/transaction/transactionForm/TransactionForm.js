import {InputGroupText, InputGroup, FormGroup, Form, Input, Label, Button, Col, Spinner} from "reactstrap";
import Container from "../../../components/Containers/Container";
import {Redirect, useHistory, useParams} from 'react-router-dom'
import {saveTransactionAction} from "../../../actions/transactionAction";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";
import {findCustomerByIdAction} from "../../../actions/customerAction";
import Header from "../../../components/dashboard/Header";
import Menu from "../../../components/dashboard/Menu";
import NumberFormat from 'react-number-format';
import {findAllNeedAction} from "../../../actions/needAction";
import {findAllNeedReducer} from "../../../configs/reducers/needReducer";
import swal from "sweetalert";
import Error from "../../Error";

const TransactionForm = ({savedTransaction, isLoading, error, saveTransactionAction, customer, findCustomerByIdAction, needs, findAllNeedAction}) => {
    const {id} = useParams()
    const [redirect] = useState(false)
    const [data, setData] = useState({
        customer: ""
    })
    const [currency, setCurrency] = useState({})
    const [checkLoan, setCheckLoan] = useState({
        maxLoan: 0,
        loan: 0
    })

    const history = useHistory()

    const onReload = () => {
        findAllNeedAction();
    }

    useEffect(onReload, [findAllNeedAction])

    useEffect(() => {
        findAllNeedAction()
    }, [findAllNeedAction])

    useEffect(() => {
        if (id !== data.customer) {
            findCustomerByIdAction(id);
            setData({
                ...data,
                customer: id
            })
        }
    }, [])

    useEffect(() => {
        // console.log(CUSTOMER , customer, DATA , data)
        console.log(data)
    }, [data])

    useEffect(() => {
        if (savedTransaction) {

            // if (localStorage.getItem("roles") == "MASTER") {
            //     swal("Success!", "Add transaction success!", "success");
            //     history.push('/transaction')
            // } else if (localStorage.getItem("roles") == "STAFF") {
            //     swal("Success!", "Add transaction success!", "success");
            //     history.push('/approval/staff')
            // } else {
            //     swal("*Sorry you are not allowed to sign here")
            // }
            history.push('/staff/transaction')
            swal("Success!", "Add transaction success!", "success")
        }
    }, [savedTransaction, history])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value})
    }

    const handleCurrencyIncome = (e) => {
        let name = e.target.name
        let value = e.target.value
        setCheckLoan({...checkLoan, maxLoan: parseInt(value.split(",").join(""))})

        if (parseInt(value) > 0) {
            setCurrency({...currency, [name]: value})
            setData({...data, [name]: value.split(",").join("")})
        } else {
            swal("must be positive vibes!", "", "error");
        }
    }
    const handleCurrencyLoan = (e) => {
        let name = e.target.name
        let value = e.target.value
        setCheckLoan({...checkLoan, loan: parseInt(value.split(",").join(""))})

        if (parseInt(value) > 0) {
            setCurrency({...currency, [name]: value})
            setData({...data, [name]: value.split(",").join("")})
        } else {
            swal("must be positive vibes!", "", "error");
        }
    }
    console.log("INCOME", checkLoan.maxLoan)
    console.log("LOAN", checkLoan.loan)
    const handleCurrency = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (parseInt(value) > 0) {
            setCurrency({...currency, [name]: value})
            setData({...data, [name]: value.split(",").join("")})
        } else {
            swal("must be positive vibes!", "", "error");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("EMPLOYEE", customer?.employeeType)
        if (customer?.employeeType == "NON"){
            if (checkLoan.maxLoan / 2 > checkLoan.loan) {
                saveTransactionAction(data)
            } else {
                swal("Sorry, Your loan is over");
            }
        } else {
            saveTransactionAction(data)
        }
    }
    // console.log("DATA s",data)

    if (redirect === true) {
        return <Redirect to='/transaction'/>
    }

    return (
        <div>
            {
                localStorage.getItem("inputTransaction") == "true" ?
                    <>
                        <Container error={error}/>
                        <Header/>
                        <Menu/>
                        <div className="content-wrapper">
                            <div className="content-header">
                                <div className="container-fluid">
                                    <div className="row mb-2">
                                        <div className="col-sm-6">
                                            <h1 className="m-0 text-dark">Form Transaction</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body table-responsive p-0">
                                                    <div className="col-md-12">
                                                        <div className="form form-container">
                                                            {!isLoading ? needs &&
                                                                <Form onSubmit={handleSubmit}>
                                                                    <FormGroup row>
                                                                        <Label for="income" sm={2}
                                                                               style={{textAlign: "left"}}>Income
                                                                            <span style={{color: "red"}}> *</span>
                                                                        </Label>
                                                                        <Col sm={10}>
                                                                            <InputGroup>
                                                                                <InputGroupText>Rp</InputGroupText>
                                                                                {/*<Input >*/}
                                                                                <NumberFormat
                                                                                    required
                                                                                    name="income"
                                                                                    min="0"
                                                                                    id="tanpa-rupiah"
                                                                                    onChange={handleCurrencyIncome}
                                                                                    placeholder="input nominal"
                                                                                    thousandSeparator={true}/>
                                                                                {/*</Input>*/}
                                                                                <InputGroupText>.00</InputGroupText>
                                                                            </InputGroup>
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <FormGroup row>
                                                                        <Label for="outcome" sm={2}
                                                                               style={{textAlign: "left"}}>Outcome
                                                                            <span style={{color: "red"}}> *</span>
                                                                        </Label>
                                                                        <Col sm={10}>
                                                                            <InputGroup>
                                                                                <InputGroupText>Rp</InputGroupText>
                                                                                <NumberFormat
                                                                                    required
                                                                                    name="outcome"
                                                                                    min="0"
                                                                                    id="tanpa-rupiah"
                                                                                    onChange={handleCurrency}
                                                                                    placeholder="input nominal"
                                                                                    thousandSeparator={true}/>
                                                                                <InputGroupText>.00</InputGroupText>
                                                                            </InputGroup>
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <FormGroup row>
                                                                        <Label for="loan" sm={2}
                                                                               style={{textAlign: "left"}}>Loan Amount
                                                                            <span style={{color: "red"}}> *</span>
                                                                        </Label>
                                                                        <Col sm={10}>
                                                                            <InputGroup>
                                                                                <InputGroupText>Rp</InputGroupText>
                                                                                <NumberFormat
                                                                                    style={{width:"63vw", height:"calc(1.5em + .75rem + 2px)",
                                                                                        borderRadius:"0.5vw", outlineColor:"#ced4da"}}
                                                                                    required
                                                                                    name="loan"
                                                                                    min="0"
                                                                                    id="tanpa-rupiah"
                                                                                    onChange={handleCurrencyLoan}
                                                                                    placeholder="input nominal"
                                                                                    thousandSeparator={true}/>
                                                                                <InputGroupText>.00</InputGroupText>
                                                                            </InputGroup>
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <FormGroup row>
                                                                        <Label htmlFor="tenor" sm={2}
                                                                               style={{textAlign: "left"}}>Tenor
                                                                            <span style={{color: "red"}}> *</span>
                                                                            <p style={{
                                                                                fontSize: "0.7vw",
                                                                                color: "grey"
                                                                            }}>(max. 6 month)</p>
                                                                        </Label>
                                                                        <Col sm={10}>
                                                                            <Input required
                                                                                   onChange={handleChange}
                                                                                   type="number" min="1" max={6}
                                                                                   name="tenor"
                                                                                   placeholder="tenor"/>
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <FormGroup row>
                                                                        <Label for="interestRate" sm={2}
                                                                               style={{textAlign: "left"}}>Interest Rate
                                                                            <span style={{color: "red"}}> *</span>
                                                                        </Label>
                                                                        <Col sm={10}>
                                                                            <InputGroup>
                                                                                <Input
                                                                                    required
                                                                                    onChange={handleChange}
                                                                                    name="interestRate"
                                                                                    placeholder="interest rate" min={0}
                                                                                    max={100}
                                                                                    type="number" min="0" step="1"/>
                                                                                <InputGroupText>%</InputGroupText>
                                                                            </InputGroup>
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <FormGroup row>
                                                                        <Label for="select" sm={2}
                                                                               style={{textAlign: "left"}}>Loan Purpose
                                                                            <span style={{color: "red"}}> *</span>
                                                                        </Label>
                                                                        <Col sm={10}>
                                                                            <select
                                                                                style={{width:"69vw", height:"calc(1.5em + .75rem + 2px)",
                                                                                    borderRadius:"0.5vw", outlineColor:"#ced4da"}}
                                                                                onChange={e => setData({
                                                                                ...data,
                                                                                needType: e.target.value
                                                                            })}>
                                                                                <option selected disabled hidden>Choose
                                                                                    here
                                                                                </option>
                                                                                {needs?.list?.map((e, i) => (
                                                                                    <option key={i} value={e.id}
                                                                                            data={e}
                                                                                            selected={e.id == data?.id || false}>{e.type}</option>
                                                                                ))}
                                                                            </select>
                                                                        </Col>
                                                                    </FormGroup>

                                                                    <FormGroup row>
                                                                        <Label for="notes" sm={2}
                                                                               style={{textAlign: "left"}}>Note
                                                                            <span style={{color: "red"}}> *</span>
                                                                            <p style={{
                                                                                fontSize: "0.7vw",
                                                                                color: "grey"
                                                                            }}>(max. 250 character )</p>
                                                                        </Label>
                                                                        <Col sm={10}>
                                                                            <Input
                                                                                required
                                                                                onChange={handleChange}
                                                                                type="textarea"
                                                                                name="notes"
                                                                                id="notes"
                                                                                maxLength={250}
                                                                                placeholder="input note"/>
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <FormGroup check row>
                                                                        <Col sm={{size: 10, offset: 2}}>
                                                                            <Button style={{background: "#e42256"}}>
                                                                                <FontAwesomeIcon icon={faSave}/>
                                                                                Submit
                                                                            </Button> {' '}
                                                                            <Button href="/customer/staff"
                                                                                    style={{background: "#e42256"}}>
                                                                                <FontAwesomeIcon icon={faArrowLeft}/>
                                                                                Cancel
                                                                            </Button>
                                                                        </Col>
                                                                    </FormGroup>
                                                                </Form> :
                                                                <div>
                                                                    <Spinner style={{
                                                                        width: '5rem',
                                                                        height: '5rem',
                                                                        color: "#e42256"
                                                                    }}/>{' '}
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    return {
        customer: state.findCustomerByIdReducer.data,
        savedTransaction: state.saveTransactionReducer.data,
        isLoading: state.saveTransactionReducer.isLoading,
        error: state.saveTransactionReducer.error,
        needs: state.findAllNeedReducer.data
    }
    console.log("mapStateToProps", findAllNeedReducer.data)
}

const mapDispatchToProps = {findCustomerByIdAction, saveTransactionAction, findAllNeedAction}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)