import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../../actions';
import { Link } from 'react-router-dom';

import CustomerDetails from './CustomerDetails';

import ReactTable from "react-table";
import matchSorter from 'match-sorter'
import 'react-table/react-table.css'


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
                        {/* <p className="card-title">{customer.jewelsoftId}</p> */}
                        <p className="card-title">{customer.Name}</p>
                    </div>
                        <div className="col-sm-4 card-link">
                            <Link className="alink" to={'/customers/' + customer._id}>Go To Details</Link>
                        </div>
                    </div>
                    {/* }} */}
                </div>
            )
        })
    }

    
    render() {
        return (

            <ReactTable
            data={this.props.customers}
                        filterable
                        defaultFilterMethod={(filter, row) =>
                            String(row[filter.id]) === filter.value}
                        columns={[
                            {
                                Header: "Avalon Customer List",
                                columns: [
                                    {
                                        Header: "Customer Name",
                                        id: "Name",
                                        className: 'text-left',
                                        accessor: d => d.Name,
                                        filterMethod: (filter, rows) =>
                                            matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["Name"] }),
                                        filterAll: true
                                    },
                                    {
                                        Header: "Jewelsoft Id",
                                        id: "jewelsoftId",
                                        className: 'text-center',
                                        accessor: d => d.jewelsoftId,
                                        filterMethod: (filter, rows) =>
                                            matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["jewelsoftId"] }),
                                        filterAll: true
                                    },
                                    
                                    {
                                        Header: "Website",
                                        id: "websiteUrl",
                                        className: 'text-center',
                                        accessor: "websiteUrl",
                                        Cell : row => (
                                                <Link className="alink" to={'/' + row.value}>{row.value}</Link>
                                        ),
                                        filterMethod: (filter, rows) =>
                                            matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["websiteUrl"] }),
                                        filterAll: true
                                    },
                                    {
                                        Header: "View",
                                        id: "view",
                                        className: 'text-center',
                                        accessor: "_id",
                                        Cell : row => (
                                            <div className="card-link">
                                                <Link className="alink" to={'/customers/' + row.value}>Go To Details</Link>
                                            </div>
                                        ),
                                        filterable: false,
                                    }
                                ]
                            }
                        ]}
                        defaultPageSize={20}
                        className="-striped -highlight table table_list"
            />
            // <div className="container marginTop30 list-group">
            //     <h3 className="text-center">Avalon Customer's</h3>
            //     {this.renderDashboard()}
            // </div>
        );
    }
}

function mapStateToProps(state) {
    // console.clear();
    // console.log(state);
    return {
        customers: state.customers
    };
}

export default connect(
    mapStateToProps,
    { fetchCustomers }
)(Dashboard);
