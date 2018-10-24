import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducers";
import surveyReducer from "./surveyReducers";
import contactusReducer from "./contactusReducers";
import storiesReducer from "./storyReducer";
import customersReducers from "./customersReducers";
import customerReducers from "./customerReducers";

import emailReducers from "./emailReducer";
import phoneReducer from "./phoneReducer";

import queryReducer from "./queryReducer";
import customerinfoReducers from "./customerinfoReducers";
import targetAreasReducers from "./targetAreasReducers";
import websiteInfoReducer from "./websiteInfoReducer";
import customerSummary from "./customerSummary";

import avalonInfo from "./avaloninfoReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveyReducer,
  stories: storiesReducer,
  storyForm: storiesReducer,
  contactusForm: reduxForm,
  contactus: contactusReducer,
  customers: customersReducers,
  customer: customerReducers,
  email: emailReducers,
  emailForm: emailReducers,
  phonecall: phoneReducer,
  query: queryReducer,
  customerForm: customerinfoReducers,
  targetAreas: targetAreasReducers,
  websiteInfo: websiteInfoReducer,
  customersummary: customerSummary,
  avalonInfo: avalonInfo
});
