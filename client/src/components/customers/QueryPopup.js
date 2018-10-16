import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuery } from "../../actions";

class QueryPopup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetFields = () => {
    document.getElementById("my-query-form").reset();
  };

  handleSubmit() {
    //let subject = document.getElementById("subject").value;
    let messagequery = document.getElementById("messagequery").value;
    let customerId = this.props.customerId;

    let data = {
      message: messagequery,
      customerId: customerId
    };
    //console.log(data)
    fetch("/api/customerqueries", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then(this.props.fetchQuery(customerId))
      .then(this.resetFields);
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="querypopup" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Query</h4>
              </div>
              <div className="modal-body ">
                <form id="my-query-form" className="form-horizontal form-email">
                  {/* <form onSubmit={this.handleSubmit("name")}> */}
                  {/* <label htmlFor="subject">Enter Subject</label>
                                    <input id="subject" name="subject" type="text" /> */}
                  <div className="form-group">
                    <label className="col-sm-3" htmlFor="message">
                      Enter Message:
                    </label>

                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="messagequery"
                        className="form-control"
                        id="messagequery"
                        placeholder="Enter Message"
                        style={{ margin: "5px" }}
                      />
                    </div>
                  </div>

                  <div className="btn-group pull-right ">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
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

export default connect(
  null,
  { fetchQuery }
)(QueryPopup);
