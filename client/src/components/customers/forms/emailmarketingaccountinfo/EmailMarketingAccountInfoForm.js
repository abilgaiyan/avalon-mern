// Business Email Info shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import inputField from "./inputField";
import validateEmails from "../../../../utils/validateEmails";
import formFields from "./formFields";
import * as actions from "../../../../actions";



class EmailMarketingAccountInfoForm extends Component {
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
        // console.log("EmailMarketingAccountInfoForm: ", nextProps.emailmarketingaccountinfoForm);
        if (nextProps.emailmarketingaccountinfoForm && !this.state.isInitializeState) {

            const initData = nextProps.emailmarketingaccountinfoForm;
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

        });
    }

    render() {
        if (!this.props.emailmarketingaccountinfoForm) {
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
                        onSubmit={this.props.handleSubmit((history) => { this.props.submitemailmarketingaccountinfoForm(this.props.formValues.values, this.props.match.params.customerId, history).then(this.setState({ disabled: true })) })}>
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
        formValues: state.form.EmailMarketingAccountInfoReduxForm,
        emailmarketingaccountinfoForm: state.emailmarketingaccountinfo
    };
}

EmailMarketingAccountInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(EmailMarketingAccountInfoForm));

export default reduxForm({
    //validate,
    form: "EmailMarketingAccountInfoReduxForm"
})(withRouter(EmailMarketingAccountInfoForm));