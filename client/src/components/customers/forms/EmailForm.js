// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContactusField from './EmailFormField';
import validateEmails from '../../utils/validateEmails';
import formFields from './emailformFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class EmailForm extends Component {
  
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ContactusField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={() =>this.props.handleSubmit(this.props.submitEmail(this.props.formValues, this.props.history))}>
          {this.renderFields()}
          <Link to="/customers" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text" >
            Save
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}
function mapStateToProps(state) {
  //console.log(state.form.contactusForm.values);
  return { formValues: state.form.contactusForm.values };
}

ContactusForm = connect(mapStateToProps, actions)(withRouter(EmailForm));
export default reduxForm({
  validate,
  form: 'emailForm',
  destroyOnUnmount: false
})(withRouter(EmailForm));


//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));


