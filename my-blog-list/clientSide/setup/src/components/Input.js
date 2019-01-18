import React from "react";


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => {
    return (
        <div>
            <label style={{ }}> {label}</label>
            <div>
                <input {...input} type={type} placeholder={label} />
                {touched && error && <span>{this.props.errors.email}</span>}
            </div>
        </div>
    )
}


export default renderField;