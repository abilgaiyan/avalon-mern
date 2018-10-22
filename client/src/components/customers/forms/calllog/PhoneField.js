import React from "react";

const PhoneField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div className="form-group">
        <label className="control-label col-sm-3">{label}</label>
        <div className="col-sm-9 ">
      <input {...input} type={type} className="form-control"/>
      {touched && error}
      </div>
    </div>
  );
};

export default PhoneField;
