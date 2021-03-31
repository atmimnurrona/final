import React from 'react'

const RoleRow = ({data, number, onDeleted, onUpdate}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{data.name}</td>
            <td>
                <a onClick={onUpdate} href={`/role/${data.id}`} className="text-muted">
                    <i className="fas fa-pencil-alt"/>
                </a>{' '}
                <a onClick={onDeleted} className="text-muted">
                    <i className="fas fa-trash-alt"/>
                </a>{' '}</td>

        </tr>
    )
}

export default RoleRow;