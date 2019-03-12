import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Search from "./Search";
import AddCustomerInfoForm from "./customers/forms/AddCustomerInfo/AddCustomerInfoForm"
import OrphenEmailLogList from "./OrphenEmails";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { searchClass: false }
  }

  // renderEmail() {
  //   // return <OrphenEmailLogList />;
  // }

  searchClickhandler = () => {
    this.setState({ searchClass: !this.state.searchClass })
  }

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
              LOG IN
            </a>
          </li>
        );
      default:
        // console.log("Auth Value: ", this.props.auth)
        return (
          <li key="1">
            <a href="/api/logout">
              <i className="fa fa-sign-out fa-2x" aria-hidden="true" />
              LOG OUT
            </a>
          </li>
        );
    }
  }
  render() {
    // console.clear()
    // console.log(this.props.auth);
    if (this.props.auth === false) {
      return <Redirect to="/" />
    }
    else {
      return (
        <header className="navbar-fixed-top">
          <nav className="navbar navbar-default ">
            <div className="container-fluid">
              <div className="navbar-header col-xs-7 col-sm-4">
                <a className="navbar-brand" href="#">
                  Welcome {this.props.auth && this.props.auth.name ? this.props.auth.name : ''}
                </a>
              </div>
              <div className={"col-xs-12 col-sm-4 search_wraper" + (this.state.searchClass ? ' click' : '')}>
                <form className="navbar-form navbar-left">
                  <div className="input-group">
                    <Search />
                  </div>
                </form>
              </div>
              <div className="col-xs-5 col-sm-4 text-right noppading">
                {this.props.authbtn ? <OrphenEmailLogList /> : ''}

                {this.props.authbtn ? '' :
                  <Link to="/customers" className="btn btn-success navbar-btn hidden-xs hidden-sm" style={{ "margin-right": " 10px" }}>
                    Home
                  </Link>}


                <button type="button" className="btn btn-success navbar-btn hidden-xs hidden-sm" data-toggle="modal" data-target="#addcustomerinfoModal"><i className="fa fa-plus" aria-hidden="true"></i>CUSTOMER</button>
                <AddCustomerInfoForm />
                <ul className="nav navbar-nav navbar-right user_wraper">
                  <li className="hidden-sm hidden-md hidden-lg">
                    <a className="user_item" onClick={this.searchClickhandler}>
                      <i className="glyphicon glyphicon-search"></i>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="user_item dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="glyphicon glyphicon-user" />
                    </a>
                    <ul className="dropdown-menu text-center">
                      <li><a className="hidden-md hidden-lg" data-toggle="modal" data-target="#addcustomerinfoModal">ADD CUSTOMER</a></li>
                      {this.props.authbtn ? <React.Fragment><li role="separator" className="divider hidden-md hidden-lg"></li>
                        <li><a className="hidden-md hidden-lg" data-toggle="modal" data-target="#orphenemailsModal">ORPHAN EMAILS</a></li></React.Fragment> : ''}

                      <li role="separator" className="divider hidden-md hidden-lg"></li>
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
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
