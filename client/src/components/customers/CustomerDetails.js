import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer } from '../../actions';
import Email from './Email';
import PhoneCall from './PhoneCall';
import CustomerQuery from './CustomerQuery';
import '../css/common.css'


class AccordianPanel extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className={this.props.active === 'True' ? "panel-heading active" : "panel-heading "}>
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent={'#' + this.props.parent} href={'#' + this.props.AccId}>{this.props.title}</a>
          </h4>
        </div>
        <div id={this.props.AccId} className={this.props.active === 'True' ? "panel-collapse collapse in" : "panel-collapse collapse"}>
          <div className="panel-body">
            {this.props.func}
          </div>
        </div>
      </div>
    )
  }
}
class CustomerDetails extends Component {

  componentWillMount() {

    const customerId = this.props.match.params.customerId;
    console.log(customerId);
    this.props.fetchCustomer(customerId);

  }

  renderSummry() {
    if (!this.props.customer && this.props.customer.length <= 0)
      return;
    const { customer } = this.props
    return (
      <div>

        <img src="images/akerman_logo.png" className="img-responsive pull-right" />
        <p>{customer.customerName} <br />{customer.city}, {customer.state} <br />{customer.contactPersonName}</p>
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
                <td align="right">{customer.monthlyPlan}</td>
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
    )
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
  renderEmail() {
    return (
      <Email customerId={this.props.match.params.customerId} />
    )
  }
  renderPhone() {
    return (
      <PhoneCall customerId={this.props.match.params.customerId} />
    )
  }
  renderQuery() {
    return (
      <CustomerQuery customerId={this.props.match.params.customerId} />
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-6">

          {/* accordian */}
          <div className="panel-group" id="accordion1">

            {/* Summry Start Here */}
            <AccordianPanel title="Summary" func={this.renderSummry()} active="True" AccId="Summary" paraent="accordion1" />
            {/* Summry End Here */}

            {/* Customer Info Start Here */}
            <AccordianPanel title="Customer Info" func={this.renderCustomer()} active="False" AccId="Customer_Info" paraent="accordion1" />
            {/* Customer Info End Here */}

          </div>
          {/* end Accordian */}

        </div>

        {/* divided block */}

        <div className="col-sm-6">

          {/* Start Accordian */}
          <div class="panel-group" id="accordion">

            {/* Emails Info Start Here */}
            <AccordianPanel title="Emails" func={this.renderEmail()} active="True" AccId="Emails" paraent="accordion" />
            {/* Emails Info End Here */}

            {/* Phone Info Start Here */}
            <AccordianPanel title="Phone" func={this.renderPhone()} active="True" AccId="Phone" paraent="accordion" />
            {/* Phone Info End Here */}

            {/* Query Info Start Here */}
            <AccordianPanel title="Query" func={this.renderQuery()} active="False" AccId="Call_Log" paraent="accordion" />
            {/* Query Info End Here */}


          </div>
          {/* end Accordian */}

        </div>
      </div>
    )
  }
}

function mapStateToProps({ customer }) {
  console.clear();
  console.log({ customer });
  return { customer }
}

export default connect(mapStateToProps, { fetchCustomer })(CustomerDetails);