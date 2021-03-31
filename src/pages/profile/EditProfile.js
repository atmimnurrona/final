import React, {useEffect, useState} from 'react';
import {Redirect, useHistory, useParams} from 'react-router-dom'
import undraw_Updated_resume_re_q1or from "../../assets/images/undraw_Updated_resume_re_q1or.svg"
import {
    faEnvelope,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../account/login.css"
import {Spinner, Input, Label, FormGroup, Button, Container, Form, Col} from "reactstrap";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import Error from "../Error";
import Footer from "../../components/dashboard/Footer";

const EditProfile = () => {

    return (
        <div>
            {
                localStorage.getItem("master") == "false" ?
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
                                                                        }}>Edit Account</h1>

                                                                        {/*{!isLoading ?*/}
                                                                            <Form>
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
                                                                                            type="email"
                                                                                            name="email"
                                                                                            placeholder="Email Address"
                                                                                            className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                    </div>


                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <FormGroup>
                                                                                            <Label for="profilePicture"
                                                                                                   sm={4}>Profile
                                                                                                Photo</Label>
                                                                                            <Col sm={12}>
                                                                                                <Input
                                                                                                    type="file"
                                                                                                    name="profilePicture"
                                                                                                    accept="image/jpeg, image/png"/>
                                                                                            </Col>
                                                                                        </FormGroup>
                                                                                    </div>

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


export default EditProfile;