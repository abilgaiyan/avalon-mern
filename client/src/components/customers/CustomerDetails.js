import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AccordianPanel from "./AccordianPanel"
//import Email from "./Email";
import EmailLogList from "../customers/forms/emaillog/EmailLogList";
// import PhoneCall from "./PhoneCall";
//import CustomerQuery from "./CustomerQuery";
import CallLogList from "../customers/forms/CallLogInfo/CallLogList";
import CustomerSummary from "../customers/forms/summary/CustomerSummary";
import CustomerForm from "../customers/forms/customerinfo/CustomerForm";
import AvaloninfoForm from "../customers/forms/avaloninfo/AvaloninfoForm";
import BillingForm from "../customers/forms/billinginfo/BillingForm";
import AshiMicroWebsiteForm from "../customers/forms/AshiMicroWebsiteInfo/AshiMicroWebsiteForm";
import DomainInfoForm from "../customers/forms/DomainInfo/DomainInfoForm";
import SSLInfoForm from "../customers/forms/sslInfo/SSLInfoForm";
import BusinessEmailInfoForm from "../customers/forms/businessEmailInfo/BusinessEmailInfoForm";
import EmailMarketingAccountInfoForm from "../customers/forms/emailmarketingaccountinfo/EmailMarketingAccountInfoForm";
import WebsiteInfoForm from "../customers/forms/websiteinfo/WebsiteInfoForm";
import ProductInfoForm from "../customers/forms/productinfo/ProductInfoForm";


import TargetAreasForm from "../customers/forms/targetareas/TargetAreasForm";
import SupportQueryForm from "../customers/forms/supportquery/SupportQuery";
//import AddCustomerInfoForm from "../customers/forms/AddCustomerInfo/AddCustomerInfoForm"
import CommunicationLog from "../customers/forms/communicationLog/CommunicationLog";

import "../css/common.css";


class CustomerDetails extends Component {

