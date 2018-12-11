import React, { Component } from "react";
import { onClick_Acc } from './accordiancontrol/AccordianClick';

class AccordianPanel extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="panel panel-default">
        <div className={"panel-heading " + this.props.custmClass + (this.props.active ? " active" : " ")}>
          <h4 className="panel-title">
            <a
              className={this.props.active ? "" : "collapsed"}
              data-toggle="collapse"
              data-parent={"#" + this.props.parent}
              href={"#" + this.props.AccId}
              onClick={(e) => onClick_Acc(e)}
            >
              {this.props.title}
            </a>
          </h4>
        </div>
        <div
          id={this.props.AccId}
          className={"panel-collapse collapse " + (
            this.props.active
              ? " in"
              : ""
          )
          }
        >
          <div className="panel-body">{this.props.func}</div>
        </div>
      </div>
    );
  }
}

export default AccordianPanel;