import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer } from '../../actions';
import Email from './Email';
import PhoneCall from './PhoneCall';
import CustomerQuery from './CustomerQuery';
import LeftSideBar from '../LeftSideBar'
import '../css/Main.css'

class CustomerDetails extends Component {

  componentWillMount() {

    const customerId = this.props.match.params.customerId;
    console.log(customerId);
    this.props.fetchCustomer(customerId);

  }

  renderCustomer() {
    if (!this.props.customer && this.props.customer.length <= 0)
      return;

    //   console.log('this.props.customer')
    //   console.log(this.props.customer)
    //   console.log('this.props.customer')
    //console.log(this.props.fetchCustomers())
    const { customer } = this.props

    return (
      // <div key={customer._id} className="card blue-grey darken-1">
      <div className="col-sm-12" >
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Jewel Soft ID:</label>

            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.jewelsoftId}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Customer Name:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.customerName}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">sr:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.sr}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">jewelsoftId:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.jewelsoftId}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Contact Person Name:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.contactPersonName}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">address1:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.address1}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">City:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.city}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">State:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.state}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Sales Person Name:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.salesPersonName}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Website Url:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.websiteUrl}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Website Release Month:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.websiteReleaseMonth}</label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Website Release Year:</label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">{customer.websiteReleaseYear}</label>
            </div>
          </div>



        </form>
      </div>

      //   </div>
    )
  }
  render() {
    return (
      <div className="row">
        <LeftSideBar />
        <div className="main_containt col-sm-10">
          <div className="container-fluid">
            {/* <Header /> */}

            <div className="col-sm-6">
              {/* accordian */}
              <div className="panel-group" id="accordion1">
                <div className="panel panel-default">
                  <div className="panel-heading active">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion1" href="#Summary">Summary</a>
                    </h4>
                  </div>
                  <div id="Summary" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <img src="images/akerman_logo.png" className="img-responsive pull-right" />
                      <p>Ackerman Jewelers <br />New York, NY <br />Mr. Ron Ackerman</p>
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
                            <input type="text" className="form-control" id="signup-firstname" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="signup-lastname" className="col-sm-3 control-label">Last Name</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" id="signup-lastname" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="signup-username" className="col-sm-3  control-label">Username*</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" id="signup-username" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="signup-email" className="col-sm-3 control-label">Email*</label>
                          <div className="col-sm-9">
                            <input type="email" className="form-control" id="signup-email" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="signup-password" className="col-sm-3  control-label">Password*</label>
                          <div className="col-sm-9">
                            <input type="password" className="form-control" id="signup-password" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Inline</label>
                          <div className="col-md-9">
                            <label className="radio radio-inline">
                              <input type="radio" name="radioinline" value="radio1" /> Radio Item 1
                                                    </label>
                            <label className="radio radio-inline">
                              <input type="radio" name="radioinline" value="radio2" /> Radio Item 2
                                                    </label>
                            <label className="radio radio-inline">
                              <input type="radio" name="radioinline" value="radio3" /> Radio Item 3
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
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapse5">Customer Info</a>
                    </h4>
                  </div>
                  <div id="collapse5" className="panel-collapse collapse">
                    <div className="panel-body">
                    {this.renderCustomer()}
                                    </div>
                  </div>
                </div>
              </div>
              {/* end Accordian */}
              
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="panel-group">
                  <div className="panel panel-default">
                    <div className="panel-heading"><strong> Emails </strong></div>
                    <div className="panel-body"><Email customerId={this.props.match.params.customerId} /></div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading"><strong>Phone</strong></div>
                    <div className="panel-body"><PhoneCall customerId={this.props.match.params.customerId} /></div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading"><strong> Query</strong></div>
                    <div className="panel-body"><CustomerQuery customerId={this.props.match.params.customerId} /></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps({ customer }) {
  // console.clear();
  // console.log({customer});
  return { customer }
}

export default connect(mapStateToProps, { fetchCustomer })(CustomerDetails);