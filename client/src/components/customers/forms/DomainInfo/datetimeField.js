import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

const datetimeField = ({ input, label, type, meta: { touched, error } }) => {

  return (
    <div className="form-group">
      <label className="control-label col-sm-3">{label}</label>
      <div className="col-sm-9 ">
        <DatePickermain
          {...input}
          type={type}
        />
        <div className="red-text" >
          {/* {touched && error} */}
        </div>
      </div>
    </div>
  );
};

class DatePickermain extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}



export default datetimeField;