import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions";
import { Link, withRouter } from "react-router-dom";
import moment from 'moment';
// import { fetchCustomers } from "../../actions";
// import { Link } from "react-router-dom";
import CallLogInfoForm from "./CallLogInfoForm";

class CallLogList extends Component {
  //   componentDidMount() {
  //     this.props.fetchCallLog();
  //     // console.log(this.props.fetchCustomers());
  //   }

  //   renderCallLog() {
  // if (!this.props.customers) return;
  //console.log(this.props.fetchCustomers())
  // return this.props.customers.map(customer => {
  //   return (
  // <div key={customer._id} className="row list-group-item">
  //     <div className="col-sm-12"> <div className="col-sm-8">
  //         <p className="card-title">{customer.jewelsoftId}</p>
  //         {customer.customerName}
  //     </div>
  //         <div className="col-sm-4 card-link">
  //             <Link className="alink" to={'customers/' + customer._id}>Go To Details</Link>
  //         </div>
  //     </div>
  //     {/* }} */}
  // </div>
  // });
  // }

  createListItem() {
    return this.props.callloginfoList.map((list) => {
      return (
        <tr key={list._id}>
          <td>{moment(list.previousCallDate).format('DD MMM YYYY')}</td>
          <td>{list._previousCallType._previouscalltype === "Incoming" ? <i className="fa fa-sign-in" aria-hidden="true"></i> : <i className="fa fa-sign-out" aria-hidden="true"></i>}</td>
          <td>{list.callPerson}</td>
          <td>{list.avalonExcutive}</td>
          <td>{list.followupcallTime === undefined ? '' : moment(list.followupcallTime).format('hh:mm A')}</td>
          <td><i className="fa fa-search"></i></td>
        </tr>
      )
    })
  }

  render() {
    if (!this.props.callloginfoList) {
      // console.clear();
      // console.log(this.props.productPlanDropdown[0].planName);
      return (<div>Loading...</div>)
    }
    else {
      return (
        <div >
          {/* test disgn */}
          {/* <a href="#" className="pull-right icon_well">
            <button type="submit" className="btn btn-primary center-block">
              <i className="fa fa-plus-square"></i>
              <span>Add</span>
            </button>
          </a> */}
          <div className=" icon_well">
            <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#callLogModal"><i className="fa fa-plus-square"></i>Add</button>
            <div className="clearfix"></div>
            {/* <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}
            <CallLogInfoForm />
          </div>



          {/* <div className="modal fade" id="callLogModal" role="dialog">
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Modal Header</h4>
                </div>
                <div className="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div> */}

          <div className="clearfix"></div>
          <table className="table table-bordered table_list">
            <thead>
              <tr className="active">
                <th>Prev. Call Date</th>
                <th>Prev. Call Type</th>
                <th>Call Person</th>
                <th>Avalon Exec.</th>
                <th>Followup Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.createListItem()}
            </tbody>
          </table>
          {/* test disgn */}
        </div>
        //   </div>
      );
    }

  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log(state.callloginfoListReducer);
  return {
    callloginfoList: state.callloginfoListReducer,
  };
}

export default connect(mapStateToProps)(CallLogList);
// function mapStateToProps({ customers }) {
//   // console.log({customers})
//   return { customers };
// }

// export default connect(
//   mapStateToProps,
//   { fetchCustomers }
// )(CallLogList);
