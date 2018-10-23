import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmail } from "../../actions";
// import EmailPopup from "./EmailPopup";
import EmailForm from "./forms/emaillog/EmailForm";

class Email extends Component {
  componentWillMount() {
    const customerId = this.props.customerId;
    console.log(customerId);
    this.props.fetchEmail(customerId);
  }

  renderEmail() {
    if (!this.props.email) return;

    //   console.log('this.props.customer')
    //   console.log(this.props.customer)
    //   console.log('this.props.customer')
    //console.log(this.props.fetchCustomers())
    const { email } = this.props;

    return (
      // <div key={customer._id} className="card blue-grey darken-1">
      <div className="">
        <div className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">
              sub:
            </label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">
                {email.subject}
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">
              Comments:
            </label>
            <div className="col-sm-10">
              <label className="control-label" htmlFor="email">
                {email.comments}
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="submit"
                data-toggle="modal"
                className="btn btn-primary"
                data-target="#myModal"
              ><i className="fa fa-plus-square"></i>
                Add{" "}
              </button>
              <EmailForm customerId={this.props.customerId} />
            </div>
          </div>
        </div>

        {/* test disgn */}
        <a href="#" className="pull-right icon_well">
          <button type="submit" className="btn btn-primary center-block">
            <i className="fa fa-plus-square"></i>
            <span>Add</span>
          </button>
        </a>
        <div className="clearfix"></div>
        <table className="table table-bordered table_list">
          <thead>
            <tr className="active">
              <th>Prev. Call Date</th>
              <th>Prev. Call Type</th>
              <th>Call Person</th>
              <th>Avalon Exec.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/25/2018</td>
              <td><i className="fa fa-sign-in" aria-hidden="true"></i></td>
              <td>Ron Ackerman</td>
              <td>Ajay</td>
              <td><i className="fa fa-search"></i></td>
            </tr>
            <tr>
              <td>08/25/2018</td>
              <td><i className="fa fa-sign-out" aria-hidden="true"></i></td>
              <td>Ron Ackerman</td>
              <td>Ajay</td>
              <td><i className="fa fa-search"></i></td>
            </tr>
            <tr>
              <td>08/25/2018</td>
              <td><i className="fa fa-sign-in" aria-hidden="true"></i></td>
              <td>Ron Ackerman</td>
              <td>Ajay</td>
              <td><i className="fa fa-search"></i></td>
            </tr>
          </tbody>
        </table>
        {/* test disgn */}
      </div>

    )
  }
  render() {
    return <div>{this.renderEmail()}</div>;
  }
}

function mapStateToProps({ email }) {
  // console.clear();
  // console.log({customer});
  return { email };
}

export default connect(
  mapStateToProps,
  { fetchEmail }
)(Email);
