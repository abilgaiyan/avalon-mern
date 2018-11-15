import React, { Component } from 'react';
// import DatePicker from 'react-date-picker';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment';


const datetimeField = ({ input: { onChange, value }, label, type, disabled, meta: { touched, error }, showTime }) => {

  return (
    <div className="form-group">
      <label className="control-label col-sm-3">{label}</label>
      <div className="col-sm-9 ">
        {disabled ? <input
          //{...input}
          className="form-control"
          type={type}
          disabled={disabled ? "disabled" : ""}
          value={moment(value).format('DD MMM YYYY') === "Invalid date" ? null : moment(value).format('DD MMM YYYY')}
        /> :
          <DateTimePicker
            //{...input}
            inputProps={{ component: props => <input {...props} readOnly /> }}
            onChange={onChange}
            format="DD MMM YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
          />}
        <div className="red-text" >
          {/* {touched && error} */}
        </div>
      </div>
    </div>
  );
};


// class DatePickermain extends Component {
//   state = {
//     date: new Date(),
//   }

//   onChange = date => this.setState({ date })

//   render() {
//     return (
//       <div>
//         <DatePicker
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//       </div>
//     );
//   }
// }



export default datetimeField;