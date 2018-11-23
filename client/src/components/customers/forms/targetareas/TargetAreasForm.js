import React, { Component } from "react";
import { connect } from "react-redux"


class TargetAreasForm extends Component {
  render() {
    let responsiveStatus = '';
    let jewelexchange = '';
    let jewelexchangeplan = '';
    let sslhttps = '';

    if (this.props.targetAreasData._avalonInfo) {
      responsiveStatus = this.props.targetAreasData._avalonInfo._websitestatus._websitestatus;
    }
    if (this.props.targetAreasData._productInfo) {
      jewelexchange = this.props.targetAreasData._productInfo.jewelExchangeSignupStatus;
      jewelexchangeplan = this.props.targetAreasData._productInfo.jewelExchangePlan;
    }
    if (this.props.targetAreasData._sslInfo) {
      sslhttps = this.props.targetAreasData._sslInfo.httpsStatus;
    }

    return (

      <div className="info-section">
        <table className="table table-info no-margin">
          <tbody>
            <tr>
              <td>Responsive Status:</td>
              <td align="right">
                {responsiveStatus}
              </td>
            </tr>
            {/* <tr>
              <td>Website Design Update Date:</td>
              <td align="right">
                {this.props.targetAreasData.websitedesignupdatedate}
              </td>
            </tr> */}
            <tr>
              <td>JewelExchange:</td>
              <td align="right">
                {jewelexchange}
              </td>
            </tr>
            <tr>
              <td>JewelExchange Plan:</td>
              <td align="right">
                {jewelexchangeplan}
              </td>
            </tr>
            <tr>
              <td>SSL/HTTPS:</td>
              <td align="right">{sslhttps}</td>
            </tr>
            {/* <tr>
              <td>Add on Module Deployed:</td>
              <td align="right">
                {this.props.targetAreasData.addonmoduledeployed}
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    targetAreasData: state.customerForm
  };
}

export default connect(mapStateToProps)(TargetAreasForm);
