import React, {useEffect, useState} from 'react';
import {Redirect, useHistory, useParams} from 'react-router-dom'
import undraw_Updated_resume_re_q1or from "../../assets/images/undraw_Updated_resume_re_q1or.svg"
import {
    faEnvelope, faKey,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./login.css"
import {Spinner, Input, Label, FormGroup, Button, Container, Form, Col} from "reactstrap";
import {findAccountByIdAction, saveAccountAction} from "../../actions/signupAction";
import {connect} from "react-redux";
import DropdownList from "../../components/DropdownList/DropdownList";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import swal from "sweetalert";
import Error from "../Error";
import {findAllRoleAction} from "../../actions/roleAction";
import Footer from "../../components/dashboard/Footer";

const SignUp = ({saveDispatch, error, saveAccount, account, isLoading, findAccountByIdAction, roles, findAllRoleAction}) => {
    const {id} = useParams()
    const [redirect] = useState(false)

    const [photo, setPhoto] = useState({
        profilePicture: {}
    })
    const [data, setData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
        profilePicture: "",
        role: ""
    })
    const history = useHistory()

    const onReload = () => {
        findAllRoleAction()
    }
    useEffect(onReload, [findAllRoleAction])

    useEffect(() => {
        findAllRoleAction()
    }, [findAllRoleAction])

    useEffect(() => {
        if (id) {
            findAccountByIdAction(id)
        }
        console.log("")
    }, [id, findAccountByIdAction])

    useEffect(() => {
        if (id && account) {
            setData({...account})
        }
    }, [account])
    console.log("ini id", id)

    // console.log("this account", model)
    // useEffect(() => {
    //     if (id !== data.id) {
    //         findAccountByIdAction(id);
    //         setData(account)
    //     }
    //     console.log("AKUN", account)
    //     console.log("DATA", data.id)
    //     console.log(data)
    // }, [account])

    useEffect(() => {
        if (saveAccount) {
            swal("Register Success", "", "success")
            history.push('/master')
        }
        if (error) {
            swal("Register error", `${error.message}`, "error")
        }
    }, [saveAccount, history, error])

    const handlePhoto = async (e) => {
        let name = e.target.name
        let value = e.target.files[0]
        setPhoto({...photo, [name]: value})

        const formData = new FormData()
        formData.append("file", value)
        formData.append("upload_preset", "ve2u0qv8")

        const response = await fetch("https://api.cloudinary.com/v1_1/nielnaga/image/upload", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: formData // body data type must match "Content-Type" header
        }).then(res => res.json())
            .then(res => {
                console.log(res.url)
                setData({
                    ...data,
                    [name]: res.url
                })
            })
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value})
    }

    const handleRoles = (e) => {
        setData({
            ...data,
            role: e
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        saveDispatch(data)
        swal("Save Success!", "", "success");

        console.log("submit" , data)
    }

    if (redirect === true) {
        return <Redirect to="/master"/>
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

                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card">
                                                    <div className="card-header border-0">
                                                        {/*<h3 className="card-title">Detail Customer</h3>*/}
                                                        <div className="card-tools">
                                                            <a href="/master" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-arrow-left"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <div className="col-md-12">
                                                            <div className="form form-container">
                                                                <div className="row align-items-center">

                                                                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                                                                        <img src={undraw_Updated_resume_re_q1or} alt=""
                                                                             className="img-fluid mb-3 d-none d-md-block"/>
                                                                    </div>

                                                                    <div className="col-md-7 col-lg-6 ml-auto">

                                                                        <h1 style={{
                                                                            color: "#e42256",
                                                                            fontSize: "55px"
                                                                        }}>Account</h1>

                                                                        {!isLoading ?
                                                                            <Form onSubmit={handleSubmit}>
                                                                                <div className="row">
                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                                                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                                <FontAwesomeIcon icon={faUserCircle}/>
                                                                                            </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            onChange={handleChange}
                                                                                            value={data?.fullName || ""}
                                                                                            type="text"
                                                                                            name="fullName"
                                                                                            placeholder="Full Name"
                                                                                            className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                    </div>


                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                                                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                                <FontAwesomeIcon icon={faUser}/>
                                                                                            </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            onChange={handleChange}
                                                                                            value={data.username || ""}
                                                                                            type="text"
                                                                                            name="username"
                                                                                            placeholder="Username"
                                                                                            minLength={4}
                                                                                            maxLength={10}
                                                                                            className="form-control bg-white border-left-0 border-md"/>
                                                                                    </div>

                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                                                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                                <FontAwesomeIcon icon={faEnvelope}/>
                                                                                            </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            onChange={handleChange}
                                                                                            value={data.email || ""}
                                                                                            type="email"
                                                                                            name="email"
                                                                                            placeholder="Email Address"
                                                                                            className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                    </div>

                                                                                    {
                                                                                        window.location.pathname != "/register" ?
                                                                                            <div
                                                                                                className="input-group col-lg-12 mb-4">
                                                                                                <div
                                                                                                    className="input-group-prepend">
                                                                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                                <FontAwesomeIcon icon={faKey}/>
                                                                                            </span>
                                                                                                </div>
                                                                                                <input
                                                                                                    required
                                                                                                    onChange={handleChange}
                                                                                                    value={data.password || ""}
                                                                                                    type="password"
                                                                                                    name="password"
                                                                                                    placeholder="Input new password"
                                                                                                    className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                            </div>
: <> </>
                                                                                    }

                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">

                                                                                        <div>
                                                                                            <Col sm={15}>
                                                                                                <select
                                                                                                    style={{width:"35vw", height:"calc(1.5em + .75rem + 2px)",
                                                                                                        borderRadius:"0.5vw", outlineColor:"#ced4da"}}
                                                                                                    onChange={e => setData({
                                                                                                        ...data,
                                                                                                        role: e.target.value
                                                                                                    })}>
                                                                                                    <option selected disabled hidden>Choose
                                                                                                        here
                                                                                                    </option>
                                                                                                    {roles?.list?.map((e, i) => (
                                                                                                        <option key={i} value={e.name}
                                                                                                                data={e}
                                                                                                                selected={e.id == data?.id || false}>{e.name}</option>
                                                                                                    ))}
                                                                                                </select>
                                                                                            </Col>
                                                                                        </div>
                                                                                    </div>

                                                                                    {/*<div*/}
                                                                                    {/*    className="input-group col-lg-12 mb-4">*/}
                                                                                    {/*    <FormGroup>*/}
                                                                                    {/*        <Label for="profilePicture"*/}
                                                                                    {/*               sm={4}>Profile*/}
                                                                                    {/*            Photo</Label>*/}
                                                                                    {/*        <Col sm={12}>*/}
                                                                                    {/*            <Input*/}
                                                                                    {/*                type="file"*/}
                                                                                    {/*                name="profilePicture"*/}
                                                                                    {/*                onChange={handlePhoto}*/}
                                                                                    {/*                accept="image/jpeg, image/png"/>*/}
                                                                                    {/*        </Col>*/}
                                                                                    {/*    </FormGroup>*/}
                                                                                    {/*</div>*/}

                                                                                    <div
                                                                                        className="form-group col-lg-12 mx-auto mb-0">
                                                                                        <Button
                                                                                            style={{background: "#e42256"}}
                                                                                            block>
                                                                                            <span className="font-weight-bold"
                                                                                                  style={{color: "#ffff"}}>CREATE ACCOUNT</span>
                                                                                        </Button>
                                                                                    </div>

                                                                                </div>
                                                                            </Form>
                                                                            :
                                                                            <div>
                                                                                <Spinner style={{ width: '5rem', height: '5rem', color:"#e42256" }} />{' '}
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

    );

}
const mapStateToProps = (state) => {
    return {
        account: state.findAccountByIdReducer.data,
        saveAccount: state.saveAccountReducer.data,
        error: state.saveAccountReducer.error,
        isLoading: state.findAccountByIdReducer.isLoading || state.saveAccountReducer.isLoading,
        update: state.updateAccountReducer,
        roles: state.findAllRoleReducer.data
    }
}

const mapDispatchToProps = {
    saveDispatch: saveAccountAction,
    findAccountByIdAction,
    findAllRoleAction
}

export default connect(mapStateToProps,
    mapDispatchToProps)(SignUp);