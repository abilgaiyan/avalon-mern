import React, { Component } from "react";
import { Link } from "react-router-dom";
import RenderCustomerStories from "./RenderCustomerStories";

class CustomerStories extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid wow fadeInUp marginTop70 marginBottom40">
          <div className="col-sm-5 col-xs-12 youleft">
            <h3>Generating Results for Early Adopters</h3>
            <h1>
              Getting personal with your <br /> customer
            </h1>
          </div>
          <div className="col-sm-7 col-xs-12 youright Agency">
            <p>
              Our customers are able to leverage the customer data and insights,
              by playing it back in a engaging manner that traditional
              communications never could.
            </p>
            <p>
              Our applicability is across Healthcare, Education, Retail,
              Financial Services and other industries.
            </p>
            <p>
              Our stories are pervasive across Event invitations, Lead
              conversion, Campaign Launches, Cross selling, Statements and
              Explainers
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div className="tt-title">
                {/* <div className="tt-title-count wow fadeInUp">Title</div>
                            <h3 className="tt-title-name wow fadeInUp">small text</h3> */}
                <div className="tt-title-text wow fadeInUp">
                  Our clients are our best assets, the greatest pride! <br />
                  Hear what our customers have to say.
                </div>
              </div>
            </div>
          </div>
        </div>

        <RenderCustomerStories />

        <div className="col-sm-12 text-center marginTop10 marginBottom20 footerarrow">
          <p>Like what you see? Check these out and ask for one</p>
          <div className="arrow bounce marginTop20">
            <Link to="/customerstories1">
              {" "}
              <i className="fa fa-angle-double-down fa-3x" />
            </Link>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

export default CustomerStories;
