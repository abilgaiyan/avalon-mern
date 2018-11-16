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
  FETCH_WEBSITESTATUS,
  FETCH_AVALONINFO,
  FETCH_BILLINGINFO,
  FETCH_BILLINGFORM_PRODUCTPLAN,
  FETCH_BILLINGFORM_HOSTINGAMOUNT,
  FETCH_ASHIMICROWEBSITEINFO,
  FETCH_DOMAININFO,
  FETCH_SSLINFO,
  FETCH_BUSINESSEMAILINFO,
  FETCH_EMAILMARKETINGACCOUNTINFO,
  FETCH_WEBSITEINFO_DESIGNTYPE,
  FETCH_WEBSITEINFO,
  FETCH_PRODUCTINFO_ASHIPRODUCTSTATUS,
  FETCH_PRODUCTINFO,
  FETCH_PREVIOUSCALLTYPE,
  FETCH_CALLLOGINFO,
  FETCH_CALLLOGINFO_LIST
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
  //const res = {};
  //res.data = { "_id": "5bd1ab9f6915e233b8ac8ecb", "googleId": "107143103854375293515", "name": "Ajay Bilgaiyan", "__v": 0, "credits": 0 };

  const res = await axios.get("/api/current_user");
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

// Set Add Customer Info Form
export const submitAddCustomerInfoForm = (values, history) => async dispatch => {
  //values.customerId = customerId;
  const res = await axios.post("/api/addcustomerinfo/", values);
  // history.push("/customers/");
  dispatch({ type: FETCH_CUSTOMERINFO, payload: values });
};

// Fetch Avalon Info Drop-down for website Status
export const fetchWebsiteStatusDropdown = () => async dispatch => {
  const res = await axios.get("/api/WebsiteStatus");
  dispatch({ type: FETCH_WEBSITESTATUS, payload: res.data });
};

// Fetch Avalon Info Details wrt. Customer id
export const fetchAvalonInfo = customerId => async dispatch => {
  const res = await axios.get("/api/avaloninfo/" + customerId);
  dispatch({ type: FETCH_AVALONINFO, payload: res.data[0] || {} });
};

// Set Avalon Info data wrt. Customer id
export const submitAvalonInfo = (authId, values, customerId, history) => async dispatch => {
  values._user = authId;
  values.customerId = customerId;
  //console.log(values);
  const res = await axios.post("/api/avaloninfo", values);
  // history.push("/customers");
  dispatch({ type: FETCH_AVALONINFO, payload: values });
};

// Fetch Billing Info Drop-down for productPlan
export const fetchBillingInfoProductPlanDropdown = () => async dispatch => {
  const res = await axios.get("/api/ProductPlanAllData");
  dispatch({ type: FETCH_BILLINGFORM_PRODUCTPLAN, payload: res.data });
};

// Fetch Billing Info Drop-down for HostingAmount
export const fetchBillingInfoHostingAmountDropdown = () => async dispatch => {
  const res = await axios.get("/api/HostingAmountAllData");
  dispatch({ type: FETCH_BILLINGFORM_HOSTINGAMOUNT, payload: res.data });
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

// Fetch Ashi MicroWebsite Info
export const fetchAshiMicroWebsiteInfo = customerId => async dispatch => {
  const res = await axios.get("/api/ashimicrowebsiteinfo/" + customerId);
  dispatch({ type: FETCH_ASHIMICROWEBSITEINFO, payload: res.data[0] || {} });
};

// Set Ashi MicroWebsite Info
export const submitashiMicroWebsiteInfo = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/ashimicrowebsiteinfo", values);
  dispatch({ type: FETCH_ASHIMICROWEBSITEINFO, payload: values });
};


// Fetch Domain Info
export const fetchdomainInfo = customerId => async dispatch => {
  const res = await axios.get("/api/customerdomaininfo/" + customerId);
  dispatch({ type: FETCH_DOMAININFO, payload: res.data[0] || {} });
};

// Set Domain Info
export const submitdomainInfoForm = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/customerdomaininfo", values);
  dispatch({ type: FETCH_DOMAININFO, payload: values });
};

