import React from "react";

const PhoneField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {touched && error}
    </div>
  );
};

export default PhoneField;
