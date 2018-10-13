import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer } from '../../actions';
import Email from './Email';
import PhoneCall from './PhoneCall';
import CustomerQuery from './CustomerQuery';
import Header from '../Header'

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
      // <div key={customer._id} class="card blue-grey darken-1">
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

      <div className="container-fluid well" >
        <Header />
        <div className="row">
          <div className="col-sm-7">
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading"><strong>Customer Info</strong></div>
                <div className="panel-body">{this.renderCustomer()}</div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
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

              {/* <div className="col-sm-12"><strong> Emails </strong><Email customerId={this.props.match.params.customerId} /></div>
           <div className="col-sm-12"><strong>Phone</strong><PhoneCall customerId={this.props.match.params.customerId} /></div>
           <div className="col-sm-12"><strong> Query</strong><CustomerQuery customerId={this.props.match.params.customerId} /></div> */}
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