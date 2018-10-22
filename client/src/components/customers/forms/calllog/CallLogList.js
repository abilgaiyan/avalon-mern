import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchCustomers } from "../../actions";
// import { Link } from "react-router-dom";

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
  render() {
    return (
      <div id="Call_Log" className="panel-collapse collapse ">
        <div class="panel-body">
          <div class="overlay-refresh">
            <div class="vertical-align-wrap">
              <div class="vertical-align-middle">
                <i class="fa fa-refresh fa-spin" />
                <span>Refreshing...</span>
              </div>
            </div>
          </div>
          <a href="#" className="pull-right icon_well">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-fullrounded center-block"
            >
              <i className="fa fa-plus-square" />
              <span>Add</span>
            </button>
          </a>
          <div className="clearfix" />
          {/* <div class="alert alert-info"><i class="fa fa-info-circle"></i> Click Refresh button above to simulate panel refresh event</div> */}
          <table className="table">
            <thead>
              <tr>
                <th>Prev. Call Date</th>
                <th>Prev. Call Type</th>
                <th>Call Person</th>
                <th>Avalon Exec.</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08/25/2018</td>
                <td>Steve</td>
                <td>Ron Ackerman</td>
                <td>Ajay</td>
                <td>
                  <i class="fa fa-search" />
                </td>
              </tr>
              <tr>
                <td>08/25/2018</td>
                <td>Simon</td>
                <td>Ron Ackerman</td>
                <td>Ajay</td>
                <td>
                  <i class="fa fa-search" />
                </td>
              </tr>
              <tr>
                <td>08/25/2018</td>
                <td>Jane</td>
                <td>Ron Ackerman</td>
                <td>Ajay</td>
                <td>
                  <i class="fa fa-search" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      //   </div>
    );
  }
}

export default CallLogList;
// function mapStateToProps({ customers }) {
//   // console.log({customers})
//   return { customers };
// }

// export default connect(
//   mapStateToProps,
//   { fetchCustomers }
// )(CallLogList);
