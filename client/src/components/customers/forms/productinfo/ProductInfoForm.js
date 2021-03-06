// Product Info Form shows a form for a user to add input
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
import validateEmails from "../../../../utils/validateEmails";
import * as actions from "../../../../actions";

momentLocaliser(moment);

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
        if (nextProps.productinfoForm && !this.state.isInitializeState) {
            // console.clear();
            // console.log("Product Info form: ", nextProps.productinfoForm);
            const initData = nextProps.productinfoForm;

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
                    />
                );
            }

            if (type === "dropdown") {
                let optiondata = [];
                if (name === "_ashiProductStatus" && this.props.ashiproductstatusDropdown) {
                    // console.clear();
                    // console.log("Array of objs", this.props.ashiproductstatusDropdown);
                    optiondata = this.props.ashiproductstatusDropdown;
                    return (
                        <Field
                            key={name}
                            component={dropdown}
                            type={type}
                            label={label}
                            name={name}
                            optionData={optiondata}
                            disabled={(this.state.disabled) ? "disabled" : ""}
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
                        disabled={(this.state.disabled) ? "disabled" : ""}
                        showTime={false}
                    />
                );
            }
        });
    }


    render() {
        if (!this.props.ashiproductstatusDropdown) {
            // console.clear();
            // console.log(this.props.productPlanDropdown[0].planName);
            return (<div>Loading...</div>)
        }
        else {
            // console.clear();
            // console.log(this.props.productPlanDropdown);
            if (this.props.auth !== null) {
                return (
                    <div>
                        <button className="pull-right icon_well" onClick={this.handelEdit}><i className={this.props.auth.permission === 1 ? (this.state.disabled === true ? "fa fa-pencil-square-o fa-2x" : "fa fa-times-circle fa-2x") : ""} aria-hidden="true"></i></button>
                        <div className="clearfix"></div>
                        <form
                            className="form-horizontal label-left"
                            onSubmit={this.props.handleSubmit((history) => { this.props.submitproductinfoForm(this.props.formValues.values, this.props.match.params.customerId, history).then(this.setState({ disabled: true })) })}>
                            {this.renderFields()}
                            {
                                this.state.disabled === true ? "" :
                                    <div className="form-group">
                                        <div className="col-xs-8 col-xs-offset-4 text-left">
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
            return (<div>Loading...</div>)
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
        auth: state.auth,
        formValues: state.form.productinfoReduxForm,
        productinfoForm: state.productinfo,
        ashiproductstatusDropdown: state.ashiproductstatusDropdown
    };
}

ProductInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(ProductInfoForm));

export default reduxForm({
    //validate,
    form: "productinfoReduxForm"
})(withRouter(ProductInfoForm));