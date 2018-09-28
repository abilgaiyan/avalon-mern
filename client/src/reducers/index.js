import { combineReducers }  from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authReducer from './authReducers';
import surveyReducer from './surveyReducers';
import contactusReducer from './contactusReducers';
import storiesReducer from './storyReducer';
import customersReducers from './customersReducers';
import customerReducers from './customersReducers';

export default combineReducers({
  auth : authReducer,
  form: reduxForm,
  surveys: surveyReducer,
  stories: storiesReducer,
  storyForm: storiesReducer,
  contactusForm: reduxForm,
  contactus: contactusReducer,
  customers:customersReducers,
  customer:customerReducers
});