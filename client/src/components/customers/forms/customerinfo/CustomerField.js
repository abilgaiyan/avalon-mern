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
<<<<<<< HEAD
            <input
              {...input}
              className=""
              type={type}
              disabled = {disabled ? "disabled" : ""}
            />
=======
            <input {...input} className="" type={type} />
>>>>>>> e36e5eb9ba5bfe8b835f1a609951d2a368a7c941
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
<<<<<<< HEAD
          <input
            {...input}
            className="form-control"
            type={type}
            disabled = {disabled ? "disabled" : ""}
          />
          <div className="red-text" >
            {/* {touched && error} */}
          </div>
=======
          <input {...input} className="form-control" type={type} />
          <div className="red-text">{/* {touched && error} */}</div>
>>>>>>> e36e5eb9ba5bfe8b835f1a609951d2a368a7c941
        </div>
      </div>
    );
  }
};

export default CustomerField;
