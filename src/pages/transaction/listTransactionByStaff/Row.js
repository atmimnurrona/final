import React from 'react'
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";

const Row = ({data, number}) => {

    console.log(data)
    return (

        <tr>
            <td>{number}</td>
            <td>{data.transaction.customer.name}</td>
            <td>{data.transaction.customer.employeeType} </td>
            <td><NumberFormat value={data.transaction.loan}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'Rp '}/></td>
            <td>{data.transaction.tenor} month</td>
            <td>{data.transaction.interestRate} %</td>
            <td>
                <Button href={`/approval/${data.id}`} style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faQuestionCircle}/>
                </Button>
            </td>
        </tr>
    )
}

export default Row;

