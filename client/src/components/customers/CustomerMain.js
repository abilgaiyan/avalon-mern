import React, { Component } from "react";

class CustomerMain extends Component {
  // console.log(meta);
  render() {
    return (
      <div>
        <label>Welcom Ajay Jha</label>
        <label>Search Customer</label>
        <input
          type="text"
          name="subjmessagect"
          className="form-control"
          id="message"
          placeholder="Enter Message"
          style={{ margin: "5px" }}
        />
      </div>
    );
  }
}

export default CustomerMain;
