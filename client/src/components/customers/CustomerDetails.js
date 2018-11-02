import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AccordianPanel from "./AccordianPanel"
import Email from "./Email";
import PhoneCall from "./PhoneCall";
import CustomerQuery from "./CustomerQuery";
import CallLogList from "../customers/forms/calllog/CallLogList";
import CustomerSummary from "../customers/forms/summary/CustomerSummary";
import CustomerForm from "../customers/forms/customerinfo/CustomerForm";
import AvaloninfoForm from "../customers/forms/avaloninfo/AvaloninfoForm";
import BillingForm from "../customers/forms/billinginfo/BillingForm";
import AshiMicroWebsiteForm from "../customers/forms/AshiMicroWebsiteInfo/AshiMicroWebsiteForm";
import DomainInfoForm from "../customers/forms/DomainInfo/DomainInfoForm";
import SSLInfoForm from "../customers/forms/sslInfo/SSLInfoForm";
import BusinessEmailInfoForm from "../customers/forms/businessEmailInfo/BusinessEmailInfoForm";
import EmailMarketingAccountInfoForm from "../customers/forms/emailmarketingaccountinfo/EmailMarketingAccountInfoForm";
import TargetAreasForm from "../customers/forms/targetareas/TargetAreasForm";
import SupportQueryForm from "../customers/forms/supportquery/SupportQuery";

import "../css/common.css";


class CustomerDetails extends Component {

  componentWillMount() {
    const customerId = this.props.autoCompleteId || this.props.match.params.customerId;
    this.props.fetchCustomerInfo(customerId);
    this.props.fetchWebsiteStatusDropdown();
    this.props.fetchAvalonInfo(customerId);
    this.props.fetchBillingInfoProductPlanDropdown();
    this.props.fetchBillingInfoHostingAmountDropdown();
    this.props.fetchBillingInfo(customerId); //Arg. avalonbillinginfoId
    this.props.fetchAshiMicroWebsiteInfo(customerId);
    this.props.fetchdomainInfo(customerId);
    this.props.fetchSSLInfo(customerId);
    this.props.fetchbusinessEmailInfo(customerId);
    this.props.fetchemailmarketingaccountinfo(customerId);
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

  renderBillingForm() {
    return <BillingForm />
  }

  renderAshiMicroWebsiteForm() {
    return <AshiMicroWebsiteForm />
  }

  renderDomainInfoForm() {
    return <DomainInfoForm />
  }

  renderSSLInfoForm() {
    return <SSLInfoForm />
  }

  renderBusinessEmailInfoForm() {
    return <BusinessEmailInfoForm />
  }

  renderEmailMarketingAccountInfoForm() {
    return <EmailMarketingAccountInfoForm />
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
    return <CallLogList />;
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

            {/* Billing form */}
            <AccordianPanel
              title="Billing Form"
              func={this.renderBillingForm()}
              active="True"
              AccId="Billing_Form"
              paraent="accordion1"
              custmClass=""
            />

            {/* AshiMicroWebsite Form */}
            <AccordianPanel
              title="Ashi Micro Website Form"
              func={this.renderAshiMicroWebsiteForm()}
              active="True"
              AccId="AshiMicroWebsiteForm"
              paraent="accordion1"
              custmClass=""
            />

            {/* Domain Info Form */}
            <AccordianPanel
              title="Domain Info Form"
              func={this.renderDomainInfoForm()}
              active="True"
              AccId="DomainInfoForm"
              paraent="accordion1"
              custmClass=""
            />
            {/* SSL Info Form */}
            <AccordianPanel
              title="SSL Info Form"
              func={this.renderSSLInfoForm()}
              active="True"
              AccId="SSLInfoForm"
              paraent="accordion1"
              custmClass=""
            />

            {/* Business Email Info Form */}
            <AccordianPanel
              title="Business Email Info Form"
              func={this.renderBusinessEmailInfoForm()}
              active="True"
              AccId="BusinessEmailInfoForm"
              paraent="accordion1"
              custmClass=""
            />

            {/* Business Email Info Form */}
            <AccordianPanel
              title="Email Marketing Account Info Form"
              func={this.renderEmailMarketingAccountInfoForm()}
              active="True"
              AccId="EmailMarketingAccountInfoForm"
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

function mapStateToProps(state) {
  // console.clear();
  // console.log(state);
  return {
    customerForm: state.customerForm,
    autoCompleteId: state.autoCompleteId
  };
}

export default connect(
  mapStateToProps, actions
)(CustomerDetails);
