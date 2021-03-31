import {ButtonGroup, Button, Container, Table, Spinner} from "reactstrap";
import Containers from '../../../components/Containers/Container'
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {findAllTransactionAction} from "../../../actions/transactionAction";
import Header from "../../../components/dashboard/Header";
import Menu from "../../../components/dashboard/Menu";
import TableScrollbar from 'react-table-scrollbar';
import Row from "../../transaction/listTransactionByStaff/Row";
import {PaginationButton} from "../../../components/Buttons";
import Error from "../../Error";
import Footer from "../../../components/dashboard/Footer";

function TransactionListByStaff({
                             isLoading,
                             transactions,
                             error,
                             findAllTransactionAction,
    size, total, currentPage
                         }) {

    const [transaction, setTransaction] = useState([])
    const [pageParam, setPageParam] = useState(0)
    const [sizeParam, setSizeParam] = useState(50)

    const totalPage = Math.ceil(total/size)

    useEffect(() => {
        onReload()
    }, [pageParam, sizeParam])

    console.log("SIZE", sizeParam)

    useEffect(() => {
        onReload()
    }, [])

    useEffect(() => {
        if(transaction) {
            setTransaction(transactions)
        }
    }, [transactions])

    const onReload = () => {
        findAllTransactionAction(
            {page: pageParam, size: sizeParam}
        );
    };

    const handleLimit = (limit) => {
        setSizeParam(limit)
        setPageParam(0)
    }

    useEffect(onReload, [findAllTransactionAction, pageParam, sizeParam])


    return (
        <div>
            {
                localStorage.getItem("inputTransaction")  == "true" ?
                    <>
                        <Containers error={error}>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">List Transaction</h1>
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

                                                        </div>
                                                    </div>

                                                    <div className="card-body table-responsive p-0">
                                                        <TableScrollbar rows={10}>
                                                            <table className="table table-striped table-bordered table-align-middle">
                                                                <thead
                                                                    style={{textAlign: "left", background: "#FCE051"}}>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Name</th>
                                                                    <th>Employee Type</th>
                                                                    <th>Loan Amount</th>
                                                                    <th>Tenor</th>
                                                                    <th>Interest Rate</th>
                                                                    <th>Pending Approval</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody style={{textAlign: "left"}}>
                                                                {
                                                                    !isLoading ?
                                                                        transactions.map((e, i) => {
                                                                            return (
                                                                                <Row key={i} data={e}
                                                                                     number={(pageParam * sizeParam) + 1 + i}/>
                                                                            )
                                                                        }) :
                                                                        <tr>
                                                                            <div>
                                                                                <Spinner style={{ width: '5rem', height: '5rem', color:"#e42256" }} />{' '}
                                                                            </div>
                                                                        </tr>
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </TableScrollbar>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <PaginationButton
                                            currentPage = {currentPage}
                                            setPage={setPageParam}
                                            totalPage={totalPage}
                                            handleLimit={handleLimit}
                                            size={sizeParam}
                                        />
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

    )
};

const mapStateToProps = (state) => {
    return {
        error: state.findAllTransactionByStaff.error,
        transactions: state.findAllTransactionByStaff.data || [],
        isLoading: state.findAllTransactionByStaff.isLoading,
        size: state.findAllTransactionByStaff.pagination.size,
        total: state.findAllTransactionByStaff.pagination.total,
        currentPage: state.findAllTransactionByStaff.pagination.page

    }
}

const mapDispatchToProps = {
    findAllTransactionAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListByStaff);