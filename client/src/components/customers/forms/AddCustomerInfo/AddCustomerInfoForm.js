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
import SalesPersonDropdown from "./SalesPersonDropdown";
import StateDropdown from "./StateDropdown"
import MultiselectField from "./MultiselectField"
import datetimeField from "./datetimeField";
import timeField from "./timeField"
import validateEmails from "../../../../utils/validateEmails";
import validatePhoneNumber from "../../../../utils/validatePhoneNumber";
import * as actions from "../../../../actions";

momentLocaliser(moment);

class AddCustomerInfoForm extends Component {

    constructor(props) {
        super(props);

        this.state = { disabled: false, removeErrorclass: '' }
        this._closeModal = this._closeModal.bind(this);
        this._submitAndRedirect = this._submitAndRedirect.bind(this);
        this.removeErrorClass = this.removeErrorClass.bind(this);
        // this.handelCancelEdit = this.handelCancelEdit.bind(this);
    }

    componentWillMount() {
        this.props.fetchBuyingGrpList();
        this.props.fetchSalesPersonList("XX");
    }

    componentWillReceiveProps() {
        this.props.fetchStateList();


    }

    // focusChange

    handleChange = (event) => {
        this.props.fetchSalesPersonList(event.target.value);
        // console.log('test id', event.target.value);
        document.getElementById('sales_person_addcustomerinfo').focus();

    };

    removeErrorClass() {
        let element = document.getElementsByName("jewelsoftId");
        element[0].classList.remove("invalid_message");
    }

