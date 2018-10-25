import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AccordianPanel from "./AccordianPanel"
import Email from "./Email";
import PhoneCall from "./PhoneCall";
import CustomerQuery from "./CustomerQuery";
import CallLog from "../customers/forms/calllog/CallLogList";
import CustomerForm from "../customers/forms/customerinfo/CustomerForm";
import AvaloninfoForm from "../customers/forms/avaloninfo/AvaloninfoForm"
import CustomerSummary from "../customers/forms/summary/CustomerSummary";
import TargetAreasForm from "../customers/forms/targetareas/TargetAreasForm";
import SupportQueryForm from "../customers/forms/supportquery/SupportQuery";
import "../css/common.css";


class CustomerDetails extends Component {

  componentWillMount() {
    const customerId = this.props.autoCompleteId || this.props.match.params.customerId;
    this.props.fetchCustomerInfo(customerId);
  }



  componentWillReceiveProps(nextProps) {
    const customerId = nextProps.autoCompleteId;
    // console.log("customerId", this.props.autoCompleteId, nextProps)

    if (customerId !== this.props.autoCompleteId) {

      this.props.fetchCustomerInfo(customerId);
    }

  }

  // componentWillReceiveProps(nextProps) {
  //   const customerId = this.props.match.params.customerId;
  //   this.props.fetchCustomerInfo(customerId);
  // }

  renderSummry() {
    if (!this.props.customerForm) return;
    return <CustomerSummary customerSummary={this.props.customerForm} />;
    //return <CustomerSummary />;
  }

  renderCustomerInfo() {
    //if (!this.props.customerForm ) return;
    return <CustomerForm />;
    //return <CustomerForm customerFormPassed={this.props.customerForm} />;
  }

  renderAvalonInfo() {
    return <AvaloninfoForm />
  }

  renderTargetAreas() {
    if (!this.props.customerForm) return;
    return <TargetAreasForm targetAreasData={this.props.customerForm} />;
  }

  renderEmail() {
    return <Email customerId={this.props.match.params.customerId} />;
  }

  renderPhone() {
    return <PhoneCall customerId={this.props.match.params.customerId} />;
  }

  renderSupportQuery() {
    return (
      <SupportQueryForm supportQueryData={this.props.match.params.customerId} />
    );
  }

  renderCallLog() {
    return <CallLog callLogData={this.props.match.params.customerId} />;
  }

  renderQuery() {
    return <CustomerQuery customerId={this.props.match.params.customerId} />;
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-6">
          {/* accordian */}
          <div className="panel-group" id="accordion1">
            {/* Summry Start Here */}
            <AccordianPanel
              title="Summary"
              func={this.renderSummry()}
              active="True"
              AccId="Summary"
              paraent="accordion1"
              custmClass="orange"
            />
            {/* Summry End Here */}

            {/* Customer Info Start Here */}
            <AccordianPanel
              title="Customer Info"
              func={this.renderCustomerInfo()}
              active="True"
              AccId="Customer_Info"
              paraent="accordion1"
              custmClass=""
            />
            {/* Customer Info End Here */}

            {/* Avalon info form */}
            <AccordianPanel
              title="Avalon Info"
              func={this.renderAvalonInfo()}
              active="True"
              AccId="Avalon_Info"
              paraent="accordion1"
              custmClass=""
            />
          </div>
          {/* end Accordian */}
        </div>

        {/* divided block */}

        <div className="col-sm-12 col-md-6">
          {/* Start Accordian */}
          <div className="panel-group" id="accordion">
            {/* TargetAreas Start Here */}
            <AccordianPanel
              title="TargetAreas"
              func={this.renderTargetAreas()}
              active="True"
              AccId="TargetAreas"
              parent="accordion"
            />
            {/* TargetAreas End Here */}

            {/* SupportQuery Start Here */}
            <AccordianPanel
              title="Query / Support Trend"
              func={this.renderSupportQuery()}
              active="True"
              AccId="SupportQuery"
              parent="accordion"
            />
            {/* SupportQuery End Here */}

            {/* Call Log Start Here */}
            <AccordianPanel
              title="Call Log"
              func={this.renderCallLog()}
              active="True"
              AccId="callLog"
              parent="accordion"
            />
            {/* Call Log End Here */}

            {/* Emails Info Start Here */}
            <AccordianPanel
              title="Emails"
              func={this.renderEmail()}
              active="True"
              AccId="Emails"
              parent="accordion"
              custmClass=""
            />
            {/* Emails Info End Here */}

            {/* Phone Info Start Here */}
            <AccordianPanel
              title="Phone"
              func={this.renderPhone()}
              active="True"
              AccId="Phone"
              parent="accordion"
              custmClass=""
            />
            {/* Phone Info End Here */}

            {/* Query Info Start Here */}
            <AccordianPanel
              title="Query"
              func={this.renderQuery()}
              active="False"
              AccId="Query"
              parent="accordion"
              custmClass=""
            />
            {/* Query Info End Here */}
          </div>

          {/* end Accordian */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ customerForm, autoCompleteId }) {
  return { customerForm, autoCompleteId };
}

export default connect(
  mapStateToProps, actions
)(CustomerDetails);
