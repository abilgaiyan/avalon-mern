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
import avalonInfo from "./avaloninfoReducer";
import billingInfoProductPlanDropdownReducer from "./BillingInfoProductPlanDropdownReducer";
import billingInfoHostingAmountDropdownReducer from "./BillingFormHostingAmountDropdownReducer";
import billingInfoReducer from "./billinginfoReducer";
import targetAreasReducers from "./targetAreasReducers";
import websiteInfoReducer from "./websiteInfoReducer";
import autoCompleteId from "./autocompleteReducer";

import ashimicrowebsiteinfoReducer from "./ashimicrowebsiteinfoReducer";
import domainInfoReducer from "./domainInfoReducer";
import sslInfoReducer from "./sslInfoReducer";
import businessEmailInfoReducer from "./businessEmailInfoReducer";
import emailmarketingaccountinfoReducer from "./emailmarketingaccountinfoReducer";


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
  websiteInfo: websiteInfoReducer,
  customersummary: customerSummary,
  customerForm: customerinfoReducers,
  avalonInfo: avalonInfo,

  billingInfoProductPlanDropdownReducer: billingInfoProductPlanDropdownReducer,
  billingInfoHostingAmountDropdownReducer: billingInfoHostingAmountDropdownReducer,
  billingInfo: billingInfoReducer,
  autoCompleteId: autoCompleteId,

  ashiMicroWebsiteInfo: ashimicrowebsiteinfoReducer,
  domainInfo: domainInfoReducer,
  sslInfo: sslInfoReducer,
  businessEmailInfo: businessEmailInfoReducer,
  emailmarketingaccountinfo: emailmarketingaccountinfoReducer
});
