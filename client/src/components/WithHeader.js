import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Dashboard from "./customers/Dashboard";
import CustomerDetails from "./customers/CustomerDetails";

class MainWraper extends Component {
  constructor(props) {
    super(props);
    this.state = { Toggle: false }
    this.LeftsidebarToggle = this.LeftsidebarToggle.bind(this);
  }

  LeftsidebarToggle = () => {
    this.setState(state => ({
      Toggle: !this.state.Toggle
    }));
  }

  render() {
    return (
        <div className={"row crm_wrapper" + (this.state.Toggle ? " toggle_menu" : "")}>
          {!this.props.leftChoice ? null : <LeftSideBar />}
          <div className={"col-sm-12 page_container" + (!this.props.leftChoice || this.state.Toggle ? " full" : "")}>
            {!this.props.leftChoice ? null :<a onClick={this.LeftsidebarToggle} className="toggle_arrow" title={this.state.Toggle ? "Open Sidebar" : "Close Sidebar"}><i className={"fa" + (this.state.Toggle ? ' fa-angle-double-right' : ' fa-angle-double-left')} aria-hidden="true"></i></a> }
            <Header />
            <Route exact={true} path={this.props.path} component={this.props.content} />
            <Footer />
          </div>
        </div>
    )
  }
}

export function CustomerList() {
  return (
    <MainWraper content={Dashboard} path="/customers/" leftChoice={false} />
  )
}
export function CustomerDetailsWraper() {
  return (
    <MainWraper content={CustomerDetails} path="/customers/:customerId" leftChoice={true} />
  )
}


export default MainWraper;
