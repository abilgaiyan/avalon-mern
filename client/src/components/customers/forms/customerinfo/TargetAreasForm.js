// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../../../actions";

class TargetAreasForm extends Component {
  // componentWillMount() {
  //   const customerId = this.props.match.params.customerId;
  //   console.log(customerId);
  //   this.props.fetchCustomer(customerId);
  // }

  render() {
    return (
      <div id="Target_Areas" className="panel-collapse collapse in">
        <div className="panel-body">
          <div className="info-section">
            <table>
              <tbody>
                <tr>
                  <td>Responsive Status:</td>
                  <td align="right">
                    {this.props.targetAreasdata[0].responsivestatus}
                  </td>
                </tr>
                <tr>
                  <td>Website Design Update Date:</td>
                  <td align="right">
                    {this.props.targetAreasdata[0].websitedesignupdatedate}
                  </td>
                </tr>
                <tr>
                  <td>JewelExchange:</td>
                  <td align="right">
                    {this.props.targetAreasdata[0].jewelexchange}
                  </td>
                </tr>
                <tr>
                  <td>JewelExchange Plan:</td>
                  <td align="right">
                    {this.props.targetAreasdata[0].jewelexchangeplan}
                  </td>
                </tr>
                <tr>
                  <td>SSL/HTTPS:</td>
                  <td align="right">
                    {this.props.targetAreasdata[0].sslhttps}
                  </td>
                </tr>
                <tr>
                  <td>Add on Module Deployed:</td>
                  <td align="right">
                    {this.props.targetAreasdata[0].addonmoduledeployed}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log("summary state :", state);
  return { targetAreasdata: state.targetAreas };
}

export default connect(mapStateToProps)(TargetAreasForm);
