// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EmailField from './EmailField';
import validateEmails from '../../../../utils/validateEmails';
import fields from './fields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../actions';
import './email.css'

class EmailForm extends Component {

    renderFields() {
        return _.map(fields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={EmailField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-sm-offset-3" id="myModal" role="dialog">
                <form className="form-email marginTop40" onSubmit={() => this.props.handleSubmit(this.props.submitEmail(this.props.formValues, this.props.customerId, this.props.history))}>
                    {this.renderFields()}
                    <div className="btn-group">
                        <Link to="/Email" className="btn btn-default">Cancel</Link>
                        <button type="submit" className="btn btn-primary" >Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.email = validateEmails(values.email || '');

    _.each(fields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}
function mapStateToProps(state) {
    //console.log(state.form.EmailForm.values);
    return { formValues: state.form.emailForm.values };
}

EmailForm = connect(mapStateToProps, actions)(withRouter(EmailForm));
export default reduxForm({
    validate,
    form: 'emailForm',
    destroyOnUnmount: false
})(withRouter(EmailForm));


//export default connect(mapStateToProps, actions)(withRouter(EmailForm));


