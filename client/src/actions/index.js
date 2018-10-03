import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_CONTACTUS, FETCH_STORIES, FETCH_CUSTOMERS, FETCH_CUSTOMER, FETCH_EMAILS, FETCH_PHONECALL, FETCH_QUERY } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const submitContactus = (values, history) => async dispatch => {
  const res = await axios.post('/api/contactus', values);
  // console.log(res);
  history.push('/contactus');
  dispatch({ type: FETCH_CONTACTUS, payload: res.data });
};

export const fetchContactus = () => async dispatch => {
  const res = await axios.get('/api/contactus');

  dispatch({ type: FETCH_CONTACTUS, payload: res.data });
};

export const submitStory = (values, history) => async dispatch => {
  const res = await axios.post('/api/customerstories', values);

  history.push('/stories');
  dispatch({ type: FETCH_STORIES, payload: res.data });
};

export const fetchStories = () => async dispatch => {
  const res = await axios.get('/api/customerstories');

  //const res = storylist;
  dispatch({ type: FETCH_STORIES, payload: res.data });
};

// Fetch All Customers all data
export const fetchCustomers = () => async dispatch => {
  const res = await axios.get('/api/customeralldata');

  //const res = storylist;
  dispatch({ type: FETCH_CUSTOMERS, payload: res.data });
};


// Fetch all information by Customer id 
export const fetchCustomer = (customerId) => async dispatch => {
  //console.log(customerId)
  const res = await axios.get('/api/customeralldatabyid/' + customerId);

  //const res = storylist;
  dispatch({ type: FETCH_CUSTOMER, payload: res.data[0] });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};


// Fetch last email communication data by Customer id 
export const fetchEmail = (customerId) => async dispatch => {

  console.log(customerId)
  const res = await axios.get('/api/customeremail/' + customerId);

  //const res = storylist;
  dispatch({ type: FETCH_EMAILS, payload: res.data[0] || {} });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};


// Set email communication data by Customer id 
export const submitEmail = (values, history) => async dispatch => {
  const res = await axios.post('/api/customeremail', values);

  history.push('/customers/' + values.customerId);
  
  dispatch({ type: FETCH_EMAILS, payload: res.data });
  
  
};



// Fetch last phone call communication data by Customer id 
export const fetchPhonecall = (customerId) => async dispatch => {
  //console.log(customerId)
  const res = await axios.get('/api/customerphones/' + customerId);

  //const res = storylist;

  dispatch({ type: FETCH_PHONECALL, payload: res.data[0] || {} });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};


// Set phone call communication data by Customer id 
export const submitPhonecall = (values, history) => async dispatch => {
  const res = await axios.post('/api/customerphones', values);

  //const res = storylist;
  dispatch({ type: FETCH_PHONECALL, payload: res.data[0] });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};



// Fetch last phone call communication data by Customer id 
export const fetchQuery = (customerId) => async dispatch => {
  //console.log(customerId)
  const res = await axios.get('/api/customerqueries/' + customerId);

  //const res = storylist;
  dispatch({ type: FETCH_QUERY, payload: res.data[0] || {}});
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};


// Set phone call communication data by Customer id 
export const submitQuery = (values, history) => async dispatch => {
  const res = await axios.post('/api/customerqueries', values);
  //const res = storylist;
  dispatch({ type: FETCH_QUERY, payload: res.data[0] });
  // dispatch({ type: FETCH_CUSTOMER, payload: customerId });
};