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
import LeftSideBar from "./LeftSideBar";
import './css/common.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    //console.log(this.props.auth !== false);

    return (
      <BrowserRouter>
        <div>
          {/* {this.props.auth !== false ? <Redirect push to="/customers" /> : <Redirect push to="/" />} */}
          <Route exact={true} path="/" component={Welcome} />

          {/* Main Wraper Start Here */}
          {window.location.pathname === "/" ? null : (
            <div id="wrapper" className="dashboard_wraper container-fluid">
              <div className="row">
                <LeftSideBar />
                <div className="main_containt col-sm-12 col-md-10">

                  {window.location.pathname === "/" || this.props.auth === false ? null : <Header />}
                  <Route exact={true} path="/customers" component={Dashboard} />
                  <Route exact={true} path="/customers/:customerId" component={CustomerDetails} />
                  <Route exact={true} path="/emailForm" component={Email} />
                  {/* <Redirect push to="/customers" /> */}

                </div>
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

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
