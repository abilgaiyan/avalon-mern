import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Welcome from "./Welcome";
import WithHeader from "./WithHeader";

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
          <Route exact={true} path="/customers" component={WithHeader} />
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
