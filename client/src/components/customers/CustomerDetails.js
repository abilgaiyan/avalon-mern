import React, { Component } from "react";
import { connect } from "react-redux";
import Email from "./Email";
import PhoneCall from "./PhoneCall";
import CustomerQuery from "./CustomerQuery";
import { fetchCustomerInfo } from "../../actions/index";
import CustomerForm from "../customers/forms/customerinfo/CustomerForm";
import CustomerSummary from "../customers/forms/summary/CustomerSummary";
import TargetAreasForm from "../customers/forms/targetareas/TargetAreasForm";
import SupportQueryForm from "../customers/forms/supportquery/SupportQuery";
import CallLog from "../customers/forms/calllog/CallLogList";

import "../css/common.css";

class AccordianPanel extends Component {
  render() {
    return (
      <div className="panel panel-default new">
        <div
          className={
            this.props.active === "True"
              ? "panel-heading active"
              : "panel-heading "
          }
        >
          <h4 className="panel-title">
            <a
              className={this.props.active === "True" ? "" : "collapsed"}
              data-toggle="collapse"
              data-parent={"#" + this.props.parent}
              href={"#" + this.props.AccId}
            >
              {this.props.title}
            </a>
          </h4>
        </div>
        <div
          id={this.props.AccId}
          className={
            this.props.active === "True"
              ? "panel-collapse collapse in"
              : "panel-collapse collapse"
          }
        >
          <div className="panel-body">{this.props.func}</div>
        </div>
      </div>
    );
  }
}
class CustomerDetails extends Component {
  componentDidMount() {
    const customerId = this.props.match.params.customerId;
    this.props.fetchCustomerInfo(customerId);
  }

  renderTargetAreas() {
    if (!this.props.customerForm && this.props.customerForm.length <= 0) return;
    return <TargetAreasForm targetAreasData={this.props.customerForm} />;
  }

  renderSummry() {
    if (!this.props.customerForm && this.props.customerForm.length <= 0) return;
    return <CustomerSummary customerSummary={this.props.customerForm} />;
  }
  renderCustomer() {
    if (!this.props.customerForm && this.props.customerForm.length <= 0) return;
    return <CustomerForm customerDetails={this.props.customerForm} />;
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
      <div className="container-fluid">
        <div className="col-sm-6">
          {/* accordian */}
          <div className="panel-group" id="accordion1">
            {/* Summry Start Here */}
            <AccordianPanel
              title="Summary"
              func={this.renderSummry()}
              active="True"
              AccId="Summary"
              paraent="accordion1"
            />
            {/* Summry End Here */}

            {/* Customer Info Start Here */}
            <AccordianPanel
              title="Customer Info"
              func={this.renderCustomer()}
              active="False"
              AccId="Customer_Info"
              paraent="accordion1"
            />
            {/* Customer Info End Here */}
          </div>
          {/* end Accordian */}
        </div>

        {/* divided block */}

        <div className="col-sm-6">
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
              title="SupportQuery"
              func={this.renderSupportQuery()}
              active="True"
              AccId="SupportQuery"
              parent="accordion"
            />
            {/* SupportQuery End Here */}

            {/* Call Log Start Here */}
            <AccordianPanel
              title="callLog"
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
            />
            {/* Emails Info End Here */}

            {/* Phone Info Start Here */}
            <AccordianPanel
              title="Phone"
              func={this.renderPhone()}
              active="True"
              AccId="Phone"
              parent="accordion"
            />
            {/* Phone Info End Here */}

            {/* Query Info Start Here */}
            <AccordianPanel
              title="Query"
              func={this.renderQuery()}
              active="False"
              AccId="Call_Log"
              parent="accordion"
            />
            {/* Query Info End Here */}
          </div>

          {/* end Accordian */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ customerForm }) {
  return { customerForm };
}

export default connect(
  mapStateToProps,
  { fetchCustomerInfo }
)(CustomerDetails);
