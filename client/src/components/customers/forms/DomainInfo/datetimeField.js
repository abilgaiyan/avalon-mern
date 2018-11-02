import React, { Component } from 'react';
// import DatePicker from 'react-date-picker';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

const datetimeField = ({ input, label, type, meta: { touched, error }, showTime }) => {

  return (
    <div className="form-group">
      <label className="control-label col-sm-3">{label}</label>
      <div className="col-sm-9 ">
        <DateTimePicker
          {...input}
          onChange={input.onChange}
          format="DD MMM YYYY"
          time={showTime}
          value={!input.value ? null : new Date(input.value)}
        />
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