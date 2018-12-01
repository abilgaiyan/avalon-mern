import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Welcome from "./Welcome";
import './css/common.css';
import { CustomerList, CustomerDetailsWraper } from "./WithHeader"

import PermissionAccess from "./PermissionAccess";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { permission: 0 }
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    // console.clear();
    // console.log("header.js, checking permission: ", nextProps.auth.permission);

    this.setState({ permission: nextProps.auth.permission });
  }

  render() {
    // console.log(this.props.auth.permission);
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route exact={true} path="/" component={Welcome} />
          {/* <Route exact={true} path="/customers" component={CustomerList} />
          <Route exact={true} path="/customers/:customerId" component={CustomerDetailsWraper} /> */}
          <Route exact={true} path="/customers" component={this.state.permission === 0 ? PermissionAccess : CustomerList} />
          <Route exact={true} path="/customers/:customerId" component={this.state.permission === 0 ? PermissionAccess : CustomerDetailsWraper} />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log("------------->>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<-----------------------", state.auth)
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
