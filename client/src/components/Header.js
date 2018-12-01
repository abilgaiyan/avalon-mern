import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Search from "./Search";
import AddCustomerInfoForm from "./customers/forms/AddCustomerInfo/AddCustomerInfoForm"


class Header extends Component {

  renderHeader() {
    switch (this.props.auth) {
      case null:
        // console.log("Auth Value: ", this.props.auth)
        return;
      case false:
        // console.log("Auth Value: ", this.props.auth)
        return (
          <li>
            <a href="/auth/google">
              <i className="fa fa-sign-in fa-2x" aria-hidden="true" />
              Log In
            </a>
          </li>
        );
      default:
        // console.log("Auth Value: ", this.props.auth)
        return (
          <li key="1">
            <a href="/api/logout">
              <i className="fa fa-sign-out fa-2x" aria-hidden="true" />
              Log Out
            </a>
          </li>
        );
    }
  }


  render() {
    if (this.props.auth === false) {
      return <Redirect to="/" />
    }
    else {
      return (
        <header className="navbar-fixed-top">
          <nav className="navbar navbar-default ">
            <div className="container-fluid">
              <div className="navbar-header col-xs-6 col-sm-4">
                <a className="navbar-brand" href="#">
                  Welcome {this.props.auth && this.props.auth.name ? this.props.auth.name : ''}
                </a>
              </div>
              <div className="col-xs-4 col-sm-4 search_wraper hidden-xs">
                <form className="navbar-form navbar-left">
                  <div className="input-group">
                    <Search />
                  </div>
                </form>
              </div>
              <div className="col-xs-6 col-sm-4 text-right noppading">
                <button type="button" className="btn btn-success navbar-btn hidden-xs" data-toggle="modal" data-target="#addcustomerinfoModal">ADD NEW CUSTOMER</button>
                <AddCustomerInfoForm />
                <ul className="nav navbar-nav navbar-right user_wraper">
                  <li className="dropdown">
                    <a
                      className="user_item dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="glyphicon glyphicon-user" />
                    </a>
                    <ul className="dropdown-menu text-center">
                      {this.renderHeader()}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log("AuthData", state.auth);
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
