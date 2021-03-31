import React from 'react'
import NumberFormat from "react-number-format";

const ReportRow = ({data, onUpdate, number}) => {
        console.log("row", data)
    return (

        <tr>
            <td>{number}</td>
            <td>{data.approval.transaction.customer.name}</td>
            <td>{data.approval.transaction.customer.email}</td>
            <td>{data.approval.transaction.customer.idNumber}</td>
            <td>{data.approval.transaction.customer.address}</td>
            <td>{data.approval.transaction.customer.employeeType}</td>
                <td><NumberFormat value={data.approval.transaction.income}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'Rp'}/></td>
                <td><NumberFormat value={data.approval.transaction.outcome}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'Rp'}/></td>
                <td><NumberFormat value={data.approval.transaction.loan}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'Rp'}/></td>
                <td>{data.approval.transaction.interestRate}%</td>
            <td>{data.approval.transaction.tenor} month</td>
                <td><NumberFormat value={data.approval.transaction.mainLoan}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'Rp'}/></td>
                <td><NumberFormat value={data.approval.transaction.interest}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'Rp'}/></td>
                <td><NumberFormat value={data.approval.transaction.installment}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'Rp'}/></td>
            <td><NumberFormat value={data.approval.transaction.installmentTotal}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'Rp'}/></td>
            <td>{data.approval.transaction.creditRatio}%</td>
            <td>
                    {data.approval.transaction.financeCriteria ?
                        "PASS" : "NOT PASS"}
            </td>
            <td>
                    {data.approval.transaction.employeeCriteria ?
                        "PASS" : "NOT PASS"}
            </td>
            <td>
                {data.approval.approve ?
                    "APPROVE" : "REJECT"
                }
            </td>
            <td>{data.submitDate}</td>
            <td>{data.approvalDate}</td>
        </tr>
    )
}

export default ReportRow;