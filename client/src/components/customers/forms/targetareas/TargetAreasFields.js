import React from "react";

const TargetAreasFields = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => {
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ margin: "5px" }} type={type} />
    </div>
  );
};

export default TargetAreasFields;
