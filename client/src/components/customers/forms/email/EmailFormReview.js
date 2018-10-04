// EmailFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import fields from './fields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../actions';

const EmailFormReview = ({ onCancel, formValues, submitEmail, history }) => {
    const reviewFields = _.map(fields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
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
                onClick={() => submitEmail(formValues, history)}
                className="green btn-flat right white-text"
            >
                Send Email
        <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    //console.log(state.form.EmailForm.values);
    return { formValues: state.form.EmailForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(EmailFormReview));
