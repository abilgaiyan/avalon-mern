import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchEmail } from '../../actions';


class EmailPopup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetFields = () => {
    document.getElementById("my-email-form").reset();
  }


  handleSubmit() {
    let subject = document.getElementById("subject").value;
    let comment = document.getElementById("comments").value;
    let customerId = this.props.customerId;

    let data = {
      'subject': subject,
      'message': comment,
      'customerId': customerId
    };
    // console.log(data);
    // const data = new FormData(event.target);
    // console.log(data);
    // submitEmail(data);
    fetch('/api/customeremail', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(this.props.fetchEmail(customerId)).then(this.resetFields)
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Email Details</h4>
              </div>
              <div className="modal-body ">
                <form id="my-email-form" className="form-horizontal">
                  {/* <form onSubmit={this.handleSubmit("name")}> */}
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="subject">Enter Subject:</label>

                    <div className="col-sm-9">
                      <input type="text" name="subject" className="form-control" id="subject" placeholder="Enter Subject" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="subject">Enter Comments:</label>

                    <div className="col-sm-9">
                      <input type="text" name="comments" className="form-control" id="comments" placeholder="Enter Comments" />
                    </div>
                  </div>


                  <div className="modal-footer text-center paddingTop20 paddingBottom10">

                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={e => {
                        this.handleSubmit();
                      }}
                      data-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchEmail })(EmailPopup);
