import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Welcome from "./Welcome";
import Header from "./Header";
import Dashboard from "./customers/Dashboard";
import Footer from "./Footer";
import CustomerDetails from "./customers/CustomerDetails";

import LeftSideBar from "./LeftSideBar";
import './css/common.css';

function MainWraper(props) {
  return (
    <div id="wrapper" className="dashboard_wraper container-fluid">
      <div className="row">
        {!props.leftChoice ? null : <LeftSideBar />}
        <div className={!props.leftChoice ? "main_containt col-sm-12 col-md-12 full" : "main_containt col-sm-12 col-md-10"}>
          <Header />
          <Route exact={true} path={props.path} component={props.content} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

function CustomerList() {
  return (
    <MainWraper content={Dashboard} path="/customers/" leftChoice={false} />
  )
}
function CustomerDetailsWraper() {
  return (
    <MainWraper content={CustomerDetails} path="/customers/:customerId" leftChoice={true} />
  )
}



class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    //console.log(this.props.auth !== false);

    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Welcome} />
          <Route exact={true} path="/customers" component={CustomerList} />
          <Route exact={true} path="/customers/:customerId" component={CustomerDetailsWraper} />
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
