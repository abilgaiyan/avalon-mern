import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Welcome from "./Welcome";
import './css/common.css';
import {CustomerList, CustomerDetailsWraper} from "./WithHeader"

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
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
