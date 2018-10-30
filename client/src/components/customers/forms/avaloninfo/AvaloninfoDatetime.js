import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
// import DatePicker from 'react-bootstrap-datetimepicker';

const AvaloninfoDatetime = ({ input, label, type, meta: { touched, error } }) => {
   
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

// class NewDAtepicker extends Comment{
//     getInitialState(){
//         var value = new Date().toISOString();
//         return {
//           value: value
//         }
//       }
//       handleChange(value, formattedValue) {
//         this.setState({
//           value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
//           formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
//         });
//       }
//       componentDidUpdate(){
//         // Access ISO String and formatted values from the DOM.
//         var hiddenInputElement = document.getElementById("example-datepicker");
//         console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
//         console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
//       }
//       render(){
//         return (

//             <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
//         )
//       }
// }

export default AvaloninfoDatetime;