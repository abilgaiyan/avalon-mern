import React from "react";

const CustomerField = props => {
  const {
    input,
    label,
    type,
    disabled,
    meta: { touched, error }
  } = props;

  // console.log({ ...props });
  if (type === "checkbox") {
    return (
      <div className="form-group">
        <label className="control-label col-sm-3">{label}</label>
        <div className="checkbox col-sm-9">
          <label>
            <input
              {...input}
              className=""
              type={type}
              disabled={disabled ? "disabled" : ""}
            />
          </label>
          <div className="red-text">{/* {touched && error} */}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label className="control-label col-sm-3">{label}</label>
        <div className="col-sm-9 ">
          <input
            {...input}
            className="form-control"
            type={type}
            disabled={disabled ? "disabled" : ""}
          />
          <div className="red-text" >
            {/* {touched && error} */}
          </div>
        </div>
      </div>
    );
  }
};

export default CustomerField;
