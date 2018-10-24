import React from "react";

const AvaloninfoFields = ({ input, label, type, meta: { touched, error } }) => {
  // console.log(meta);
  return (
    <div className="form-group">
    <label className="control-label col-sm-3">{label}</label>
    <div className="col-sm-9 ">
      <textarea
        {...input}
        className="form-control"
        type={type}
      />
      <div className="red-text" >
        {/* {touched && error} */}
      </div>
    </div>
  </div>
  );
};

export default AvaloninfoFields;
