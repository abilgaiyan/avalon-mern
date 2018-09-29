import React, { Component } from "react";




class QueryPopup extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        //let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let customerId = this.props.customerId;

        let data = {
            'message': message,
            'customerId': customerId
        };
        console.log(data)
        fetch('/api/customerqueries', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
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
                                <form>
                                    {/* <form onSubmit={this.handleSubmit("name")}> */}
                                    {/* <label htmlFor="subject">Enter Subject</label>
                                    <input id="subject" name="subject" type="text" /> */}

                                    <label htmlFor="message">Enter Message</label>
                                    <input id="message" name="message" type="text" />

                                    <div className="modal-footer">

                                        <button type="button" className="btn btn-success" onClick={e => { this.handleSubmit(); }}>Save</button>
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

export default QueryPopup;
