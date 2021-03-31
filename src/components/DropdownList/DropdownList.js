
import React from "react";

const DropdownList = ({value, data, placeholder, label, handleDropdown}) => {

    const handleChange = (e) => {
        handleDropdown(e.target.value)
    }

    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <select
                value={value}
                className="form-control"
                onChange={(e) => handleChange(e)}>
                <option value="">{placeholder}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropdownList