// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SummaryFields from "./SummaryFields";

//import validateEmails from "../../../../utils/validateEmails";
import formFields from "./smryformFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../actions";

class SummaryForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      if (label === "") {
        return (
          <Field
            key={name}
            component={SummaryFields}
            type={type}
            label={name}
            name={name}
            // validate={[required, maxLength15]}
          />
        );
      }
      if (label != "") {
        return (
          <Field
            key={name}
            component={SummaryFields}
            type={type}
            label={label}
            name={name}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <form
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
          {/* <Link to="/customerinfo" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Save
            <i className="material-icons right">done</i>
          </button> */}
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
  return { formValues: state.form.SummaryForm };
}

SummaryForm = connect(
  mapStateToProps,
  actions
)(withRouter(SummaryForm));

export default reduxForm({
  // validate,
  form: "summaryForm",
  destroyOnUnmount: false
})(withRouter(SummaryForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
