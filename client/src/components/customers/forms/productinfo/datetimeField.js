import React, { Component } from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment';

const datetimeField = ({ input: { onChange, value }, label, type, disabled, meta: { touched, error }, showTime }) => {

    return (
        <div className="form-group">
            <label className="control-label col-sm-4">{label}</label>
            <div className="col-sm-8 ">
                {disabled ? <input
                    //{...input}
                    className="form-control"
                    type={type}
                    disabled={disabled ? "disabled" : ""}
                    value={moment(value).format('MMM DD YYYY') === "Invalid date" ? "" : moment(value).format('MMM DD YYYY')}
                /> :
                    <DateTimePicker
                        //{...input}
                        inputProps={{ component: props => <input {...props} readOnly /> }}
                        onChange={onChange}
                        format="MMM DD YYYY"
                        time={showTime}
                        value={!value ? new Date() : new Date(value)}
                    />}
                <div className="red-text" >
                    {/* {touched && error} */}
                </div>
            </div>
        </div>
    );
};

export default datetimeField;