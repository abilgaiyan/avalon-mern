import React from "react";

const SummaryFields = ({ input, label, type, meta: { touched, error } }) => {
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
    </div>
  );
};

export default SummaryFields;
