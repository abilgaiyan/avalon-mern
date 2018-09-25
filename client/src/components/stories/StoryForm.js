// StoryForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import StoryField from './StoryField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class StoryForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      console.log(type);
      return (
        <Field
          key={name}
          component={StoryField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onStorySubmit)}>
          {this.renderFields()}
          <Link to="/stories" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'storyForm',
  destroyOnUnmount: false
})(StoryForm);
