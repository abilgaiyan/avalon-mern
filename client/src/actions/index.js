import axios from "axios";
import {
  FETCH_AUTOCOMPLETE_ID,
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_CONTACTUS,
  FETCH_STORIES,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMER,
  FETCH_EMAILS,
  FETCH_PHONECALL,
  FETCH_QUERY,
  FETCH_CUSTOMERINFO,
  FETCH_AVALONINFO,
  FETCH_BILLINGINFO,
  FETCH_BILLINGFORM_PRODUCTPLAN
} from "./types";

//Store Autocomplete_ID
export const fetchAutocomplete_ID = (autocompleteId, history) => {
  //window.location.assign("/customers/" + autocompleteId);
  // "/customers/" + value._id)
  //history.push("/customers/" + autocompleteId);
  history.push(`/customers/${autocompleteId}`);
  return { type: FETCH_AUTOCOMPLETE_ID, payload: autocompleteId };
};

export const fetchUser = () => async dispatch => {
  //const res = await axios.get("/api/current_user");
  const res = {};
  res.data = { "_id": "5bd1ab9f6915e233b8ac8ecb", "googleId": "107143103854375293515", "name": "Ajay Bilgaiyan", "__v": 0, "credits": 0 };

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const submitContactus = (values, history) => async dispatch => {
  const res = await axios.post("/api/contactus", values);
  // console.log(res);
  history.push("/contactus");
  dispatch({ type: FETCH_CONTACTUS, payload: res.data });
};

export const fetchContactus = () => async dispatch => {
  const res = await axios.get("/api/contactus");

  dispatch({ type: FETCH_CONTACTUS, payload: res.data });
};

export const submitStory = (values, history) => async dispatch => {
  const res = await axios.post("/api/customerstories", values);

  history.push("/stories");
  dispatch({ type: FETCH_STORIES, payload: res.data });
};

export const fetchStories = () => async dispatch => {
  const res = await axios.get("/api/customerstories");

  //const res = storylist;
  dispatch({ type: FETCH_STORIES, payload: res.data });
};

// Fetch Customer All Data from CustomerInfo
export const fetchCustomers = () => async dispatch => {
  const res = await axios.get("/api/customerallinfo");
  // const res = await axios.get("/api/customeralldata");

  //const res = storylist;
  dispatch({ type: FETCH_CUSTOMERS, payload: res.data });
};

// Fetch all information by Customer id
export const fetchCustomer = customerId => async dispatch => {
  //console.log(customerId)
  const res = await axios.get("/api/customeralldatabyid/" + customerId);

  //const res = storylist;
  dispatch({ type: FETCH_CUSTOMER, payload: res.data[0] });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Fetch last email communication data by Customer id
export const fetchEmail = customerId => async dispatch => {
  //console.log(customerId)
  const res = await axios.get("/api/customeremail/" + customerId);

  //const res = storylist;
  dispatch({ type: FETCH_EMAILS, payload: res.data[0] || {} });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Set email communication data by Customer id
export const submitEmail = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/customeremail", values);

  //history.push('/customers/' + values.customerId);

  dispatch({ type: FETCH_EMAILS, payload: values });
};

// Fetch last phone call communication data by Customer id
export const fetchPhonecall = customerId => async dispatch => {
  //console.log(customerId)
  const res = await axios.get("/api/customerphones/" + customerId);

  //const res = storylist;

  dispatch({ type: FETCH_PHONECALL, payload: res.data[0] || {} });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Set phone call communication data by Customer id
export const submitPhonecall = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/customerphones", values);
  // console.log(history);
  // history.push("/customers");

  //const res = storylist;
  dispatch({ type: FETCH_PHONECALL, payload: values });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Fetch last phone call communication data by Customer id
export const fetchQuery = customerId => async dispatch => {
  //console.log(customerId)
  const res = await axios.get("/api/customerqueries/" + customerId);

  //const res = storylist;
  dispatch({ type: FETCH_QUERY, payload: res.data[0] || {} });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Set phone call communication data by Customer id
export const submitQuery = (values, history) => async dispatch => {
  const res = await axios.post("/api/customerqueries", values);

  //const res = storylist;
  dispatch({ type: FETCH_QUERY, payload: res.data[0] });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Fetch last phone call communication data by Customer id
export const fetchCustomerInfo = customerId => async dispatch => {
  //console.log("Hit from search", customerId)
  const res = await axios.get("/api/customerinfo/" + customerId);

  //const res = storylist;
  dispatch({ type: FETCH_CUSTOMERINFO, payload: res.data[0] || {} });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Set Customer Info data wrt. Customer id
export const submitCustomerInfo = (values, customerId, history) => async dispatch => {
  // console.clear();
  // console.log(values);
  values.customerId = customerId;
  const res = await axios.post("/api/customerinfo", values);
  // console.log(history);
  // history.push("/customers");

  //const res = storylist;
  dispatch({ type: FETCH_CUSTOMERINFO, payload: values });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};


// Set Avalon Info data wrt. Customer id
export const submitAvalonInfo = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/avaloninfo_Post", values);
  // console.log(history);
  // history.push("/customers");

  //const res = storylist;
  dispatch({ type: FETCH_AVALONINFO, payload: values });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Fetch Billing Info Drop-down for productPlan AvalonBillingId
export const fetchBillingInfoProductPlanDropdown = () => async dispatch => {
  const res = await axios.get("/api/ProductPlanAllData");
  dispatch({ type: FETCH_BILLINGFORM_PRODUCTPLAN, payload: res.data });
};


// Fetch Billing Info Details by AvalonBillingId
export const fetchBillingInfo = customerId => async dispatch => {
  //console.log("Hit from search", customerId)
  const res = await axios.get("/api/avalonbillinginfo/" + customerId);

  dispatch({ type: FETCH_BILLINGINFO, payload: res.data[0] || {} });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};

// Set Billing Info data wrt. Customer id
export const submitBillingInfo = (values, customerId, history) => async dispatch => {
  //alert("147");
  // console.clear();
  // console.log(values);
  values.customerId = customerId;
  const res = await axios.post("/api/avalonbillinginfo", values);
  // console.log(history);
  // history.push("/customers");

  //const res = storylist;
  dispatch({ type: FETCH_BILLINGINFO, payload: values });
};