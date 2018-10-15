import React from "react";

const AvaloninfoDropdown = ({
  input,
  label,
  optionData,
  meta: { touched, error }
}) => {
  console.log(optionData);

  let planets = optionData;
  console.log("planet |-" + planets);
  let optionItems = planets.map((planet, index) => (
    <option key={index}>{planet}</option>
  ));

  return (
    <div>
      <label>{label}</label>
      <select>{optionItems}</select>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default AvaloninfoDropdown;
