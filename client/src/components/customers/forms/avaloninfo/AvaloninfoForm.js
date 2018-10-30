// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AvaloninfoFields from "./AvaloninfoFields";
import AvaloninfoDropdown from "./AvaloninfoDropdown";
import AvaloninfoTextarea from "./AvaloninfoTextarea";
import AvaloninfoDatetime from "./AvaloninfoDatetime"
//import validateEmails from "../../../../utils/validateEmails";
import formFields from "./aiformFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../actions";


class AvaloninfoForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      if (type === "text" ) {
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
            component={AvaloninfoDatetime}
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
          onSubmit={this.props.handleSubmit((values, history) => this.props.submitAvalonInfo(values, history))}>
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
  // console.clear();
  // console.log(state.form.avaloninfoForm);
  return { formValues: state.form.AvaloninfoForm };
}

AvaloninfoForm = connect(
  mapStateToProps,
  actions
)(withRouter(AvaloninfoForm));

export default reduxForm({
  // validate,
  form: "avaloninfoForm",
})(withRouter(AvaloninfoForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
