import React, { Component } from "react";

class CustomersInfo extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              className="collapsed"
              data-toggle="collapse"
              data-parent="#accordion1"
              href="#Customer_Info"
            >
              Customer Info
            </a>
          </h4>
        </div>
        <div id="Customer_Info" className="panel-collapse collapse">
          <div className="panel-body">
            <a href="#" className="pull-right icon_well">
              <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true" />
            </a>
            <div className="clearfix" />
            <form className="form-horizontal label-left">
              <div className="form-group">
                <label className="col-md-3 control-label">Select</label>
                <div className="col-md-9">
                  <select className="form-control">
                    <option value="cheese">Cheese</option>
                    <option value="tomatoes">Tomatoes</option>
                    <option value="mozarella">Mozzarella</option>
                    <option value="mushrooms">Mushrooms</option>
                    <option value="pepperoni">Pepperoni</option>
                    <option value="onions">Onions</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  for="signup-firstname"
                  className="col-sm-3 control-label"
                >
                  First Name*
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="signup-firstname"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="signup-lastname" className="col-sm-3 control-label">
                  Last Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="signup-lastname"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  for="signup-username"
                  className="col-sm-3  control-label"
                >
                  Username*
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="signup-username"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="signup-email" className="col-sm-3 control-label">
                  Email*
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    id="signup-email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  for="signup-password"
                  className="col-sm-3  control-label"
                >
                  Password*
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="signup-password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Inline</label>
                <div className="col-md-9">
                  <label className="radio radio-inline">
                    <input type="radio" name="radioinline" value="radio1" />{" "}
                    Radio Item 1
                  </label>
                  <label className="radio radio-inline">
                    <input type="radio" name="radioinline" value="radio2" />{" "}
                    Radio Item 2
                  </label>
                  <label className="radio radio-inline">
                    <input type="radio" name="radioinline" value="radio3" />{" "}
                    Radio Item 3
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Textarea</label>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    placeholder="textarea"
                    rows="4"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-fullrounded center-block"
              >
                <i className="fa fa-check-circle" />
                <span>Sign Up</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps({ customerForm }) {
//   return { customerForm };
// }

export default CustomersInfo;
// connect()(SideNav);
//   mapStateToProps,
//   { fetchCustomerInfo }
