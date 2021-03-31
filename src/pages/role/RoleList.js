import React, {useEffect} from "react";
import Header from "../../components/dashboard/Header";
import Menu from "../../components/dashboard/Menu";
import {connect} from "react-redux";
import Containers from "../../components/Containers/Container";
import Footer from "../../components/dashboard/Footer";
import Error from "../Error";
import RoleRow from "./RoleRow";
import {findAllRoleAction, removeByIdRoleAction} from "../../actions/roleAction";
import ReasonRow from "../reasonUse/ReasonRow";
import swal from "sweetalert";


const ReasonUse = ({
                       roles,
                       findAllRoleAction,
                       error,
                       isLoading,
                       removeByIdRoleAction,
    isRemoved
                   }) => {

    const onReload = () => {
        findAllRoleAction()
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
                    removeByIdRoleAction(id);
                    swal("Successful deleted", {
                        icon: "success"
                    });
                } else {
                    swal("Failed to delete")
                }
            });
    };

    useEffect(onReload, [findAllRoleAction])

    useEffect(() => {
        onReload()
    }, [findAllRoleAction])

    useEffect(() => {
        if(isRemoved) {
            onReload()
        }
    }, [isRemoved])

    return (
        <div>
            {
                localStorage.getItem("roles") == "MASTER" ?
                    <>
                        <Containers error={error}>
                            <Header/>
                            <Menu/>
                            <div className="content-wrapper">
                                <div className="content-header">
                                    <div className="container-fluid">
                                        <div className="row mb-2" style={{marginTop: '30px', display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <div className="col-sm-8">
                                                <h1 className="m-0 text-dark">Management Role</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <div className="col-lg-8" >

                                                <div className="card">
                                                    <div className="card-header border-0">
                                                        {/*<h3 className="card-title">List Customer</h3>*/}
                                                        <div className="card-tools">
                                                            {/*<a href="#" className="btn btn-tool btn-sm">*/}
                                                            {/*    <i className="fas fa-download"/>*/}
                                                            {/*</a>*/}
                                                            <a href="/role/form" className="btn btn-tool btn-sm">
                                                                <i className="fas fa-plus-circle"/>
                                                            </a>
                                                        </div>
                                                    </div>


                                                    <div className="card-body table-responsive p-0">
                                                        <table className="table table-striped table-valign-middle">
                                                            <thead style={{textAlign: "left"}}>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Role</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody style={{textAlign: "left"}}>
                                                            {
                                                                !isLoading ?
                                                                    roles?.list?.map((e,i) => {
                                                                        return(
                                                                            <RoleRow onDeleted={() => onDelete(e.id)}
                                                                                key={i} data={e}
                                                                                     number={(roles.page * roles.size) + 1 + i}/>
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
        roles: state.findAllRoleReducer.data,
        error: state.findAllRoleReducer.error || state.removeRoleByIdReducer.error,
        isLoading: state.findAllRoleReducer.isLoading,
        isRemoved: state.removeRoleByIdReducer
    }
}

const mapDispatchToProps = {
    findAllRoleAction,
    removeByIdRoleAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ReasonUse)