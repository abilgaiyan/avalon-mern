import React, { Component } from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const timeField = ({ input, label, type, meta: { touched, error } }) => {
    // let formatter = Globalize.dateFormatter({ time: 'medium' })

    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{label}</label>
            <div className="col-sm-9 ">
                <DateTimePicker
                    {...input}
                    //inputProps={{ component: props => <input {...props} readOnly /> }}
                    //readOnly
                    onChange={input.onChange}
                    timeFormat='hh:mm A'
                    date={false}
                    value={!input.value ? null : new Date(input.value)}
                //value={!input.value ? null : new Date(moment(input.value).format("DD MMM YYYY"))}
                />
                <div className="red-text" >
                    {/* {touched && error} */}
                </div>
            </div>
        </div>
    );
};

export default timeField;