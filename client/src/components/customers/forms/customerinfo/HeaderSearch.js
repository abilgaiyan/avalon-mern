import React, { Component } from "react";
class HeaderSearch extends Component {
  render() {
    return (
      <div className="container marginBottom40">
        <div className="content-heading clearfix ">
          <nav className="navbar navbar-default navbar-fixed-top ">
            <div className="container-fluid">
              <div className="navbar-header col-sm-4">
                <a className="navbar-brand" href="#">
                  Welcome Ajay Jha
                </a>
              </div>
              <div className="col-sm-4">
                <form
                  className="navbar-form navbar-left"
                  action="/action_page.php"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      name="search"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-4 text-right">
                <button className="btn btn-success navbar-btn">
                  ADD NEW CUSTOMER
                </button>
                <ul className="nav navbar-nav navbar-right user_wraper">
                  <li>
                    <a href="#" className="user_item">
                      <span className="glyphicon glyphicon-user" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

// function mapStateToProps({ customerForm }) {
//   return { customerForm };
// }

export default HeaderSearch;
// connect()(SideNav);
//   mapStateToProps,
//   { fetchCustomerInfo }
