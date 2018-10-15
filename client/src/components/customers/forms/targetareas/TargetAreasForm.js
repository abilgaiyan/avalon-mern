// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TargetAreasFields from "./TargetAreasFields";

//import validateEmails from "../../../../utils/validateEmails";
import formFields from "./taformFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../actions";

import Table from "./Table";

class targetAreasForm extends Component {
  render() {
    return <Table TargetAreaData={this.props.targetAreasdata} />;
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
  //console.log("state :", state);
  return { targetAreasdata: state.targetAreas };
}

// SummaryForm = connect(
//   mapStateToProps,
//   actions
// )(withRouter(SummaryForm));

// export default reduxForm({
//   // validate,
//   form: "summaryForm",
//   destroyOnUnmount: false
// })(withRouter(SummaryForm));

export default connect(mapStateToProps)(targetAreasForm);