    _closeModal() {
        // console.log(this.props.dupkey);
        if (this.props.dupkey === null) {
            // console.log(document.querySelectorAll('.modal-body .form-control'));
            document.querySelectorAll('.modal-body .form-control').forEach(function (ele, idx) {
                // alert(ele.getAttribute('name'))
                if (ele.getAttribute('name') == "jewelsoftId") {
                    ele.classList.add('invalid_message')
                }
                else {
                    ele.classList.remove('invalid_message')
                }
            });
            return;
        }
        document.getElementById('AddCustInfoClose').click();
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
                        removeErrorClass={this.removeErrorClass}
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
            if (type === "checkbox") {
                let optiondata = [];
                //let itemdata = [];
                if (name === "_buyinggroups" && this.props.buyingGroup) {
                    // console.clear();
                    // console.log("Array of objs", this.props.buyingGroup);
                    optiondata = this.props.buyingGroup;
                    //itemdata = this.props.buyingGroup.map((data, index) => (data._buyinggroups));
                    // console.clear();
                    // console.log("Array of objs", optiondata);
                    return (
                        <Field
                            key={name}
                            component={MultiselectField}
                            type={type}
                            label={label}
                            name={name}
                            optionData={optiondata}
                            //itemData={itemdata}
                            disabled={(this.state.disabled) ? "true" : ""}
                        />);
                }
            }
            if (type === "dropdown") {
                let optiondata = [];
                if (name === "city") {
                    optiondata = ["TEXARKANA", "PRATTVILLE", "ROSWELL", "CARLSBAD", "ANNISTON", "FLORENCE", "MARKHAM", "KINGMAN", "KINGSTON", "SEARCY", "BISMARCK", "COMMACK", "RIVERSIDE", "DANVILLE", "BAKERSFIELD", "PARIS", "LOUISVILLE", "ATWOOD", "SHELBYVILLE", "FT. MITCHELL", "ELKHART", "HOOVER", "DEMOPOLIS", "MEMPHIS", "FAIRHOPE", "BOUNTIFUL", "EVANSVILLE", "CORPUS CHRISTI", "BEECH GROVE", "OVERLAND PARK", "MORRISTOWN", "DALLAS", "WILLIAMSTOWN", "GERMANTOWN", "FORT SMITH", "LAKE CHARLES", "DAVENPORT", "HARRISONVILLE", "CARROLLTON", "BLUE RIDGE", "BERWICK", "SNELLVILLE", "TRENTON", "PRESCOTT", "MARSHFIELD", "ANDALUSIA", "YORBA LINDA", "JOHNSTON", "LEE'S SUMMIT", "LAFAYETTE", "GRANITE CITY", "MONROEVILLE", "RUSTON", "SCOTTSDALE", "ROSEVILLE", "GRAND FORKS", "AUBURN", "WAVERLY", "GREENSBURG", "SAN ANTONIO", "HAMMOND", "WEBSTER CITY", "CLINTON", "MIAMI", "BREESE", "MT. PLEASANT", "BEDFORD", "DENVILLE", "ASHLAND", "BARTLESVILLE", "TARBORO", "THE VILLAGES", "MONTGOMERY", "BOCA RATON", "JACKSON", "STATEN ISLAND", "ATHENS", "ELIZABETHTOWN", "CORINTH", "SAINT CLAIR", "JESUP", "ERIE", "NEWTON", "NEWPORT", "WACO", "INDEPENDENCE", "SHAWNEE", "MINNETONKA", "NORTH ATTLEBORO", "WAYNE", "MAUMEE", "FREEPORT", "GARDEN CITY", "ADA", "RANCHO CUCAMONGA", "LUDLOW", "TALLADEGA", "MOUNT PLEASANT", "WEST SAINT PAUL", "BLOOMINGTON", "TINLEY PARK", "MOORESVILLE", "LAS VEGAS", "CENTRALIA", "BEMIDJI", "MERIDIAN", "LAVONIA", "MARYSVILLE", "PANAMA CITY", "MAITLAND", "POCATELLO", "IUKA", "NORTHPORT", "PAULS VALLEY", "HUNTSVILLE", "WICHITA", "CINCINNATI", "HIRAM", "SIOUX FALLS", "VENICE", "BRATTLEBORO", "WESTFIELD", "LUBBOCK", "FERNANDINA BEACH", "TERRE HAUTE", "CHILLICOTHE", "HENDERSONVILLE", "OREM", "SPARTANBURG", "VAN WERT", "BROKEN ARROW", "QUINCY", "LEBANON", "HINESVILLE", "WADSWORTH", "DICKSON", "TUCSON", "TURLOCK", "OTTAWA", "TOMS RIVER", "TEUTOPOLIS", "WEST CHESTER", "YONKERS", "CAPE GIRARDEAU", "ATTLEBORO", "KLAMATH FALLS", "BELLPORT", "JOHNSON CITY", "EAST TAWAS", "MORGAN CITY", "SELMA", "TORONTO", "PETROLIA", "MANCHESTER", "SHREVEPORT", "EDMONDS", "SANDUSKY", "LAKE PLACID", "ST.PETERSBURG", "JERSEY CITY", "MASSAPEQUA", "ANDERSON", "NEW TAZEWELL", "SUN PRAIRIE", "ALLENTOWN", "GUNTERSVILLE", "FALL RIVER", "RALEIGH", "ALPHARETTA", "WEST BEND", "SPRINGFIELD", "CALGARY", "CRESTVIEW", "THOMASVILLE", "MOORE", "OWENSBORO", "BISHOP", "BUFFALO", "NANUET", "LAWRENCEBURG", "WINTER HAVEN", "MANKATO", "KILLEEN", "ST. FRANCISVILLE", "EL CERRITO", "LINDON", "DEFIANCE", "EAST LONGMEADOW", "DOTHAN", "GALLIPOLIS", "ELMHURST", "EXTON", "WACONIA", "TAMPA", "APPLETON", "MARIETTA", "GULF BREEZE", "SEDALIA", "WAITE PARK", "SANFORD", "ROCKFORD", "ONTARIO", "SYCAMORE", "KINGS MOUNTAIN", "JASPER", "OSHKOSH", "EDEN", "WELLINGTON", "BELLMORE", "CHAMPERSBURG", "COLUMBUS", "COMANCHE", "CULLMAN", "WEYMOUTH", "HUMBLE", "CHICKASHA", "FORT WORTH", "WAUSAU", "HOT SPRINGS", "CEDAR FALLS", "LUMBERTON", "WICHITA FALLS", "EPHRATA", "MARSHALL", "FOLSOM", "WILLISTON", "WORTHINGTON", "NEW YORK", "St. Marie", "ST. PETERS", "LEESVILLE ", "HARVARD", "NEW ALBANY", "CONCORD", "RICHARDSON", "MITCHELL"];
                }
                if (name === "customerType") {
                    optiondata = ["Avalon Customer", "Avalon Customer On Hold", "ASHI Customer", "Prospects", "Lead"];
                }
                if (name === "position") {
                    optiondata = ["Partner", "Director", "CEO", "President", "V. President", "Store Manager", "Marketing Manager", "Technology Manager", "Account Manager", "Customer Service Manager", "Store Staff", "Advertising Agency", "Consultant", "Other"];
                }

                if (name !== "salesPerson" && name !== "state") {
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

                if (name === "salesPerson" && this.props.salesPerson) {
                    optiondata = this.props.salesPerson
                    return (
                        < Field
                            key={name}
                            component={SalesPersonDropdown}
                            type={type}
                            label={label}
                            name={name}
                            optionData={optiondata}
                        //disabled={(this.state.disabled) ? "disabled" : "" }
                        />
                    );
                }

                if (name === "state" && this.props.stateAllData) {
                    optiondata = this.props.stateAllData;
                    // console.log('optiondata', optiondata)
                    return (
                        <Field
                            key={name}
                            component={StateDropdown}
                            type={type}
                            label={label}
                            name={name}
                            optionData={optiondata}
                            //disabled={(this.state.disabled) ? "disabled" : ""}
                            onChange={this.handleChange}
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
        // console.clear();
        // console.log(this.props.previousCallTypeDropdown);
        // if (!this.props.stateAllData) {
        //     return ""
        // }
        // document.querySelectorAll('.modal-body .form-control').forEach(function (ele, idx) {
        //     // alert(ele.getAttribute('name'))
        //     if (ele.getAttribute('name') == "jewelsoftId") {
        //         console.log(ele.getAttribute('class'));
        //     }
        //     else {

        //     }
        // });
        //var ele = document.querySelectorAll('[name=jewelsoftId]');
        //console.log(ele.getAttribute('class'));

        // console.log(document.querySelectorAll('[name=jewelsoftId]'))
        return (
            <div className="modal fade" id="addcustomerinfoModal" role="dialog" tabIndex="1" data-backdrop="false" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog modal-lg">


                    <div className="modal-content">
                        <div className="modal-header text-left">
                            <button type="button" className="close" data-dismiss="modal" onClick={reset}>&times;</button>
                            <h4 className="modal-title">Add Customer</h4>
                        </div>
                        <div className="modal-body">
                            <div className="clearfix"></div>
                            <div className="row">
                                <form className="form-horizontal label-left"
                                    onSubmit={this.props.handleSubmit((history) => { this.props.submitAddCustomerInfoForm(this.props.formValues.values, history).then(this._closeModal).then(this._submitAndRedirect) })}>
                                    {this.renderFields()}
                                    {
                                        <div className="form-group col-sm-12">
                                            <div className="col-sm-12 text-right">
                                                <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }} disabled={pristine || submitting}>
                                                    <i className="fa fa-check-square" aria-hidden="true"></i>
                                                    Save</button>
                                                <button type="button" id="AddCustInfoClose" className="btn btn-default" data-dismiss="modal" onClick={reset}>Cancel</button>

                                            </div>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );


    }
}

function validate(values) {
    const errors = {};
    errors.contactpersonEmail = validateEmails(values.contactpersonEmail || "");
    errors.telephone1 = validatePhoneNumber(values.telephone1 || "");
    // errors.telephone2 = validatePhoneNumber(values.telephone2 || "");
    errors.mobileNumber = validatePhoneNumber(values.mobileNumber || "");

    // _.each(formFields, ({ name, is }) => {
    //     if (!values[name]) {
    //         errors[name] = "You must provide a value";
    //     }
    // });

    if (!values.jewelsoftId) {
        errors.jewelsoftId = "invalid_message"
    }
    if (!values.Name) {
        errors.Name = "invalid_message"
    }
    if (!values.contactpersonEmail) {
        errors.contactpersonEmail = "invalid_message"
    }
    if (!values.telephone1) {
        errors.telephone1 = "invalid_message"
    }
    // if (!values.telephone2) {
    //     errors.telephone2 = "invalid_message"
    // }
    if (!values.mobileNumber) {
        errors.mobileNumber = "invalid_message"
    }

    return errors;
}
function mapStateToProps(state) {
    // console.clear();
    // console.log(state.customerForm);
    return {
        formValues: state.form.addcustomerinfoReduxForm,
        addcustomerinfoForm: state.addcustomerinfo,
        buyingGroup: state.buyingGroup,
        salesPerson: state.salesPerson,
        stateAllData: state.statedata,
        dupkey: state.customerForm
        //previousCallTypeDropdown: state.previousCallTypeDropdown
    };
}

AddCustomerInfoForm = connect(
    mapStateToProps,
    actions
)(withRouter(AddCustomerInfoForm));

export default reduxForm({
    validate,
    form: "addcustomerinfoReduxForm"
})(withRouter(AddCustomerInfoForm));