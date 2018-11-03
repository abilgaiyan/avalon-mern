import React, { Component } from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

const datetimeField = ({ input, label, type, disabled, meta: { touched, error }, showTime }) => {

    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{label}</label>
            <div className="col-sm-9 ">
                {disabled ? <input
                    {...input}
                    className="form-control"
                    type={type}
                    disabled={disabled ? "disabled" : ""}
                /> :
                    <DateTimePicker
                        {...input}
                        onChange={input.onChange}
                        format="DD MMM YYYY"
                        time={showTime}
                        value={!input.value ? null : new Date(input.value)}
                    />}
                <div className="red-text" >
                    {/* {touched && error} */}
                </div>
            </div>
        </div>
    );
};

export default datetimeField;