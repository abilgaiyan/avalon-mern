import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducers";
import surveyReducer from "./surveyReducers";
import contactusReducer from "./contactusReducers";
import storiesReducer from "./storyReducer";
import customersReducers from "./customersReducers";
//import customerReducers from "./customerReducers";

import emailReducers from "./emailReducer";
import phoneReducer from "./phoneReducer";
import queryReducer from "./queryReducer";

import customerSummary from "./customerSummary";
import customerinfoReducers from "./customerinfoReducers";
import websiteStatusReducer from "./websiteStatusReducer";
import avaloninfoReducer from "./avaloninfoReducer";
import billingInfoProductPlanDropdownReducer from "./BillingInfoProductPlanDropdownReducer";
import billingInfoHostingAmountDropdownReducer from "./BillingFormHostingAmountDropdownReducer";
import billingInfoReducer from "./billinginfoReducer";
import targetAreasReducers from "./targetAreasReducers";
import autoCompleteId from "./autocompleteReducer";

import ashimicrowebsiteinfoReducer from "./ashimicrowebsiteinfoReducer";
import domainInfoReducer from "./domainInfoReducer";
import sslInfoReducer from "./sslInfoReducer";
import businessEmailInfoReducer from "./businessEmailInfoReducer";
import emailmarketingaccountinfoReducer from "./emailmarketingaccountinfoReducer";
import designtypeReducer from "./designtypeReducer";
import websiteInfoReducer from "./websiteInfoReducer";
import productinfoReducer from "./productinfoReducer";
import ashiproductstatusReducer from "./ashiproductstatusReducer";

import callloginfoListReducer from "./callloginfoListReducer";
import previouscalltypeDropdownReducer from "./previouscalltypeDropdownReducer";
import callloginfoFormReducer from "./callloginfoFormReducer";
import buyingGroupReducer from "./buyingGroupReducer";
import customerEmailReducer from "./customerEmailReducer";
import emailSelectedReducer from "./emailSelectedReducer";
import callLogSelectedReducer from "./callLogSelectedReducer";

import supportqueryReducer from "./supportQueryReducer";
import communicationLogReducer from "./communicationLogReducer"



export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveyReducer,
  stories: storiesReducer,
  storyForm: storiesReducer,
  contactusForm: reduxForm,
  contactus: contactusReducer,
  customers: customersReducers,
  //customer: customerReducers,
  email: emailReducers,
  emailForm: emailReducers,
  phonecall: phoneReducer,
  query: queryReducer,
  targetAreas: targetAreasReducers,
  customersummary: customerSummary,
  customerForm: customerinfoReducers,
  websiteStatusDropdown: websiteStatusReducer,
  avaloninfo: avaloninfoReducer,

  billingInfoProductPlanDropdownReducer: billingInfoProductPlanDropdownReducer,
  billingInfoHostingAmountDropdownReducer: billingInfoHostingAmountDropdownReducer,
  billingInfo: billingInfoReducer,
  autoCompleteId: autoCompleteId,

  ashiMicroWebsiteInfo: ashimicrowebsiteinfoReducer,
  domainInfo: domainInfoReducer,
  sslInfo: sslInfoReducer,
  businessEmailInfo: businessEmailInfoReducer,
  emailmarketingaccountinfo: emailmarketingaccountinfoReducer,
  designTypeDropdown: designtypeReducer,
  websiteinfo: websiteInfoReducer,
  productinfo: productinfoReducer,
  ashiproductstatusDropdown: ashiproductstatusReducer,

  callloginfoListReducer: callloginfoListReducer,
  previousCallTypeDropdown: previouscalltypeDropdownReducer,
  callloginfo: callloginfoFormReducer,
  buyingGroup: buyingGroupReducer,
  customerEmail: customerEmailReducer,
  emailSelected: emailSelectedReducer,
  callLogSelected: callLogSelectedReducer,

  supportQuery: supportqueryReducer,
  communicationLog: communicationLogReducer
});
