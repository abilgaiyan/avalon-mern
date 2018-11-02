// Website Info Form shows a form for a user to add input
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

class WebsiteInfoForm extends Component {
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
        // console.log("WebsiteInfo form: ", nextProps.websiteinfoForm);
        if (nextProps.websiteinfoForm && !this.state.isInitializeState) {
            // console.clear();
            // console.log("WebsiteInfo form: ", nextProps.websiteinfoForm);
            const initData = nextProps.websiteinfoForm;

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
                if (name === "_productplan" && this.props.productPlanDropdown) {
                    // console.clear();
                    // console.log("Array of objs", this.props.productPlanDropdown);
                    optiondata = this.props.productPlanDropdown;
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
                if (name === "_designeType" && this.props.designeTypeDropdown) {
                    // console.clear();
                    // console.log("Array of objs", this.props.productPlanDropdown);
                    optiondata = this.props.designeTypeDropdown;
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
                        onSubmit={this.props.handleSubmit((history) => { this.props.submitwebsiteinfoForm(this.props.formValues.values, this.props.match.params.customerId, history).then(this.setState({ disabled: true })) })}>
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
    // if (state.form.websiteinfoReuxForm && state.form.websiteinfoReuxForm.values)
    //     console.log('state.form.websiteinfoReuxForm.values ', state.form.websiteinfoReuxForm.values);
    return {
        formValues: state.form.websiteinfoReuxForm,
        websiteinfoForm: state.websiteinfo,
        productPlanDropdown: state.billingInfoProductPlanDropdownReducer,
        designTypeDropdown: state.designTypeDropdown
    };
}

WebsiteInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(WebsiteInfoForm));

export default reduxForm({
    //validate,
    form: "websiteinfoReuxForm"
})(withRouter(WebsiteInfoForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
