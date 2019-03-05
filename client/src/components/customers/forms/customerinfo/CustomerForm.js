// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomerField from "./CustomerField";
import CustomerDropdownField from "./CustomerDropdown";
import SalesPersonDropdown from "./SalesPersonDropdown";
import StateDropdown from "./StateDropdown"
import MultiselectField from "./MultiselectField"
import validateEmails from "../../../../utils/validateEmails";
import formFields from "./formFields";
import * as actions from "../../../../actions";


class CustomerForm extends Component {
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
    // console.log('componentWillReceiveProps', nextProps.customerForm);
    // console.log("customer form: ", nextProps);



    if (nextProps.customerForm && !this.state.isInitializeState) {
      const initData = nextProps.customerForm;
      //console.log("CustomerForm", initData);
      this.props.fetchSalesPersonList(initData.state);

      nextProps.initialize(initData);
      this.setState({ isInitializeState: true });
    }
  }

  // componentDidMount() {
  //   this.props.fetchSalesPersonList('CA');
  // }

  renderFields() {
    return _.map(formFields, ({ label, name, type, id }) => {
      // console.log(this.props.customerDetails[name]);
      if (type === "text") {
        if (name !== "comment") {
          return (
            <Field
              key={name}
              component={CustomerField}
              type={type}
              label={label}
              name={name}
              disabled={(this.state.disabled) ? "disabled" : ""}
            // validate={[required, maxLength15]}
            />
          );
        }

        if (name === "comment") {
          return (
            <Field
              key={name}
              component={CustomerField}
              type={type}
              label={label}
              name={name}
              disabled={(this.state.disabled) ? "disabled" : ""}
            />
          );
        }

        if (name === "contactpersonEmail") {
          return (
            <div className="checkbox">
              <Field
                key={name}
                component={CustomerField}
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
          return (
            <Field
              key={name}
              component={CustomerDropdownField}
              type={type}
              label={label}
              name={name}
              optionData={optiondata}
              disabled={(this.state.disabled) ? "disabled" : ""}
            />
          );
        }




        if (name === "customerType") {
          optiondata = ["Avalon Customer", "ASHI Customer", "Prospects", "Lead"];
          return (
            <Field
              key={name}
              component={CustomerDropdownField}
              type={type}
              label={label}
              name={name}
              optionData={optiondata}
              disabled={(this.state.disabled) ? "disabled" : ""}
            />
          );
        }

        if (name === "position") {
          optiondata = ["Partner", "Director", "CEO", "President", "V. President", "Store Manager", "Marketing Manager", "Technology Manager", "Account Manager", "Customer Service Manager", "Store Staff", "Advertising Agency", "Consultant", "Other"];

          return (
            <Field
              key={name}
              component={CustomerDropdownField}
              type={type}
              label={label}
              name={name}
              optionData={optiondata}
              disabled={(this.state.disabled) ? "disabled" : ""}
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
              disabled={(this.state.disabled) ? "disabled" : ""
              }
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
              disabled={(this.state.disabled) ? "disabled" : ""}
              onChange={this.handleChange}
            />
          );
        }

      }
    });
  }

  handleChange = (event) => {
    this.props.fetchSalesPersonList(event.target.value);
    console.log('test id', event.target.value);
    document.getElementById('sales_person_customerinfo').focus();
  };

  // handleChange = () => {
  //   // this.props.fetchSalesPersonList(stateCode);
  //   alert('t')
  //   // this.setState({
  //   //   [name]: value,
  //   // });
  // };
  // componentDidMount() {
  //   this.props.fetchSalesPersonList();
  // }



  render() {
    if (!this.props.customerForm) {
      return (
        <div>Loading...</div>
      )
    }
    if (this.props.auth !== null) {
      return (
        <div>
          <button className="pull-right icon_well" onClick={this.handelEdit}><i className={this.props.auth.permission === 1 ? (this.state.disabled === true ? "fa fa-pencil-square-o fa-2x" : "fa fa-times-circle fa-2x") : ""} aria-hidden="true"></i></button>
          <div className="clearfix"></div>
          <form
            className="form-horizontal label-left"
            onSubmit={this.props.handleSubmit((history) => { this.props.submitCustomerInfo(this.props.formValues.values, this.props.match.params.customerId, history).then(this.setState({ disabled: true })) })}>
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
    <div>Loading...</div>
  }
}



function validate(values) {
  const errors = {};
  errors.contactpersonEmail = validateEmails(values.contactpersonEmail || "");

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

  return errors;
}
function mapStateToProps(state) {
  // console.clear();
  // console.log(state.buyingGroup);
  return {
    auth: state.auth,
    formValues: state.form.customerInfoForm,
    customerForm: state.customerForm,
    buyingGroup: state.buyingGroup,
    salesPerson: state.salesPerson,
    stateAllData: state.statedata
  };
}

CustomerForm = connect(
  mapStateToProps,
  actions
)(withRouter(CustomerForm));

export default reduxForm({
  validate,
  form: "customerInfoForm"
})(withRouter(CustomerForm));

//export default connect(mapStateToProps, actions)(withRouter(ContactusForm));
