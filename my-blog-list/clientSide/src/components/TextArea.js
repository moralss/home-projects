import React from "react";
import {TextArea} from "../styles/styles";

const textArea = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => {
    return (
        <div>
            <label> {label}</label>
            <div>
                <TextArea {...input} type={type} placeholder={label} />
                {touched && error && <span>{this.props.errors.email}</span>}
            </div>
        </div>
    )
}


export default textArea;