// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AvaloninfoFields from "./AvaloninfoFields";
import AvaloninfoDropdown from "./AvaloninfoDropdown";
import AvaloninfoTextarea from "./AvaloninfoTextarea";
//import validateEmails from "../../../../utils/validateEmails";
import formFields from "./aiformFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../actions";

// const required = value => (value ? undefined : "Required");
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined;
// const maxLength15 = maxLength(15);
// const number = value =>
//   value && isNaN(Number(value)) ? "Must be a number" : undefined;
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined;
// const minValue18 = minValue(18);
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? "Invalid email address"
//     : undefined;
// const tooOld = value =>
//   value && value > 65 ? "You might be too old for this" : undefined;
// const aol = value =>
//   value && /.+@aol\.com/.test(value)
//     ? "Really? You still use AOL for your email?"
//     : undefined;

class AvaloninfoForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      if (type === "text" || type === "datetime") {
        return (
          <Field
            key={name}
            component={AvaloninfoFields}
            type={type}
            label={label}
            name={name}
            // validate={[required, maxLength15]}
          />
        );
      }

      if (type === "textarea") {
        return (
          <Field
            key={name}
            component={AvaloninfoTextarea}
            type={type}
            label={label}
            name={name}
            // validate={[required, maxLength15]}
          />
        );
      }

      if (type === "datetime") {
        return (
          <Field
            key={name}
            component={AvaloninfoFields}
            type={type}
            label={label}
            name={name}
            // validate={[required, maxLength15]}
          />
        );
      }

      if (type === "dropdown") {
        let optiondata = [];
        if (name === "websitestatus") {
          optiondata = ["Active", "Hold", "Under Setup"];
        }

        return (
          <Field
            key={name}
            component={AvaloninfoDropdown}
            type={type}
            label={label}
            name={name}
            optionData={optiondata}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <form
        className="form-horizontal label-left"
          onSubmit={() =>
            this.props.handleSubmit(
              this.props.submitCustomerInfo(
                this.props.formValues,
                this.props.history
              )
            )
          }
        >
          {this.renderFields()}
          <div className="form-group">
            <div className="col-xs-9 col-xs-offset-3 text-left">
              <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }}>
                <i className="fa fa-check-square" aria-hidden="true"></i>
                Save

              </button>
              <Link to="/customerinfo" className="btn btn-cancle">
                <i className="fa fa-close" aria-hidden="true"></i>
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// function validate(values) {
//   const errors = {};

//   errors.email = validateEmails(values.email || "");

//   _.each(formFields, ({ name, is }) => {
//     if (!values[name]) {
//       errors[name] = "You must provide a value";
//     }
//   });

//   return errors;
// }

function mapStateToProps(state) {
  //console.log(state.form.contactusForm.values);
  return { formValues: state.form.AvaloninfoForm };
}

AvaloninfoForm = connect(
  mapStateToProps,
  actions
)(withRouter(AvaloninfoForm));

export default reduxForm({
  // validate,
  form: "avaloninfoForm",
  destroyOnUnmount: false
})(withRouter(AvaloninfoForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
