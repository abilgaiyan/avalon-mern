// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CustomerField from "./CustomerField";
import CustomerDropdownField from "./CustomerDropdown";
import validateEmails from "../../../../utils/validateEmails";
import formFields from "./formFields";
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

class CustomerForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidReceiveProps() {
    const initData = this.props.customerDetails;
    this.props.initialize(initData);
  }

  renderFields() {
    // console.clear();
    // console.log("216515468", this.props.customerDetails);

    return _.map(formFields, ({ label, name, type }) => {
      // console.log(this.props.customerDetails[name]);
      if (type === "text") {
        if (name !== "comment") {
          return (
            <Field
              key={name}
              component={CustomerField}
              type={type}
              label={label}
              name={name}
              // validate={[required, maxLength15]}
            />
          );
        }

        if (name === "comment") {
          return (
            <Field
              key={name}
              component={CustomerField}
              type={type}
              label={label}
              name={name}
            />
          );
        }

        if (name === "contactpersonEmail") {
          return (
            <div className="checkbox">
              <Field
                key={name}
                component={CustomerField}
                type={type}
                label={label}
                name={name}
              />
            </div>
          );
        }
      }

      if (type === "checkbox") {
        return (
          <Field
            key={name}
            component={CustomerField}
            type={type}
            label={label}
            name={name}
          />
        );
      }

      if (type === "dropdown") {
        let optiondata = [];
        if (name === "city") {
          optiondata = ["New Yory", "Jew Jercy", "Verginia", "TEXARKANA"];
        }
        if (name === "customerType") {
          optiondata = ["Customer", "Prospect", "Lead"];
        }

        return (
          <Field
            key={name}
            component={CustomerDropdownField}
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
        <a href="#" class="pull-right icon_well">
          <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true" />
        </a>
        <div class="clearfix" />
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
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginRight: "10px" }}
              >
                <i class="fa fa-check-square" aria-hidden="true" />
                Save
              </button>
              <Link to="/customerinfo" className="btn btn-cancle">
                <i class="fa fa-close" aria-hidden="true" />
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.email = validateEmails(values.email || "");

  _.each(formFields, ({ name, is }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

function mapStateToProps(state) {
  return { formValues: state.form.customerForm };
}

CustomerForm = connect(
  mapStateToProps
  // actions
)(withRouter(CustomerForm));

export default reduxForm({
  //validate,
  form: "customerInfoForm",
  // form: "emailForm",
  //destroyOnUnmount: false,
  enableReinitialize: true
})(withRouter(CustomerForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
