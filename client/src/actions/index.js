import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_CONTACTUS, FETCH_STORIES,FETCH_CUSTOMERS,FETCH_CUSTOMER } from './types';

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
  const res = await axios.get('/api/customeralldatabyid/'+ customerId);

  //const res = storylist;
  dispatch({ type: FETCH_CUSTOMER, payload: res.data });
};