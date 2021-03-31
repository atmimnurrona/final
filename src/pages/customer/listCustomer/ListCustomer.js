import React, {useEffect, useState} from 'react'
import {findAllCustomerAction} from '../../../actions/customerAction'
import {connect} from "react-redux"
import Containers from "../../../components/Containers/Container";
import SignIn from "../../account/SignIn";
import RowCustomer from "./RowCustomer";
import Header from "../../../components/dashboard/Header";
import Menu from "../../../components/dashboard/Menu";
import TableScrollbar from 'react-table-scrollbar';
import Error from "../../Error";
import Footer from "../../../components/dashboard/Footer";
import {PaginationButton} from "../../../components/Buttons";
import {ButtonGroup, Button, Spinner, Container} from "reactstrap";

function CustomerList({
                          error,
                          isLoading,
                          customers,
                          findAllCustomerAction
    ,size, total, currentPage
                      }) {

    const [customer, setCustomer] = useState([])

    const [pageParam, setPageParam] = useState(0)
    const [sizeParam, setSizeParam] = useState(10)

    const totalPage = Math.ceil(total/size)

    useEffect(() => {
        onReload()
    }, [pageParam, sizeParam])

    useEffect(() => {
        onReload()
    }, [])

    useEffect(() => {
        if (customer) {
            setCustomer(customers)
        }
    }, [customers])

    console.log("ini customers", customer)

    const onReload = () => {
        findAllCustomerAction(
            {page: pageParam, size: sizeParam}
        );
    };

    const handleLimit = (limit) => {
        setSizeParam(limit)
        setPageParam(0)
    }

    useEffect(onReload, [findAllCustomerAction, pageParam, sizeParam])

    return (

        <div>
            {
                localStorage.getItem("readAllCustomer") == "true" ?
                    <>
                        <Containers error={error}>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">List All Customer</h1>
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
                                                        {/*<h3 className="card-title">List Customer</h3>*/}
                                                        <div className="card-tools">
                                                            {
                                                                localStorage.getItem("inputCustomer") &&
                                                                <a href="/customer/form" className="btn btn-tool btn-sm">
                                                                    <i className="fas fa-plus-circle"/>
                                                                </a>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="card-body table-responsive p-0">
                                                        <TableScrollbar rows={10}>
                                                        {/*<table className="table text-nowrap table-bordered table-head-fixed">*/}
                                                        <table className="table table-striped table-bordered table-align-middle table-head-fixed">
                                                            <thead style={{textAlign: "left", background:"#FCE051"}}>
                                                            <tr>
                                                                <th>Number</th>
                                                                {/*<th>Submitter</th>*/}
                                                                <th>Customer Name</th>
                                                                <th>ID Card</th>
                                                                <th>Employee Type</th>
                                                                <th>Submitter</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody style={{textAlign: "left"}}>
                                                            {
                                                                !isLoading ?
                                                                    // customers?.list?.map((e, i) => {
                                                                    customer.map((e, i) => {

                                                                        return (
                                                                            <RowCustomer key={i} data={e}
                                                                                         number={(pageParam * sizeParam) + i + 1}/>
                                                                        )
                                                                    })
                                                                    :
                                                                    // <tr>
                                                                    //     <div>
                                                                    <Container style={{display:"flex", justifyContent:"center", alignItems:"center", marginLeft: "300px", marginRight: "300px"}}>
                                                                        <Spinner style={{ width: '5rem', height: '5rem', color:"#e42256", display:"flex", justifyContent:"center", alignItems:"center"}} />
                                                                    </Container>
                                                                        // </div>
                                                                    // </tr>
                                                            }
                                                            {
                                                                customer.map((e, i) => console.log("NOMOR", (pageParam * sizeParam) + i + 1))
                                                            }
                                                            {

                                                                customer.map((e, i) => console.log("NOMOR PAGINATION", (pageParam)))
                                                            }
                                                            </tbody>
                                                        </table>
                                                        </TableScrollbar>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <PaginationButton
                                            currentPage = {currentPage}
                                            setPage={setPageParam}
                                            totalPage={totalPage}
                                            handleLimit={handleLimit}
                                            size={sizeParam}
                                        />
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <Footer/>
                        </Containers>
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
        error: state.findAllCustomerReducer.error,
        customers: state.findAllCustomerReducer.data || [],
        isLoading: state.findAllCustomerReducer.isLoading,
        size: state.findAllCustomerReducer.pagination.size,
        total: state.findAllCustomerReducer.pagination.total,
        currentPage: state.findAllCustomerReducer.pagination.page
    }
}

const mapDispatchToProps = {
    findAllCustomerAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)
