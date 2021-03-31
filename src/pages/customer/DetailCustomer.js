import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import {findCustomerByIdAction} from "../../actions/customerAction";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandshake, faIdCard, faMailBulk, faUser} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";

function CustomerDetail({isLoading, customer, findCustomerByIdAction}) {

    let {id} = useParams()
    const {data, setData} = useState({
        name : ""
    })
    useEffect(() => {
        findCustomerByIdAction(id)
    }, [findCustomerByIdAction])

    useEffect(() => {
        if (id > 0)
            findCustomerByIdAction(id)
    }, [findCustomerByIdAction])

    return (
        <div>
            {
                localStorage.getItem("inputCustomer") == "true" ?
                    <>
                        <div>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">Detail Customer</h1>
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
                                                            {/*<h3 className="card-title">Detail Customer</h3>*/}
                                                            <div className="card-tools">
                                                                {/*<a href="/customer/form" className="btn btn-tool btn-sm">*/}
                                                                {/*    <i className="fas fa-pencil-alt" />*/}
                                                                {/*</a>*/}
                                                                <a href="/staff/customer" className="btn btn-tool btn-sm">
                                                                    <i className="fas fa-arrow-left" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="card-body table-responsive p-0">
                                                            <table className="table table-borderless table-valign-middle">
                                                                <tbody style={{textAlign: "left"}}>
                                                                <tr>
                                                                    <td>Name</td>
                                                                    <td>{customer.name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Address</td>
                                                                    <td>{customer.address}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email</td>
                                                                    <td>{customer.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>ID Card</td>
                                                                    <td>{customer.idNumber}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Employee Type</td>
                                                                    <td>{customer.employeeType}</td>
                                                                </tr>
                                                                {customer.employeeType == "CONTRACT"
                                                                &&
                                                                    <>
                                                                        <tr>
                                                                            <td>Contract Length</td>
                                                                            <td>{customer.contractLength}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Contract Start</td>
                                                                            <td>{customer.contractStart}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Contract End</td>
                                                                            <td>{customer.contractEnd}</td>
                                                                        </tr>
                                                                    </>
                                                                }
                                                                        <tr>
                                                                            <td>ID Card Photo</td>
                                                                            <td><img src={customer.idPhoto} width={100}/></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Profile Photo</td>
                                                                            <td><img src={customer.profilePhoto} width={100}/></td>
                                                                        </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer/>

                        </div>
                    // </>
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
        isLoading: state.findCustomerByIdReducer.loading || state.saveCustomerReducer.loading,
        customer: state.findCustomerByIdReducer.data || [],
    }
}

//findById ambil dari action
const mapDispatchToProps = {findCustomerByIdAction}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetail)