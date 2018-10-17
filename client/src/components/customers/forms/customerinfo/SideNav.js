import React, { Component } from "react";
class SideNav extends Component {
  //   state = { showFormReview: true };

  //   componentDidMount() {
  //     const customerId = this.props.match.params.customerId;
  //     this.props.fetchCustomerInfo(customerId);

  //     // console.clear();
  //     // console.log(this.props.fetchCustomerInfo(customerId));
  //   }

  render() {
    return (
      <div className="sidebar col-sm-2" id="sidebar-nav">
        <nav>
          <div className="site_logo well">
            <a href="#">
              <img src="images/logo.png" className="img-responsive" />
            </a>
          </div>
          <div className="list-group" id="sidebar-nav-menu">
            <a href="#" className="list-group-item">
              Summary
            </a>
            <a href="#" className="list-group-item">
              Customer Info
            </a>
            <a href="#" className="list-group-item">
              Target Areas
            </a>
            <a href="#" className="list-group-item">
              Query / Support Trend
            </a>
            <a href="#" className="list-group-item">
              Call Log
            </a>
            <a href="#" className="list-group-item">
              Email Log
            </a>
            <a href="#" className="list-group-item">
              Avalon Info
            </a>
            <a href="#" className="list-group-item">
              Billing Info
            </a>
            <a href="#" className="list-group-item">
              Website Info
            </a>
            <a href="#" className="list-group-item">
              Product Info
            </a>
            <a href="#" className="list-group-item">
              ASHI Micro-Website Info
            </a>
            <a href="#" className="list-group-item">
              Domain Info
            </a>
            <a href="#" className="list-group-item">
              SSL Info
            </a>
            <a href="#" className="list-group-item">
              Business Email Info
            </a>
            <a href="#" className="list-group-item">
              Email Marketing Account Info
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

// function mapStateToProps({ customerForm }) {
//   return { customerForm };
// }

export default SideNav;
// connect()(SideNav);
//   mapStateToProps,
//   { fetchCustomerInfo }
