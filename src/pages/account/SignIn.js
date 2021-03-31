import React, {useEffect, useState} from "react";
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";
import undraw_Access_account_re_8spm from "../../assets/images/undraw_Access_account_re_8spm.svg"
import "./login.css"
import {useHistory} from "react-router";
import {connect} from "react-redux";
import {loginRequestAction} from "../../actions/loginAction";
import swal from "sweetalert";


const SignIn = ({loginData, isLoading, error, dispatchLoginAction}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [validation, setValidation] = useState('');

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault()
        const isValid = validate();

        if (isValid) {
            const data = {
                username: username,
                password: password
            }
            dispatchLoginAction(data)
        }
    }

    useEffect(() => {
        // jika login sukses
        if (loginData) {
            localStorage.setItem('token', loginData.token)
            localStorage.setItem('roles', loginData.roles)
            localStorage.setItem('username', loginData.username)
            localStorage.setItem('fullName', loginData.fullName)
            localStorage.setItem('inputCustomer', loginData.inputCustomer)
            localStorage.setItem('readAllCustomer', loginData.readAllCustomer)
            localStorage.setItem('inputTransaction', loginData.inputTransaction)
            localStorage.setItem('readAllTransaction', loginData.readAllTransaction)
            localStorage.setItem('approveTransaction', loginData.approveTransaction)
            localStorage.setItem('readAllReport', loginData.readAllReport)
            localStorage.setItem('readAllReportByTransaction', loginData.readAllReportByTransaction)
            localStorage.setItem('master', loginData.master)

            console.log("sukses login", localStorage)

            //pilih role
            // if (loginData.roles === "MASTER") {
            //     history.push('/dashboard')
            //     // window.location.href = "/login"
            // } else if (loginData.roles === "STAFF") {
            //     history.push('/dashboard')
            // } else if (loginData.roles === "SUPERVISOR") {
            //     history.push('/dashboard')
            // } else {
            //     setValidation("*Sorry you are not allowed to sign here")
            // }

            // history.push('/dashboard')
            swal("Login Success!", "", "success").then((value) => {
              window.location.href = "/dashboard"
            });

        }
        // jika login error
        if (error) {
            setValidation("*Username or Password invalid!")
            swal("Login Error!", "", "error")
        }

    }, [loginData, error])

    useEffect(() => {
        setValidation("")
        setUsernameError("")
        setPasswordError("")
    }, [username, password])

    const validate = () => {
        //var kosong, agar bisa di update isinya
        let usernameError = "";
        let passwordError = "";

        if (!username) {
            usernameError = "*please enter username"
        }
        if (!password) {
            passwordError = "*please enter password"
        }
        if (usernameError || passwordError) {
            setUsernameError(usernameError);
            setPasswordError(passwordError);
            return false;
        }
        return true;
    }

    const handleUsernameChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setUsername(inputValue)
        setUsernameError(isEmpty)
    }

    const handlePasswordChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setPassword(inputValue)
        setPasswordError(isEmpty)
    }

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5 pr-lg-5 mb-md-0">
                    <div>
                        <img src={undraw_Access_account_re_8spm} alt=""
                             className="img-fluid d-none d-md-block"/>
                        <br/>

                    </div>

                </div>

                <div className="col-md-7 col-lg-6 ml-auto">
                    <h1 style={{color: "#e42256", fontSize: "55px"}}>OK 200</h1><br/>
                    <h5 style={{color: "#e42256", fontSize: "35px"}}>Credit Partner</h5><br/>
                    <form onSubmit={handleLogin}>
                        <div className="row">
                            <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </span>
                                </div>
                                <input id="username"
                                       type="text"
                                       name="username"
                                       placeholder="Username"
                                       onChange={(e) => handleUsernameChange(e)}
                                       value={username}
                                       className="form-control bg-white border-left-0 border-md"/>
                            </div>
                            <div style={{
                                marginLeft: "20px",
                                marginTop: "-25px",
                                marginBottom: "20px",
                                color: "red"
                            }}>
                                {usernameError}
                            </div>

                            <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faKey}/>
                                        </span>
                                </div>
                                <input id="password"
                                       type="password"
                                       name="password"
                                       placeholder="Password"
                                       onChange={(e) => handlePasswordChange(e)}
                                       className="form-control bg-white border-left-0 border-md"/>
                            </div>
                            <div style={{
                                marginLeft: "20px",
                                marginTop: "-25px",
                                marginBottom: "20px",
                                color: "red"
                            }}>{passwordError}</div>

                            <div className="form-group col-lg-12 mx-auto mb-0">
                                <div style={{fontSize: 12, color: "red"}}>{validation}</div>
                                <Button
                                    style={{background: "#e42256"}}
                                    type="submit"
                                    block>
                                        <span className="font-weight-bold"
                                              style={{color: "#ffff"}}>SIGN IN</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loginData: state.loginReducer.data,
        isLoading: state.loginReducer.isLoading,
        error: state.loginReducer.error
    }
}

const mapDispatchToProps = {
    dispatchLoginAction: loginRequestAction
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);