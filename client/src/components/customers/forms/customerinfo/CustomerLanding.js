import React, { Component } from "react";
import CustomerForm from "./CustomerForm";
import { connect } from "react-redux";

// import WebsiteInfoForm from "../targetareas/WebsiteInfoForm";
import { fetchCustomerInfo } from "../../../../actions/index";

import SideNav from "./SideNav";
import HeaderSearch from "./HeaderSearch";
import CustomerSummary from "../summary/CustomerSummary";
import TargetAreasForm from "./TargetAreasForm";

import "../../../../components/css/common.css";

class CustomerLanding extends Component {
  state = { showFormReview: true };

  componentDidMount() {
    const customerId = this.props.match.params.customerId;
    this.props.fetchCustomerInfo(customerId);
  }

  renderCustomer() {
    return (
      <div className="dashboard_wraper container-fluid" id="wrapper">
        <div className="row">
          <SideNav />
          <div className="main_containt col-sm-10">
            <HeaderSearch />
            <div className="container-fluid">
              <div className="col-sm-6">
                <div className="panel-group" id="accordion1">
                  <div className="panel panel-default">
                    <div className="panel-heading active">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#Summary"
                        >
                          Summary
                        </a>
                      </h4>
                    </div>
                    <CustomerSummary />
                  </div>
                  <CustomerForm
                    customerDetails={this.props.customerForm}
                    onCustomerSubmit={() =>
                      this.setState({ showFormReview: true })
                    }
                  />
                  {/* <div className="panel panel-default"> 
                                 <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#Customer_Info">Customer Info</a>
                                    </h4>
                                </div>
                                <div id="Customer_Info" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <a href="#" className="pull-right icon_well"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>
                                        <div className="clearfix"></div>
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
                                                <label for="signup-firstname" className="col-sm-3 control-label">First Name*</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" id="signup-firstname">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="signup-lastname" className="col-sm-3 control-label">Last Name</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" id="signup-lastname">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="signup-username" className="col-sm-3  control-label">Username*</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" id="signup-username">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="signup-email" className="col-sm-3 control-label">Email*</label>
                                                <div className="col-sm-9">
                                                    <input type="email" className="form-control" id="signup-email">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="signup-password" className="col-sm-3  control-label">Password*</label>
                                                <div className="col-sm-9">
                                                    <input type="password" className="form-control" id="signup-password">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Inline</label>
                                                <div className="col-md-9">
                                                    <label className="radio radio-inline">
                                                        <input type="radio" name="radioinline" value="radio1"> Radio Item 1
                                                    </label>
                                                    <label className="radio radio-inline">
                                                        <input type="radio" name="radioinline" value="radio2"> Radio Item 2
                                                    </label>
                                                    <label className="radio radio-inline">
                                                        <input type="radio" name="radioinline" value="radio3"> Radio Item 3
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Textarea</label>
                                                <div className="col-md-9">
                                                    <textarea className="form-control" placeholder="textarea" rows="4"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg btn-fullrounded center-block">
                                                <i className="fa fa-check-circle"></i>
                                                <span>Sign Up</span>
                                            </button>
                                        </form>
                                    </div>
                                </div> 
                            </div>*/}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#collapse5"
                        >
                          Collapsible Group 2
                        </a>
                      </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse">
                      <div className="panel-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading active">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#Target_Areas"
                        >
                          Target Areas
                        </a>
                      </h4>
                    </div>
                    <TargetAreasForm />
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#Query_Support"
                        >
                          Query / Support Trend
                        </a>
                      </h4>
                    </div>
                    <div id="Query_Support" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="info-section">
                          <table className="table table-info no-margin">
                            <tbody>
                              <tr>
                                <td>Avalon Customer:</td>
                                <td align="right">Yes</td>
                              </tr>
                              <tr>
                                <td>Buying Group:</td>
                                <td align="right">RJO, IJO, CBG</td>
                              </tr>
                              <tr>
                                <td>Website Plan:</td>
                                <td align="right">Gold</td>
                              </tr>
                              <tr>
                                <td>Website Status:</td>
                                <td align="right">Layout Approved</td>
                              </tr>
                              <tr>
                                <td>ASHI Feed:</td>
                                <td align="right">Restricted</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#Call_Log"
                        >
                          Call Log
                        </a>
                      </h4>
                    </div>
                    <div id="Call_Log" className="panel-collapse collapse ">
                      <div className="panel-body">
                        <div className="overlay-refresh">
                          <div className="vertical-align-wrap">
                            <div className="vertical-align-middle">
                              <i className="fa fa-refresh fa-spin" />
                              <span>Refreshing...</span>
                            </div>
                          </div>
                        </div>
                        <a href="#" className="pull-right icon_well">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-fullrounded center-block"
                          >
                            <i className="fa fa-plus-square" />
                            <span>Add</span>
                          </button>
                        </a>
                        <div className="clearfix" />
                        {/* <div className="alert alert-info"><i className="fa fa-info-circle"></i> Click Refresh button above to simulate panel refresh event</div> */}
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Prev. Call Date</th>
                              <th>Prev. Call Type</th>
                              <th>Call Person</th>
                              <th>Avalon Exec.</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>08/25/2018</td>
                              <td>Steve</td>
                              <td>Ron Ackerman</td>
                              <td>Ajay</td>
                              <td>
                                <i className="fa fa-search" />
                              </td>
                            </tr>
                            <tr>
                              <td>08/25/2018</td>
                              <td>Simon</td>
                              <td>Ron Ackerman</td>
                              <td>Ajay</td>
                              <td>
                                <i className="fa fa-search" />
                              </td>
                            </tr>
                            <tr>
                              <td>08/25/2018</td>
                              <td>Jane</td>
                              <td>Ron Ackerman</td>
                              <td>Ajay</td>
                              <td>
                                <i className="fa fa-search" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse4"
                        >
                          Collapsible Group 1
                        </a>
                      </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse">
                      <div className="panel-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse6"
                        >
                          Collapsible Group 3
                        </a>
                      </h4>
                    </div>
                    <div id="collapse6" className="panel-collapse collapse">
                      <div className="panel-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container marginBottom40">{this.renderCustomer()}</div>
    );
  }
}

function mapStateToProps({ customerForm }) {
  return { customerForm };
}

export default connect(
  mapStateToProps,
  { fetchCustomerInfo }
)(CustomerLanding);
