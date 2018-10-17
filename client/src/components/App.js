import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Welcome from "./Welcome";
import Header from "./Header";
import Dashboard from "./customers/Dashboard";
import Footer from "./Footer";
import CustomerDetails from "./customers/CustomerDetails";

import Email from "./customers/forms/emaillog/EmailHeader";
import MainContent from "./MainContent";
import LeftSideBar from "./LeftSideBar";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(window.location.pathname);
    return (
      <BrowserRouter>
        <div id="wrapper" className="dashboard_wraper container-fluid">
          <Route exact={true} path="/" component={Welcome} />
          {/* Main Wraper Start Here */}
          {window.location.pathname === "/" ? null : (
            <div>
              <div className="row">
                <LeftSideBar />
                <div className="main_containt col-sm-10">
                  <div className="container-fluid">
                    {window.location.pathname === "/" ? null : <Header />}
                    <Route
                      exact={true}
                      path="/customers"
                      component={Dashboard}
                    />
                    <Route
                      exact={true}
                      path="/customers/:customerId"
                      component={CustomerDetails}
                    />
                    {/* <Route exact={true} path="/customers/:customerId" component={MainContent} /> */}
                    <Route exact={true} path="/emailForm" component={Email} />
                  </div>
                </div>
              </div>
              <div className="row footer-well">
                <Footer />
              </div>
            </div>
          )}

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
