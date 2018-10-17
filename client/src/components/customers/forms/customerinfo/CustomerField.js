import React from "react";

const CustomerField = props => {
  const {
    input,
    label,
    type,
    meta: { touched, error }
  } = props;

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
            />
          </label>
          <div className="red-text" style={{ marginBottom: "20px" }}>
            {/* {touched && error} */}
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
          />
          <div className="red-text" style={{ marginBottom: "20px" }}>
            {/* {touched && error} */}
          </div>
        </div>
      </div>
    );
  }
};

export default CustomerField;
