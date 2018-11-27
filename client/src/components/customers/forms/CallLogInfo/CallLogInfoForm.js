// Call Log Info Form shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from 'moment'
import momentLocaliser from "react-widgets-moment";

import formFields from "./formFields";
import inputField from "./inputField";
import dropdown from "./dropdown";
import datetimeField from "./datetimeField";
import timeField from "./timeField"
import validateEmails from "../../../../utils/validateEmails";
import * as actions from "../../../../actions";

momentLocaliser(moment);

class CallLogInfoForm extends Component {
    constructor(props) {
        super(props);
        this._closeModal = this._closeModal.bind(this);
        this._submitAndRedirect = this._submitAndRedirect.bind(this);
    }
    _closeModal() {
        document.getElementById('AddCallInfoClose').click();
        const customerId = this.props.match.params.customerId;
        this.props.fetchcallloginfoList(customerId);

    }
    _submitAndRedirect() {
        this.props.history.push("/customers")
    }

    renderFields() {
        return _.map(formFields, ({ label, name, type }) => {
            // console.log(this.props.customerDetails[name]);
            if (type === "text") {
                return (
                    <Field
                        key={name}
                        component={inputField}
                        type={type}
                        label={label}
                        name={name}
                    //disabled={(this.state.disabled) ? "disabled" : ""}
                    />
                );
            }

            if (type === "dropdown") {
                let optiondata = [];
                if (name === "_previousCallType" && this.props.previousCallTypeDropdown) {
                    // console.clear();
                    // console.log("Array of objs", this.props.previousCallTypeDropdown);
                    optiondata = this.props.previousCallTypeDropdown;
                    return (
                        <Field
                            key={name}
                            component={dropdown}
                            type={type}
                            label={label}
                            name={name}
                            optionData={optiondata}
                        //disabled={(this.state.disabled) ? "disabled" : ""}
                        />
                    );
                }
            }

            if (type === "datetime") {
                return (
                    <Field
                        key={name}
                        component={datetimeField}
                        type={type}
                        label={label}
                        name={name}
                        //disabled={(this.state.disabled) ? "disabled" : ""}
                        showTime={false}
                    />
                );
            }
            if (type === "time") {
                return (
                    <Field
                        key={name}
                        component={timeField}
                        type={type}
                        label={label}
                        name={name}
                        //disabled={(this.state.disabled) ? "disabled" : ""}
                        showTime={true}
                    />
                );
            }
        });
    }


    render() {
        const { pristine, reset, submitting } = this.props;
        //console.log("state -->>", this.state.modalOpen)
        if (!this.props.previousCallTypeDropdown) {
            // console.clear();
            // console.log(this.props.productPlanDropdown[0].planName);
            return (<div>Loading...</div>)
        }
        else {
            // console.clear();
            // console.log(this.props.previousCallTypeDropdown);
            return (
                <div className="modal fade" id="callLogModal" role="dialog" data-backdrop="false" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">


                        <div className="modal-content">
                            <div className="modal-header text-left">
                                <button type="button" className="close" data-dismiss="modal" onClick={reset}>&times;</button>
                                <h4 className="modal-title">Call Log</h4>
                            </div>
                            <div className="modal-body">
                                <div className="clearfix"></div>
                                <form className="form-horizontal label-left"
                                    onSubmit={this.props.handleSubmit((history) => {
                                        this.props.submitCallLogInfoForm(this.props.formValues.values, this.props.match.params.customerId, history)
                                            .then(this._closeModal)
                                        // .then(this._submitAndRedirect)
                                    })}>
                                    {this.renderFields()}
                                    {
                                        <div className="form-group">
                                            <div className="col-xs-9 col-xs-offset-3 text-left">
                                                <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }} disabled={pristine || submitting}>
                                                    <i className="fa fa-check-square" aria-hidden="true"></i>
                                                    Save</button>
                                                <button type="button" id="AddCallInfoClose" className="btn btn-default" data-dismiss="modal" onClick={reset}>Cancel</button>

                                            </div>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>

                    </div>
                </div>


            );
        }

    }
}

function validate(values) {
    const errors = {};
    //errors.email = validateEmails(values.email || "");

    // _.each(formFields, ({ name }) => {
    //     if (!values[name]) {
    //         errors[name] = "You must provide a value";
    //     }
    // });

    if (!values._previousCallType) {
        errors._previousCallType = "invalid_message"
    }


    return errors;
}
function mapStateToProps(state) {
    // console.clear();
    // console.log(state);
    return {
        formValues: state.form.callloginfoReduxForm,
        callloginfoForm: state.callloginfo,
        previousCallTypeDropdown: state.previousCallTypeDropdown
    };
}

CallLogInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(CallLogInfoForm));

export default reduxForm({
    validate,
    form: "callloginfoReduxForm"
})(withRouter(CallLogInfoForm));