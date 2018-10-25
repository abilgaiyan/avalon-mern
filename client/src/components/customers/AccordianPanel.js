import React, { Component } from "react";

class AccordianPanel extends Component {
    render() {
      return (
        <div className="panel panel-default new">
          <div
            className={
              this.props.active === "True"
                ? "panel-heading active " + this.props.custmClass
                : "panel-heading " + this.props.custmClass
            }
          >
            <h4 className="panel-title">
              <a
                className={this.props.active === "True" ? "" : "collapsed"}
                data-toggle="collapse"
                data-parent={"#" + this.props.parent}
                href={"#" + this.props.AccId}
              >
                {this.props.title}
              </a>
            </h4>
          </div>
          <div
            id={this.props.AccId}
            className={
              this.props.active === "True"
                ? "panel-collapse collapse in"
                : "panel-collapse collapse"
            }
          >
            <div className="panel-body">{this.props.func}</div>
          </div>
        </div>
      );
    }
  }

  export default AccordianPanel;