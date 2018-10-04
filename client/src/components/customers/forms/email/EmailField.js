import React from 'react';
import './email.css'

const EmailField = ({ input, label, meta: { touched, error } }) => {
    // console.log(meta);
    return (
        <div className="form-group">
            <label className="col-sm-3 ">{label}</label>
            <div className="col-sm-9">
                <input className="form-control" {...input} style={{ margin: '5px' }} />
            </div>
            <div className="clearfix"></div>
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>





    );
}

export default EmailField;