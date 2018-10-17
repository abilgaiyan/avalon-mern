import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Welcome from "./Welcome";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./customers/Dashboard";
// import SurveyNew from './surveys/SurveyNew';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import ContactusNew from './contactus/ContactusNew';
// import CustomerStories from './CustomerStories';
// import CustomerStories1 from './CustomerStories1';
// import Agencies from './Agencies';
// import You from './You';
import Footer from "./Footer";
import CustomerDetails from "./customers/CustomerDetails";
// import Workforus from './Workforus';
// import CustomerVideo from './CustomerVideo';
// import StoryNew from './stories/StoryNew';

import Email from "./customers/forms/email/EmailHeader";
import CustomerInfo from "./customers/forms/customerinfo/CustomerNew";
import MainContent from "./MainContent";
import LeftSideBar from './LeftSideBar'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // const header = () => {
    //   if (window.location.pathname === '/') return null;
    //   return <Header />;
    // }
    console.log(window.location.pathname)
    return (
      <BrowserRouter>
        <div id="wrapper" className="dashboard_wraper container-fluid">
          <Route exact={true} path="/" component={Welcome} />
          {/* Main Wraper Start Here */}
          {window.location.pathname === '/' ? null : 
          <div>
          <div className="row">
            <LeftSideBar />
            <div className="main_containt col-sm-10">
              <div className="container-fluid">
                {window.location.pathname === '/' ? null : <Header />}
                <Route exact={true} path="/customers" component={Dashboard} />
                <Route exact={true} path="/customers/:customerId" component={CustomerDetails} />
                {/* <Route exact={true} path="/customers/:customerId" component={MainContent} /> */}
                <Route exact={true} path="/emailForm" component={Email} />
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
              </div>
            </div>
           
          </div>
          <div className="row footer-well">
           <Footer />
          </div>
          </div>
          }
         
          {/* Main Wraper End Here */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
