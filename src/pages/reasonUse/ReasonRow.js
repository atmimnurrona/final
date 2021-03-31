import React from 'react'

const ReasonRow = ({data, number, onUpdate, onDeleted}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{data.type} </td>
            <td>
                <a onClick={onUpdate} href={`/need/${data.id}`} className="text-muted">
                    <i className="fas fa-pencil-alt"/>
                </a>{' '}
                <a onClick={onDeleted} className="text-muted">
                    <i className="fas fa-trash-alt"/>
                </a>{' '}</td>

        </tr>
    )
}

export default ReasonRow;