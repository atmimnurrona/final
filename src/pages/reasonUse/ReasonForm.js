import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {Button, Form, FormGroup, Input, Label, Col} from "reactstrap";
import {findNeedByIdAction, saveNeedAction, updateNeedAction} from "../../actions/needAction";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";
import swal from "sweetalert";

const ReasonForm = ({saveNeedAction, saveNeedType, error, isLoading, needType, findNeedByIdAction, update, updateNeedAction}) => {
    const {id} = useParams()
    const [redirect] = useState(false)

    const [data, setData] = useState({})
    const history = useHistory()

    useEffect(() => {
        if (id) {
            findNeedByIdAction(id)
        }
    }, [id, findNeedByIdAction])

    useEffect(() => {
        if (id && needType) {
            setData({...needType})
        }
    }, [needType])

    useEffect(() => {
        if (saveNeedType) {
            swal("Add Loan Purpose Success", "", "success")
            history.push('/need')
        }
        if (error) {
            swal("Sorry data already exist", '', "error")
        }
        console.log("error", error)
    }, [saveNeedType, history, error])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value})

        console.log("handlechange", data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateNeedAction(id, data)
        } else {
            saveNeedAction(data)
        }
        swal("Save Success!", "", "success");
        console.log("handlesubmit", data)
        history.push('/need')
    }

    if (redirect === true) {
        return <Redirect to="/need"/>
    }

    return (
        <div>
            {
                localStorage.getItem("master") == "true" ?
                    <>
                        <div>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">Need Type</h1>
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
                                                                {!isLoading ?
                                                                    <Form onSubmit={(e) => handleSubmit(e)}>
                                                                        <FormGroup row>
                                                                            <Label htmlFor="type" sm={3}
                                                                                   style={{textAlign: "left"}}>Need
                                                                                Type</Label>
                                                                            <Col sm={9}>
                                                                                <Input
                                                                                    required
                                                                                    onChange={handleChange}
                                                                                    value={data?.type || ''}
                                                                                    type="text"
                                                                                    name="type"
                                                                                    placeholder="input need type"/>
                                                                            </Col>
                                                                        </FormGroup>
                                                                        <FormGroup check row>
                                                                            <Col sm={{size: 10, offset: 2}}>
                                                                                <Button style={{background: "#e42256"}}>
                                                                                    <FontAwesomeIcon icon={faSave}/>
                                                                                    Submit
                                                                                </Button> {' '}
                                                                                <Button href="/need"
                                                                                        style={{background: "#e42256"}}>
                                                                                    <FontAwesomeIcon
                                                                                        icon={faArrowLeft}/>
                                                                                    Cancel
                                                                                </Button>
                                                                            </Col>
                                                                        </FormGroup>

                                                                    </Form> :
                                                                    <div>Loading...</div>
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
                        </div>
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
        saveNeedType: state.saveNeedReducer.data,
        error: state.saveNeedReducer.error,
        isLoading: state.saveNeedReducer.isLoading || state.findNeedTypeByIdReducer.isLoading,
        needType: state.findNeedTypeByIdReducer.data,
        update: state.updateNeedTypeReducer.data


    }
}

const mapDispatchToProps = {
    saveNeedAction,
    updateNeedAction,
    findNeedByIdAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ReasonForm)