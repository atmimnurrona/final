import React, {useEffect, useState} from 'react';
import {Link, Redirect, useHistory, useParams} from 'react-router-dom'
import gambar from "../../assets/images/undraw_authentication_fsn5.svg"
import {
    faKey, faLock, faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../account/login.css"
import {Button,Form,  Spinner} from "reactstrap";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import Footer from "../../components/dashboard/Footer";
import {connect} from "react-redux";
import {changePasswordAction} from "../../actions/userAction";
import swal from "sweetalert";

const EditPassword = ({isLoading, changePasswordAction, changePassword, error}) => {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [oldPasswordError, setOldPasswordError] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const handleSubmit = () => {
        const isValid = validate();
        if(isValid) {
            const data = {
                password: newPassword,
                oldPassword: oldPassword
            }
            changePasswordAction(data)
        }
    }

    useEffect(() => {
        if (changePassword) {
            swal("Success!", "", "success");
            setOldPassword("")
            setNewPassword("")
            setConfirmPassword("")
        }

        if (error) {
            swal("Error!", "Old Password invalid!", "error");
        }
    }, [changePassword, error])

    const validate = () => {
        let oldPasswordError = "";
        let newPasswordError = "";
        let confirmPasswordError = "";

        if (newPassword.length < 6) {
            newPasswordError = "Password must be more than 6 characters!";
        }

        if (confirmPassword !== newPassword) {
            confirmPasswordError = "Confirm Password must match to New Password"
        } else if (confirmPassword.length < 6) {
            confirmPasswordError = "Password must be more than 6 characters!";
        }

        if (oldPasswordError || newPasswordError || confirmPasswordError) {
            setOldPasswordError(oldPasswordError);
            setNewPasswordError(newPasswordError);
            setConfirmPasswordError(confirmPasswordError)
            swal("Change Password Error!", "", "error");
            return false;
        }
        return true;
    }



    return (
        <div>
            {/*{*/}
            {/*    localStorage.getItem("roles") == "STAFF" || localStorage.getItem("roles") == "SUPERVISOR" ?*/}
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
                                                            <Link to="/dashboard" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-arrow-left"/>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <div className="col-md-12">
                                                            <div className="form form-container">
                                                                <div className="row align-items-center">

                                                                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                                                                        <img src={gambar} alt=""
                                                                             className="img-fluid mb-3 d-none d-md-block"/>
                                                                    </div>

                                                                    <div className="col-md-7 col-lg-6 ml-auto">

                                                                        <h1 style={{
                                                                            color: "#e42256",
                                                                            fontSize: "55px"
                                                                        }}>Change Password</h1>
                                                                        {!isLoading ?
                                                                            <Form >
                                                                                <div className="row">
                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                                                                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                                    <FontAwesomeIcon icon={faLock}/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            type="password"
                                                                                            name="password"
                                                                                            value={oldPassword}
                                                                                            onChange={(e) => setOldPassword(e.target.value)}
                                                                                            placeholder="old password"
                                                                                            className="form-control bg-white border-left-0 border-md"/><br/>

                                                                                    </div>
                                                                                    <p style={{fontSize: 12, color: "red"}}>{oldPasswordError}</p>


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
                                                                                            type="password"
                                                                                            name="newPassword"
                                                                                            value={newPassword}
                                                                                            onChange={(e) => setNewPassword(e.target.value)}
                                                                                            placeholder="password"
                                                                                            className="form-control bg-white border-left-0 border-md"/>

                                                                                    </div>
                                                                                    <p style={{fontSize: 12, color: "red"}}>{newPasswordError}</p>

                                                                                    <div
                                                                                        className="input-group col-lg-12 mb-4">
                                                                                        <div
                                                                                            className="input-group-prepend">
                                                                                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                                                                    <FontAwesomeIcon icon={faLockOpen}/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <input
                                                                                            required
                                                                                            type="password"
                                                                                            name="confirmPassword"
                                                                                            value={confirmPassword}
                                                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                                                            placeholder="confirm password"
                                                                                            className="form-control bg-white border-left-0 border-md"/><br/>
                                                                                    </div>
                                                                                    <p style={{fontSize: 12, color: "red"}}>{confirmPasswordError}</p>

                                                                                    <div
                                                                                        className="form-group col-lg-12 mx-auto mb-0">
                                                                                        <Button
                                                                                            onClick={handleSubmit}
                                                                                            style={{background: "#e42256"}}
                                                                                            block>
                                                                                                <span className="font-weight-bold"
                                                                                                      style={{color: "#ffff"}}>CHANGE PASSWORD</span>
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
            {/*        :*/}
            {/*        <div>*/}
            {/*            <Error/>*/}
            {/*        </div>*/}
            {/*}*/}
        </div>

    );

}

const mapStateToProps = (state) => {
    return {
        changePassword: state.changePasswordReducer.data,
        isLoading: state.changePasswordReducer.isLoading,
        error: state.changePasswordReducer.error
    }
}

const mapDispatchToProps = {
    changePasswordAction
}

export default connect (mapStateToProps, mapDispatchToProps) (EditPassword);