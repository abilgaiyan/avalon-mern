import _ from "lodash";
import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FIELDS from './fields';
import PhoneField from "./PhoneField"
import * as actions from '../../../../actions';

class PhoneForm extends Component {


    renderFields() {
        return _.map(FIELDS, ({ label, name, type }) => {
            return <Field key={name} component={PhoneField} type={type} label={label} name={name} />
        })
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 modal fade" id="phonepopup" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                &times;
                </button>
                            <h4 className="modal-title">Email Details</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.props.handleSubmit((values, history) => this.props.submitPhonecall(values, this.props.customerId, history))}>
                                {this.renderFields()}
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, ({ name, errmsg }) => {
        if (!values[name]) {
            errors[name] = errmsg
        }
    })

    return errors;
}

// function mapStateToProps(state) {
//     //console.log(state.form.phoneForm.values);
//     return { formValues: state.form.phoneForm.values };
// }



export default connect(null, actions)(reduxForm({ validate, form: "phoneForm" })(withRouter(PhoneForm)))