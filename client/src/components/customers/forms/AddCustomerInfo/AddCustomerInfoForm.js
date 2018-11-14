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

class AddCustomerInfoForm extends Component {


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

            // if (type === "dropdown") {
            //     let optiondata = [];
            //     if (name === "_previousCallType" && this.props.previousCallTypeDropdown) {
            //         // console.clear();
            //         // console.log("Array of objs", this.props.previousCallTypeDropdown);
            //         optiondata = this.props.previousCallTypeDropdown;
            //         return (
            //             <Field
            //                 key={name}
            //                 component={dropdown}
            //                 type={type}
            //                 label={label}
            //                 name={name}
            //                 optionData={optiondata}
            //             //disabled={(this.state.disabled) ? "disabled" : ""}
            //             />
            //         );
            //     }
            // }
            if (type === "dropdown") {
                let optiondata = [];
                if (name === "city") {
                    optiondata = ["New York", "Jew Jercy", "Verginia", "TEXARKANA"];
                }
                if (name === "customerType") {
                    optiondata = ["Customer", "Prospect", "Lead"];
                }

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

        // console.clear();
        // console.log(this.props.previousCallTypeDropdown);
        return (
            <div className="modal fade" id="addcustomerinfoModal" role="dialog" tabIndex="1" data-backdrop="false" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header text-left">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add Customer</h4>
                        </div>
                        <div className="modal-body">


                            {/* <button className="pull-right icon_well" onClick={this.handelEdit}><i className={this.state.disabled === true ? "fa fa-pencil-square-o fa-2x" : "fa fa-times-circle fa-2x"} aria-hidden="true"></i></button> */}
                            <div className="clearfix"></div>
                            <form className="form-horizontal label-left"
                                onSubmit={this.props.handleSubmit((history) => { this.props.submitAddCustomerInfoForm(this.props.formValues.values, history).then(this.props.history.push("/customers")) })}>
                                {this.renderFields()}
                                {
                                    // this.state.disabled === true ? "" :
                                    <div className="form-group">
                                        <div className="col-xs-9 col-xs-offset-3 text-left">
                                            <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }}>
                                                <i className="fa fa-check-square" aria-hidden="true"></i>
                                                Save</button>
                                            {/* <a className="btn btn-cancle" onClick={this.handelCancelEdit}>
                                                    <i className="fa fa-close" aria-hidden="true"></i>
                                                    Cancel</a> */}
                                        </div>
                                    </div>
                                }
                            </form>


                        </div>

                    </div>

                </div>
            </div>


            // <div>
            //     <button className="pull-right icon_well" ><i className="fa fa-times-circle fa-2x" aria-hidden="true"></i></button>
            //     <div className="clearfix"></div>
            //     <form
            //         className="form-horizontal label-left"
            //         onSubmit={this.props.handleSubmit((history) => { this.props.submitCallLogInfoForm(this.props.formValues.values, this.props.match.params.customerId, history) })}>
            //         {this.renderFields()}
            //         {
            //             <div className="form-group">
            //                 <div className="col-xs-9 col-xs-offset-3 text-left">
            //                     <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }}>
            //                         <i className="fa fa-check-square" aria-hidden="true"></i>
            //                         Save

            //   </button>
            //                     <a className="btn btn-cancle">
            //                         <i className="fa fa-close" aria-hidden="true"></i>
            //                         Cancel
            //   </a>
            //                 </div>
            //             </div>}
            //     </form>
            // </div>
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
        formValues: state.form.addcustomerinfoReduxForm,
        addcustomerinfoForm: state.addcustomerinfo,
        //previousCallTypeDropdown: state.previousCallTypeDropdown
    };
}

AddCustomerInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(AddCustomerInfoForm));

export default reduxForm({
    //validate,
    form: "addcustomerinfoReduxForm"
})(withRouter(AddCustomerInfoForm));