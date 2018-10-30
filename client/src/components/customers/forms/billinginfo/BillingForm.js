// Billinf FOrm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import billingField from "./billingField";
import productPlanDropdown from "./productPlanDropdown";
import validateEmails from "../../../../utils/validateEmails";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../actions";



class BillingForm extends Component {
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

    // componentWillMount() {
    //     this.props.fetchBillingInfoProductPlanDropdown();
    // }


    componentWillReceiveProps(nextProps) {

        // console.clear();
        // console.log('componentWillReceiveProps', nextProps.billingForm);
        if (nextProps.billingForm && !this.state.isInitializeState) {
            const initData = nextProps.billingForm;
            nextProps.initialize(initData);
            this.setState({ isInitializeState: true });
        }
    }


    renderFields() {
        return _.map(formFields, ({ label, name, type }) => {
            // console.log(this.props.customerDetails[name]);
            if (type === "text") {
                if (name !== "comments") {
                    return (
                        <Field
                            key={name}
                            component={billingField}
                            type={type}
                            label={label}
                            name={name}
                            disabled={(this.state.disabled) ? "disabled" : ""}
                        // validate={[required, maxLength15]}
                        />
                    );
                }

                if (name === "comments") {
                    return (
                        <Field
                            key={name}
                            component={billingField}
                            type={type}
                            label={label}
                            name={name}
                            disabled={(this.state.disabled) ? "disabled" : ""}
                        />
                    );
                }

                if (name === "productPlan") {
                    return (
                        <div className="checkbox">
                            <Field
                                key={name}
                                component={billingField}
                                type={type}
                                label={label}
                                name={name}
                                disabled={(this.state.disabled) ? "disabled" : ""}
                            />
                        </div>
                    );
                }
            }

            if (type === "checkbox") {
                return (
                    <Field
                        key={name}
                        component={billingField}
                        type={type}
                        label={label}
                        name={name}
                        disabled={(this.state.disabled) ? "disabled" : ""}
                    />
                );
            }

            if (type === "dropdown") {
                let optiondata = [];
                let hostingdata = [];
                if (name === "_productPlan") {
                    optiondata = this.props.productPlanDropdown;
                }
                if (name === "hostingAmount") {
                    hostingdata = this.props.hostingAmountDropdown;
                }

                return (
                    <Field
                        key={name}
                        component={productPlanDropdown}
                        type={type}
                        label={label}
                        name={name}
                        optionData={optiondata}
                        disabled={(this.state.disabled) ? "disabled" : ""}
                    />
                );
            }
        });
    }

    render() {
        if (!this.props.productPlanDropdown) {
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
                        onSubmit={this.props.handleSubmit((history) => { this.props.submitBillingInfo(this.props.formValues.values, this.props.match.params.customerId, history).then(this.setState({ disabled: true })) })}>
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
    console.clear();
    console.log(state);
    return {
        formValues: state.form.billingReduxForm,
        billingForm: state.billingInfo,
        // billingForm: state.billingInfo,
        productPlanDropdown: state.billingInfoProductPlanDropdownReducer,
        hostingAmountDropdown: state.billingInfoHostingAmountDropdownReducer
    };
}

BillingForm = connect(
    mapStateToProps,
    actions
)(withRouter(BillingForm));

export default reduxForm({
    //validate,
    form: "billingReduxForm"
})(withRouter(BillingForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
