import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './customers/Dashboard';
// import SurveyNew from './surveys/SurveyNew';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import ContactusNew from './contactus/ContactusNew';
// import CustomerStories from './CustomerStories';
// import CustomerStories1 from './CustomerStories1';
// import Agencies from './Agencies';
// import You from './You';
 import Footer from './Footer';
import CustomerDetails from './customers/CustomerDetails';
// import Workforus from './Workforus';
// import CustomerVideo from './CustomerVideo';
// import StoryNew from './stories/StoryNew';







class  App extends Component {
  componentDidMount(){
    this.props.fetchUser();
}

  render(){
  return (
      <div>
        <BrowserRouter>
        <div>
            <Header />
           <Route exact={true} path="/" component={Landing} /> 
           <Route exact={true} path="/customers" component={Dashboard} />
           <Route exact={true} path="/customerdetails" component={CustomerDetails} />
           {/* <Route exact={true} path="/surveys" component={Dashboard} />
           <Route path="/surveys/new" component={SurveyNew} />
           <Route path="/aboutus" component={Aboutus} />
           <Route path="/contactus" component={Contactus} />
           <Route path="/contactus/new" component={ContactusNew} />
           <Route path="/customerstories" component={CustomerStories} />
           <Route path="/customerstories1" component={CustomerStories1} />
           <Route path="/agencies" component={Agencies} />
           <Route path="/you" component={You} />
           <Route path="/workforus" component={Workforus} />
           <Route path="/customervideo" component={CustomerVideo} />
           <Route path="/story/new" component={StoryNew} /> */}
           <Footer />
        </div>
        </BrowserRouter>  
      </div>
      );
  }
}

export default connect(null, actions)( App);