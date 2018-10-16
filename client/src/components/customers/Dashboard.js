import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../../actions';
import CustomerDetails from './CustomerDetails';
import { Link } from 'react-router-dom';


import "./Dashboard.css";

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
        // console.log(this.props.fetchCustomers());
    }



    renderDashboard() {
        if (!this.props.customers)
            return;
        //console.log(this.props.fetchCustomers())

        return this.props.customers.map(customer => {
            return (
                <div key={customer._id} className="row list-group-item">



                    <div className="col-sm-12"> <div className="col-sm-8">
                        <p className="card-title">{customer.jewelsoftId}</p>
                        {customer.customerName}
                    </div>
                        <div className="col-sm-4 card-link">
                            <Link className="alink" to={'customers/' + customer._id}>Go To Details</Link>
                        </div>
                    </div>

                    {/* }} */}

                </div>
            )

        })
    }
    render() {
        return (
            <div class="row">
                <div className="container marginTop30 list-group">
                    <h3 className="text-center">Avalon Customer's</h3>
                    {this.renderDashboard()}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container marginTop30 list-group">
                <h3 className="text-center">Avalon Customer's</h3>
                {this.renderDashboard()}
            </div>
        );
    }
}

function mapStateToProps({ customers }) {
    // console.log({customers})
    return { customers };
}

export default connect(
    mapStateToProps,
    { fetchCustomers }
)(Dashboard);