  componentWillMount() {
    const customerId = this.props.autoCompleteId || this.props.match.params.customerId;
    this.props.fetchCustomerInfo(customerId);
    this.props.fetchBuyingGrpList()
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
    this.props.fetchDesignTypeDropdown();
    this.props.fetchwebsiteinfo(customerId);
    this.props.fetchashiproductstatusDropdown();
    this.props.fetchproductinfo(customerId);
    this.props.fetchcallloginfoList(customerId);
    this.props.fetchpreviouscalltypeDropdown();
    this.props.fetchcallloginfo(customerId);
    this.props.fetchemaildata(customerId);
    this.props.fetchcommunicationlog(customerId);
    this.props.fetchStateList();
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
    if (!this.props.customerForm) return (<div>Loading...</div>);
    //return <CustomerSummary customerSummary={this.props.customerForm} />;
    return <CustomerSummary />;
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

  renderwebsiteinfoForm() {
    return <WebsiteInfoForm />
  }

  renderproductinfoForm() {
    return <ProductInfoForm />
  }

  renderTargetAreas() {
    if (!this.props.customerForm) return (<div>Loading...</div>);
    return <TargetAreasForm targetAreasData={this.props.customerForm} />;
  }

  renderEmail() {
    return <EmailLogList customerId={this.props.match.params.customerId} />;
  }

  // renderPhone() {
  //   return <PhoneCall customerId={this.props.match.params.customerId} />;
  // }

  renderSupportQueryForm() {
    return (
      //<SupportQueryForm supportQueryData={this.props.match.params.customerId} />
      <SupportQueryForm />
    );
  }

  renderCallLog() {
    return <CallLogList />;
  }

  renderCommunicationlog() {
    return <CommunicationLog />
  }

  // renderQuery() {
  //   return <CustomerQuery customerId={this.props.match.params.customerId} />;
  // }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {/* accordian */}
            <div className="panel-group" id="accordion1">
              {/* Summry Start Here */}
              <AccordianPanel
                title="Summary"
                func={this.renderSummry()}
                active={true}
                AccId="Summary"
                parent="accordion1"
                custmClass="orange"
              />
              {/* Summry End Here */}

              {/* Customer Info Start Here */}
              <AccordianPanel
                title="Customer Info"
                func={this.renderCustomerInfo()}
                active={false}
                AccId="CustomerInfo"
                parent="accordion1"
                custmClass=""
              />
              {/* Customer Info End Here */}

              {/* Avalon info form */}
              <AccordianPanel
                title="Avalon Info"
                func={this.renderAvalonInfo()}
                active={false}
                AccId="AvalonInfo"
                parent="accordion1"
                custmClass=""
              />

              {/* Billing form */}
              <AccordianPanel
                title="Billing Info"
                func={this.renderBillingForm()}
                active={false}
                AccId="BillingForm"
                parent="accordion1"
                custmClass=""
              />

              {/* AshiMicroWebsite Form */}
              <AccordianPanel
                title="Ashi Micro Website Info"
                func={this.renderAshiMicroWebsiteForm()}
                active={false}
                AccId="AshiMicroWebsiteForm"
                parent="accordion1"
                custmClass=""
              />

              {/* Domain Info Form */}
              <AccordianPanel
                title="Domain Info"
                func={this.renderDomainInfoForm()}
                active={false}
                AccId="DomainInfoForm"
                parent="accordion1"
                custmClass=""
              />
              {/* SSL Info Form */}
              <AccordianPanel
                title="SSL Info"
                func={this.renderSSLInfoForm()}
                active={false}
                AccId="SSLInfoForm"
                parent="accordion1"
                custmClass=""
              />

              {/* Business Email Info Form */}
              <AccordianPanel
                title="Business Email Info"
                func={this.renderBusinessEmailInfoForm()}
                active={false}
                AccId="BusinessEmailInfoForm"
                parent="accordion1"
                custmClass=""
              />

              {/* Email Marketing Account Info Form */}
              <AccordianPanel
                title="Email Marketing Account Info"
                func={this.renderEmailMarketingAccountInfoForm()}
                active={false}
                AccId="EmailMarketingAccountInfoForm"
                parent="accordion1"
                custmClass=""
              />

              {/* Website Info Form */}
              <AccordianPanel
                title="Website Info"
                func={this.renderwebsiteinfoForm()}
                active={false}
                AccId="WebsiteInfoForm"
                parent="accordion1"
                custmClass=""
              />

              {/* Product Info Form */}
              <AccordianPanel
                title="Product Info"
                func={this.renderproductinfoForm()}
                active={false}
                AccId="ProductInfoForm"
                parent="accordion1"
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
                title="Target Areas"
                func={this.renderTargetAreas()}
                active={false}
                AccId="TargetAreas"
                parent="accordion"
                custmClass=""
              />
              {/* TargetAreas End Here */}

              {/* SupportQuery Start Here */}
              <AccordianPanel
                title="Query / Support Trend"
                func={this.renderSupportQueryForm()}
                active={false}
                AccId="SupportQuery"
                parent="accordion"
                custmClass=""
              />
              {/* SupportQuery End Here */}

              {/* Call Log Start Here */}
              {/* <AccordianPanel
                title="Call Log"
                func={this.renderCallLog()}
                active={false}
                AccId="callLog"
                parent="accordion"
                custmClass=""
              /> */}
              {/* Call Log End Here */}

              {/* Emails Info Start Here */}
              {/* <AccordianPanel
                title="Email Log"
                func={this.renderEmail()}
                active={false}
                AccId="Emails"
                parent="accordion"
                custmClass=""
              /> */}

              {/* Communication Log Start Here */}
              <AccordianPanel
                title="Communication Log"
                func={this.renderCommunicationlog()}
                active={false}
                AccId="CommunicationLog"
                parent="accordion"
                custmClass=""
              />

              {/* Emails Info End Here */}

              {/* Phone Info Start Here */}
              {/* <AccordianPanel
              title="Phone"
              func={this.renderPhone()}
              active={true}
              AccId="Phone"
              parent="accordion"
              custmClass=""
            /> */}
              {/* Phone Info End Here */}

              {/* Query Info Start Here */}
              {/* <AccordianPanel
              title="Query"
              func={this.renderQuery()}
              active={false}
              AccId="Query"
              parent="accordion"
              custmClass=""
            /> */}
              {/* Query Info End Here */}
            </div>

            {/* end Accordian */}
          </div>
          {/* <AddCustomerInfoForm /> */}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log(state);
  return {
    auth: state.auth,
    customerForm: state.customerForm,
    autoCompleteId: state.autoCompleteId
  };
}

export default connect(
  mapStateToProps, actions
)(CustomerDetails);