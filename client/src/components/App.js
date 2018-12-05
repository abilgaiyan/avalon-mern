import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Welcome from "./Welcome";
import './css/common.css';
import { CustomerList, CustomerDetailsWraper } from "./WithHeader"

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log('appauth', this.props.auth)
    if (this.props.auth) {
      if (this.props.auth.permission !== 0) {
        return (
          <BrowserRouter>
            <div className="container-fluid">
              <Route exact={true} path="/" component={Welcome} />
              <Route exact={true} path="/customers" component={CustomerList} />
              <Route exact={true} path="/customers/:customerId" component={CustomerDetailsWraper} />
            </div>
          </BrowserRouter>
        );
      } else {
        return (<div>You are not authorised to access this Application.Please request to admion for access rights</div>)
      }
    } else {

      return (
        <BrowserRouter>
          <div className="container-fluid">
            <Route exact={true} path="/" component={Welcome} />
          </div>
        </BrowserRouter>)
      // <div>You are not authorised to access this Application.Please request to admion for access rights</div>
    }
  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log("------------->>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<-----------------------", state)
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
