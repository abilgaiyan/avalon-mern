import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <TableRow targetareadata={this.props.TargetAreaData} />
      </table>
    );
  }
}

export default Table;
