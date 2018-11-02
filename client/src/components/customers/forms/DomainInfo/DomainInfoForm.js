// Ashi MicroWebsite Info shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from 'moment'
import momentLocaliser from "react-widgets-moment";
//import momentLocaliser from 'react-widgets/lib/localizers/moment'

import 'react-widgets/dist/css/react-widgets.css'

import inputField from "./inputField";
import datetimeField from "./datetimeField";
import validateEmails from "../../../../utils/validateEmails";
import formFields from "./formFields";
import * as actions from "../../../../actions";


momentLocaliser(moment)

class DomainInfoForm extends Component {
    constructor(props) {
        super(props);

        this.state = { disabled: true, isInitializeState: false }
        this.handelEdit = this.handelEdit.bind(this);
        this.handelCancelEdit = this.handelCancelEdit.bind(this);
    }

    handelEdit() {
        this.setState({ disabled: !this.state.disabled })
    }
    handelCancelEdit() {
        this.setState({ disabled: true })
    }





    componentWillReceiveProps(nextProps) {
        // console.clear();
        // console.log("DomainInfoForm: ", nextProps.domainInfoForm);
        if (nextProps.domainInfoForm && !this.state.isInitializeState) {

            const initData = nextProps.domainInfoForm;
            nextProps.initialize(initData);
            this.setState({ isInitializeState: true });
        }
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
                        disabled={(this.state.disabled) ? "disabled" : ""}
                    // validate={[required, maxLength15]}
                    />
                );
            }
            if (type === "datetime") {
                return (
                    <Field
                        key={name}
                        component={datetimeField}
                        type={type}
                        label={label}
                        name={name}
                        showTime={false}
                    // validate={[required, maxLength15]}
                    />
                );
            }
        });
    }

    render() {
        if (!this.props.domainInfoForm) {
            // console.clear();
            // console.log(this.props.productPlanDropdown[0].planName);
            return (<div>Loading...</div>)
        }
        else {
            // console.clear();
            // console.log(this.props.productPlanDropdown);
            return (
                <div>
                    <button className="pull-right icon_well" onClick={this.handelEdit}><i className={this.state.disabled === true ? "fa fa-pencil-square-o fa-2x" : "fa fa-times-circle fa-2x"} aria-hidden="true"></i></button>
                    <div className="clearfix"></div>
                    <form
                        className="form-horizontal label-left"
                        onSubmit={this.props.handleSubmit((history) => { this.props.submitdomainInfoForm(this.props.formValues.values, this.props.match.params.customerId, history).then(this.setState({ disabled: true })) })}>
                        {this.renderFields()}
                        {
                            this.state.disabled === true ? "" :
                                <div className="form-group">
                                    <div className="col-xs-9 col-xs-offset-3 text-left">
                                        <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }}>
                                            <i className="fa fa-check-square" aria-hidden="true"></i>
                                            Save

                  </button>
                                        <a className="btn btn-cancle" onClick={this.handelCancelEdit}>
                                            <i className="fa fa-close" aria-hidden="true"></i>
                                            Cancel
                  </a>
                                    </div>
                                </div>}
                    </form>
                </div>
            );
        }

    }
}

function validate(values) {
    const errors = {};
    errors.email = validateEmails(values.email || "");

    _.each(formFields, ({ name, is }) => {
        if (!values[name]) {
            errors[name] = "You must provide a value";
        }
    });

    return errors;
}
function mapStateToProps(state) {
    // console.clear();
    // console.log(state);
    return {
        formValues: state.form.DomainInfoReduxForm,
        domainInfoForm: state.domainInfo
    };
}

DomainInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(DomainInfoForm));

export default reduxForm({
    //validate,
    form: "DomainInfoReduxForm"
})(withRouter(DomainInfoForm));