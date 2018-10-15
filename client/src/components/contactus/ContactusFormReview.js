// ContactusFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const ContactusFormReview = ({
  onCancel,
  formValues,
  submitContactus,
  history
}) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitContactus(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Contactus
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  //console.log(state.form.contactusForm.values);
  return { formValues: state.form.contactusForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(ContactusFormReview));
