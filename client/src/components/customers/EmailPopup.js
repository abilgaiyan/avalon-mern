import React, { Component } from "react";


// const EmailPopup = () =>{

//     return(
// <div>
//     <div class="modal fade" id="myModal" role="dialog">
//         <div className="modal-dialog">

//             <div className="modal-content">
//             <div className="modal-header">
//                 <button type="button" className="close" data-dismiss="modal">&times;</button>
//                 <h4 className="modal-title">Modal Header</h4>
//             </div>
//             <div className="modal-body ">
//                 <div className="form-group"><label><strong>Subject:</strong></label><input type="text" className="form-control"/></div><br/>
//                 <div className="form-group"><label><strong>Comments:</strong></label><input type="text" className="form-control"/></div>
//             </div>
//             <div className="modal-footer">
//                 <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
//             </div>
//             </div>

//         </div>
//     </div>
// </div>

//     )
// }

class EmailPopup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(data);
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
    })
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
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body ">
                <form>
                  {/* <form onSubmit={this.handleSubmit("name")}> */}
                  <label htmlFor="subject">Enter Subject</label>
                  <input id="subject" name="subject" type="text" />

                  <label htmlFor="comments">Enter Comments</label>
                  <input id="comments" name="comments" type="text" />

                  <div className="modal-footer">
                    {/* <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                      onClick={e => {
                        this.handleSubmit(item);
                      }}
                    > </button>*/}
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={e => {
                        this.handleSubmit();
                      }}
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

export default EmailPopup;
