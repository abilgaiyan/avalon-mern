import React from "react";

const AvaloninfoFields = ({ input, label, type, meta: { touched, error } }) => {
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ margin: "5px" }} type={type} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default AvaloninfoFields;