// Fetch SSL Info
export const fetchSSLInfo = customerId => async dispatch => {
  const res = await axios.get("/api/sslinfo/" + customerId);
  dispatch({ type: FETCH_SSLINFO, payload: res.data[0] || {} });
};

// Set SSL Info
export const submitsslInfoForm = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/sslinfo", values);
  dispatch({ type: FETCH_SSLINFO, payload: values });
};

// Fetch Business Email Info Form
export const fetchbusinessEmailInfo = customerId => async dispatch => {
  const res = await axios.get("/api/businessemailinfo/" + customerId);
  dispatch({ type: FETCH_BUSINESSEMAILINFO, payload: res.data[0] || {} });
};

// Set Business Email Info Form
export const submitbusinessEmailInfoForm = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/businessemailinfo", values);
  dispatch({ type: FETCH_BUSINESSEMAILINFO, payload: values });
};

// Fetch Email Marketing Account Info Form
export const fetchemailmarketingaccountinfo = customerId => async dispatch => {
  const res = await axios.get("/api/emailmarketingaccountinfo/" + customerId);
  dispatch({ type: FETCH_EMAILMARKETINGACCOUNTINFO, payload: res.data[0] || {} });
};

// Set Email Marketing Account Info Form
export const submitemailmarketingaccountinfoForm = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/emailmarketingaccountinfo", values);
  dispatch({ type: FETCH_EMAILMARKETINGACCOUNTINFO, payload: values });
};

// Fetch Website Info Drop-down for Design Type
export const fetchDesignTypeDropdown = () => async dispatch => {
  const res = await axios.get("/api/designtype");
  dispatch({ type: FETCH_WEBSITEINFO_DESIGNTYPE, payload: res.data });
};

// Fetch Email Marketing Account Info Form
export const fetchwebsiteinfo = customerId => async dispatch => {
  const res = await axios.get("/api/websiteinfo/" + customerId);
  dispatch({ type: FETCH_WEBSITEINFO, payload: res.data[0] || {} });
};

// Set Email Marketing Account Info Form
export const submitwebsiteinfoForm = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/websiteinfo", values);
  dispatch({ type: FETCH_WEBSITEINFO, payload: values });
};

// Fetch Poduct Info Drop-down for Ashi Product Status
export const fetchashiproductstatusDropdown = () => async dispatch => {
  const res = await axios.get("/api/ashiproductstatus");
  dispatch({ type: FETCH_PRODUCTINFO_ASHIPRODUCTSTATUS, payload: res.data });
};

// Fetch Product Info Form
export const fetchproductinfo = customerId => async dispatch => {
  const res = await axios.get("/api/productinfo/" + customerId);
  dispatch({ type: FETCH_PRODUCTINFO, payload: res.data[0] || {} });
};

// Set Product Info Form
export const submitproductinfoForm = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/productinfo", values);
  dispatch({ type: FETCH_PRODUCTINFO, payload: values });
};

// Fetch Call Log Data
export const fetchcallloginfoList = customerId => async dispatch => {
  const res = await axios.get("/api/customercallloginfo/" + customerId);
  dispatch({ type: FETCH_CALLLOGINFO_LIST, payload: res.data });
};

// Fetch Call Log Info Drop-down for PREVIOUSCALLTYPE Status
export const fetchpreviouscalltypeDropdown = () => async dispatch => {
  const res = await axios.get("/api/previouscalltype");
  dispatch({ type: FETCH_PREVIOUSCALLTYPE, payload: res.data });
};

// Fetch Call Log Info Form
export const fetchcallloginfo = customerId => async dispatch => {
  const res = await axios.get("/api/customercallloginfo/" + customerId);
  dispatch({ type: FETCH_CALLLOGINFO, payload: res.data[0] || {} });
};

// Set Call Log Info Form
export const submitCallLogInfoForm = (values, customerId, history) => async dispatch => {
  values.customerId = customerId;
  const res = await axios.post("/api/customercallloginfo/", values);
  // history.push("/customers/");
  dispatch({ type: FETCH_CALLLOGINFO, payload: values });
};
