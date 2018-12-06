import React, { Component } from "react";
import { connect } from "react-redux";

// import QueryForm from "./queryForm";
class SupportQuery extends Component {
  render() {
    let emailCount = 0;
    let callCount = 0;
    let commentCount = 0;
    if (!this.props.communicationLog) {
      return "Loading...";
    }
    else {
      this.props.communicationLog.map(chkType => {
        if (chkType.ctype === "email") {
          emailCount = chkType.email_count
        }
        else if (chkType.ctype === "call") {
          callCount = chkType.call_count
        }
        else if (chkType.ctype === "comment") {
          commentCount = chkType.comment_count
        }
      })
    }
    return (
      <div className="info-section">
        <table className="table table-info no-margin">
          <tbody>
            <tr>
              <td>Email Count:</td>
              <td align="right">
                {emailCount}
              </td>
            </tr>

            <tr>
              <td>Comment Count:</td>
              <td align="right">
                {callCount}
              </td>
            </tr>
            <tr>
              <td>Call Count:</td>
              <td align="right">
                {commentCount}
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      // <div className=" icon_well">
      //   {/* <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#queryLogModal"><i className="fa fa-plus-square"></i>Add</button> */}
      //   <div className="clearfix"></div>
      //   {/* <QueryForm /> */}
      //   <div><label>Email Count:{emailCount}</label></div>
      //   <div><label>Comment Count:{callCount}</label></div>
      //   <div><label>Call Count:{commentCount}</label></div>
      // </div>
    );
  }
}

// export default SupportQuery;


function mapStateToProps(state) {
  // console.clear();
  // console.log(state.communicationLog);
  return {
    communicationLog: state.communicationLog,
  };
}

export default connect(
  mapStateToProps
)(SupportQuery);

