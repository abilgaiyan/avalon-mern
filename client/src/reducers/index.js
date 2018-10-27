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
import billingInfoReducer from "./billinginfoReducer";
import targetAreasReducers from "./targetAreasReducers";
import websiteInfoReducer from "./websiteInfoReducer";

import autoCompleteId from "./autocompleteReducer";

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
  billingInfo: billingInfoReducer,
  autoCompleteId: autoCompleteId
});
