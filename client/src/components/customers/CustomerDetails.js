import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer } from '../../actions';
import Email from './Email';
import PhoneCall from './PhoneCall';
import CustomerQuery from './CustomerQuery';
import '../css/common.css'

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
        <form className="form-horizontal label-left">
        <div className="form-group">
          <label htmlFor="Jewel_Soft_ID" className="col-sm-3 control-label">Jewel Soft ID:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="Jewel_Soft_ID" disabled value={customer.jewelsoftId} />
          </div>
        </div>

        <div className="form-group">
          <label for="Customer_Name" className="col-sm-3 control-label">Customer Name:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="Customer_Name" disabled value={customer.customerName} />
          </div>
        </div>
        <div className="form-group">
          <label for="sr" className="col-sm-3 control-label">sr:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="sr" disabled value={customer.sr} />
          </div>
        </div>
        <div className="form-group">
          <label for="jewelsoftId" className="col-sm-3 control-label">jewelsoftId:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="jewelsoftId" disabled value={customer.jewelsoftId} />
          </div>
        </div>
        <div className="form-group">
          <label for="Contact_Person_Name" className="col-sm-3 control-label">Contact Person Name:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="Contact_Person_Name" disabled value={customer.contactPersonName} />
          </div>
        </div>
        <div className="form-group">
          <label for="address1" className="col-sm-3 control-label">address1:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="address1" disabled value={customer.address1} />
          </div>
        </div>
        <div className="form-group">
          <label for="City" className="col-sm-3 control-label">City:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="City" disabled value={customer.city} />
          </div>
        </div>
        <div className="form-group">
          <label for="State" className="col-sm-3 control-label">State:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="State" disabled value={customer.state} />
          </div>
        </div>
        <div className="form-group">
          <label for="Sales_Person_Name" className="col-sm-3 control-label">Sales Person Name:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="Sales_Person_Name" disabled value={customer.salesPersonName} />
          </div>
        </div>
        <div className="form-group">
          <label for="Website_Url" className="col-sm-3 control-label">Website Url:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="Website_Url" disabled value={customer.websiteUrl} />
          </div>
        </div>
        <div className="form-group">
          <label for="Website_Release_Month" className="col-sm-3 control-label">Website Release Month:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="Website_Release_Month" disabled value={customer.websiteReleaseMonth} />
          </div>
        </div>
        <div className="form-group">
          <label for="Website_Release_Year" className="col-sm-3 control-label">Website Release Year:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="Website_Release_Year" disabled value={customer.websiteReleaseYear} />
          </div>
        </div>

        
          {/* <button type="submit" className="btn btn-primary btn-lg btn-fullrounded center-block">
                      <i className="fa fa-check-circle"></i>
                      <span>Sign Up</span>
                    </button> */}

        </form>
      </div>

      //   </div>
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-6">
          {/* accordian */}
          <div className="panel-group" id="accordion1">
            <div className="panel panel-default">
              <div className="panel-heading active orange">
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
                  {this.renderCustomer()}
                </div>
              </div>
            </div>
           
          </div>
          {/* end Accordian */}
        </div>
        <div className="col-sm-6">
          {/* Start Accordian */}
          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading active">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#Emails">Emails</a>
                </h4>
              </div>
              <div id="Emails" class="panel-collapse collapse in">
                <div class="panel-body">
                  <Email customerId={this.props.match.params.customerId} />
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#Phone">Phone</a>
                </h4>
              </div>
              <div id="Phone" class="panel-collapse collapse">
                <div class="panel-body">
                  <PhoneCall customerId={this.props.match.params.customerId} />
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#Call_Log">Query</a>
                </h4>
              </div>
              <div id="Call_Log" class="panel-collapse collapse ">
                <div class="panel-body">
                  <CustomerQuery customerId={this.props.match.params.customerId} />
                </div>
              </div>
            </div>
          </div>
          {/* end Accordian */}
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