import React, { Component } from "react";

class SupportQuery extends Component {
  render() {
    return (
      <div id="Target_Areas" className="panel-collapse collapse in">
        <div className="panel-body">
          <div className="info-section">
            <table>
              <tbody>
                <tr>
                  <td>Avg Monthly Queries:</td>
                  <td align="right">
                    {this.props.supportQueryData.responsivestatus}
                  </td>
                </tr>
                <tr>
                  <td>Avg Yearly Queries:</td>
                  <td align="right">
                    {this.props.supportQueryData.websitedesignupdatedate}
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

export default SupportQuery;
