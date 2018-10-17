import React from "react";
import { connect } from "react-redux";

class TableRow extends React.Component {
  render() {
    const TargetAreasData = this.props.targetareadata;
    console.log("cccc", this.props);
    const row = TargetAreasData.map(data => (
      <tr>
        <td key={data.name}>{data.name}</td>
        <td key={data.id}>{data.id}</td>
        <td key={data.price}>{data.price}</td>
      </tr>
    ));
    return <span>{row}</span>;
  }
}

// function mapStateToProps(state) {
//   //console.log(state.form.contactusForm.values);
//   return { data: state.targetAreas };
// }

export default TableRow;
