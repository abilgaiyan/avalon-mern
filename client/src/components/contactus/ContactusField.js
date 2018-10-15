import React from "react";

const ContactusFields = ({ input, label, meta: { touched, error } }) => {
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ margin: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default ContactusFields;
