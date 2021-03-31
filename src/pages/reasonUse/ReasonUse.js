import React, {useEffect} from "react";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {findAllNeedAction, removeByIdNeedAction} from "../../actions/needAction";
import {connect} from "react-redux";
import Containers from "../../components/Containers/Container";
import ReasonRow from "./ReasonRow";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";
import swal from "sweetalert";
import {Link} from "react-router-dom";


const ReasonUse = ({
                       findAllNeedAction,
                       needs,
                       error,
                       isLoading,
                       removeByIdNeedAction,
                       isRemoved

                   }) => {

    const onReload = () => {
        findAllNeedAction(
        );
    }

    const onDelete = (id) => {
        swal({
            title: "Are you sure to delete this data?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    removeByIdNeedAction(id);
                    swal("Successful deleted", {
                        icon: "success"
                    });
                } else {
                    swal("Failed to delete")
                }
            });
    };

    useEffect(onReload, [findAllNeedAction,
        // pageParam, sizeParam
    ])

    useEffect(() => {
        onReload()
    }, [findAllNeedAction])

    useEffect(() => {
        if (isRemoved) {
            onReload()
        }
    }, [isRemoved])

    return (
        <div>
            {
                localStorage.getItem("master") == "true" ?
                    <>
                        <Containers error={error}>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h1 className="m-0 text-dark">Loan Purpose</h1>
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
                                                            {/*<a href="#" className="btn btn-tool btn-sm">*/}
                                                            {/*    <i className="fas fa-download"/>*/}
                                                            {/*</a>*/}
                                                            <Link to="/need/form" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-plus-circle"/>
                                                            </Link>
                                                        </div>
                                                    </div>


                                                    <div className="card-body table-responsive p-0">
                                                        <table className="table table-striped table-valign-middle">
                                                            <thead style={{textAlign: "left"}}>
                                                            <tr>
                                                                <th>No</th>
                                                                {/*<th>Id</th>*/}
                                                                <th>Type</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody style={{textAlign: "left"}}>
                                                            {
                                                                !isLoading ?
                                                                    needs?.list?.map((e, i) => {
                                                                        return (
                                                                            <ReasonRow onDeleted={() => onDelete(e.id)}
                                                                                       key={i} data={e}
                                                                                       number={(needs.page * needs.size) + 1 + i}/>
                                                                        )
                                                                    }) :
                                                                    <tr>
                                                                        <td colSpan="3"> Loading..</td>
                                                                    </tr>
                                                            }
                                                            </tbody>
                                                        </table>

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
        needs: state.findAllNeedReducer.data,
        error: state.findAllNeedReducer.error || state.removeNeedTypeByIdReducer.error,
        isLoading: state.findAllNeedReducer.isLoading,
        isRemoved: state.removeNeedTypeByIdReducer
    }
}

const mapDispatchToProps = {
    findAllNeedAction,
    removeByIdNeedAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ReasonUse)