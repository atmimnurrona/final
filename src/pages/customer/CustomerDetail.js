import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import {Container} from "reactstrap";
import {connect} from "react-redux";
import {findCustomerByIdAction} from "../../actions/customerAction";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Table} from "reactstrap";

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
        console.log("useEffect", findCustomerByIdAction)
    }, [findCustomerByIdAction])

    return (
        <div>
            {
                localStorage.getItem("inputCustomer") == "true" ?
                    <>
                        <Container>
                            <div>
                                <Link to={`/customer/detail/${customer.id}`}>
                                    <Button style={{marginTop: "10px"}} color="dark">
                                        <FontAwesomeIcon icon={faArrowLeft}/>
                                        Back
                                    </Button>
                                    <br/> <br/>
                                </Link>
                            </div>
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr style={{textAlign:"center"}}>
                                    <th width="200">Name</th>
                                    <th width="200">Email</th>
                                    <th width="200">ID Number</th>
                                    <th width="200">Address</th>
                                    <th width="200">Employee Type</th>
                                    <th width="200">Contract Length</th>
                                    <th width="200">Contract Start</th>
                                    <th width="200">ID Photo</th>
                                    <th width="200">Profile Photo</th>
                                </tr>
                                </thead>
                                <tbody>
                                {!isLoading ? customer &&
                                    <tr style={{textAlign:"center"}}>
                                        <td >{customer.name}</td>
                                        <td >{customer.email}</td>
                                        <td >{customer.idNumber}</td>
                                        <td >{customer.address}</td>
                                        <td >{customer.employeeType}</td>
                                        <td >{customer.contractLength}</td>
                                        <td >{customer.contractStart}</td>
                                        <td ><img src={customer.idPhoto}/></td>
                                        <td ><img src={customer.profilePhoto}/></td>
                                    </tr>
                                    : <p>Loading...</p>}
                                </tbody>
                            </Table>
                        </Container>
                    </>
                    :
                <div> cannot access</div>
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