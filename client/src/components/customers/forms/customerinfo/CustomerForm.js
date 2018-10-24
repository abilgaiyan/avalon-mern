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


class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {isInitializeState : false}
  }


 componentWillReceiveProps(nextProps){

  if (nextProps.customerForm && !this.state.isInitializeState){
   console.log('componentWillReceiveProps', nextProps.customerForm);
  
    const initData = nextProps.customerForm;
    nextProps.initialize(initData);
    this.setState({isInitializeState : true});
  }
 }

  renderFields() {

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
        <a href="#" className="pull-right icon_well"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>
        <div className="clearfix"></div>
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

function validate(values) {
  const errors = {};

  console.log("validate", values);
  errors.email = validateEmails(values.email || "");

  _.each(formFields, ({ name, is }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}




function mapStateToProps(state) {
 
 // console.log(state.customerForm);
  return { formValues: state.form.customerInfoForm,
    customerForm: state.customerForm };
}

CustomerForm = connect(
  mapStateToProps,
  actions
)(withRouter(CustomerForm));

export default reduxForm({
  //validate,
  
  form: "customerInfoForm",
  //initialValues: intializeForm,
  enableReinitialize: true
})(withRouter(CustomerForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
