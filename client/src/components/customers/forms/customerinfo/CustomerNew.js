import React, { Component } from "react";
import CustomerForm from "./CustomerForm";
import { connect } from "react-redux";
// import CustomerFormReview from "./CustomerFormReview";
import SummaryForm from "../summary/SummaryForm";
import AvaloninfoForm from "../avaloninfo/AvaloninfoForm";
import TargetAreasForm from "../targetareas/TargetAreasForm";
import WebsiteInfoForm from "../targetareas/WebsiteInfoForm";
import { fetchCustomerInfo } from "../../../../actions/index";

class CustomerNew extends Component {
  state = { showFormReview: true };

  componentDidMount() {
    const customerId = this.props.match.params.customerId;
    this.props.fetchCustomerInfo(customerId);
    // console.clear();
    // console.log(this.props.fetchCustomerInfo(customerId));
  }

  renderCustomer() {
    // if (this.state.showFormReview) {
    //   return (
    //     <CustomerFormReview
    //       onCancel={() => this.setState({ showFormReview: false })}
    //     />
    //   );
    // }

    return (
      <div>
        <table>
          <tr>
            <td width="500px">
              <SummaryForm />
            </td>
            <td width="500px">
              <TargetAreasForm />
            </td>
          </tr>
          <tr>
            <td width="500px">{/* <SummaryForm /> */}</td>
            <td width="500px">
              <WebsiteInfoForm />
            </td>
          </tr>
          <tr>
            <td width="500px" colSpan="2">
              <CustomerForm
                customerDetails={this.props.customerForm}
                onCustomerSubmit={() => this.setState({ showFormReview: true })}
              />
            </td>
          </tr>
          <tr>
            <td width="500px" colSpan="2">
              <AvaloninfoForm />
            </td>
          </tr>
        </table>
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
  // console.clear();
  // console.log("Data To Pass", customerForm);
  return { customerForm };
}

export default connect(
  mapStateToProps,
  { fetchCustomerInfo }
)(CustomerNew);
