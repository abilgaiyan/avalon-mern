import React from "react";

const CustomerField = props => {
  const {
    input,
    label,
    type,
    data,
    meta: { touched, error }
  } = props;

  // var inputClass = "";
  console.log({ ...props });
  if (type === "checkbox") {
    return (
      <div className="form-group">
        <label className="control-label col-sm-2">{label}</label>
        <div className="checkbox col-sm-10">
          <label>
            <input
              {...input}
              className=""
              style={{ margin: "20px" }}
              type={type}
              value={data}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <div className="red-text" style={{ marginBottom: "20px" }}>
            {touched && error}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label className="control-label col-sm-2">{label}</label>
        <div className="col-sm-10 ">
          <input
            {...input}
            className="form-control"
            style={{ margin: "20px" }}
            type={type}
            value={data}
            onChange={this.handleChange.bind(this)}
          />
          <div className="red-text" style={{ marginBottom: "20px" }}>
            {touched && error}
          </div>
        </div>
      </div>
    );
  }
  // return (
  //   <div className="form-group">
  //     <label className="control-label col-sm-2">{label}</label>
  //     <div
  //       className={type === "checkbox" ? "checkbox col-sm-10" : "col-sm-10 "}
  //     >
  //       <input
  //         {...input}
  //         className={type === "checkbox" ? "" : "form-control"}
  //         style={{ margin: "px" }}
  //         type={type}
  //       />
  //     </div>
  //     <div className="red-text" style={{ marginBottom: "20px" }}>
  //       {touched && error}
  //     </div>
  //   </div>
  // );
};

export default CustomerField;
