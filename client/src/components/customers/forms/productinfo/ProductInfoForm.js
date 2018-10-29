// Billinf FOrm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import productField from "./productField";
import ashiProductStatusDropdown from "./ashiProductStatusDropdown";
import validateEmails from "../../../../utils/validateEmails";
import formFields from "./formFields";
import * as actions from "../../../../actions";



class ProductInfoForm extends Component {
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
        if (nextProps.productInfoForm && !this.state.isInitializeState) {
            // console.log('componentWillReceiveProps', nextProps.productInfoForm);

            const initData = nextProps.productInfoForm;
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

                if (name === "websitePlan") {
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
                if (name === "websitePlan") {
                    optiondata = ["Bronze", "Silver", "Gold", "Platinum", "Diamond"];
                }
                if (name === "hostingAmount") {
                    optiondata = ["$ 69", "$ 99", "$ 129", "$ 159", "$ 249"];
                }

                return (
                    <Field
                        key={name}
                        component={websitePlanDropdown}
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
        return (
            <div>
                <button className="pull-right icon_well" onClick={this.handelEdit}><i className={this.state.disabled === true ? "fa fa-pencil-square-o fa-2x" : "fa fa-times-circle fa-2x"} aria-hidden="true"></i></button>
                <div className="clearfix"></div>
                <form
                    className="form-horizontal label-left"
                    onSubmit={this.props.handleSubmit((history) => { this.props.submitProductInfo(this.props.formValues.values, this.props.match.params.customerId, history).then(this.setState({ disabled: true })) })}>
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
        formValues: state.form.productInfoReduxForm,
        productInfoForm: state.productInfo
    };
}

ProductInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(ProductInfoForm));

export default reduxForm({
    //validate,
    form: "productInfoReduxForm"
})(withRouter(ProductInfoForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
