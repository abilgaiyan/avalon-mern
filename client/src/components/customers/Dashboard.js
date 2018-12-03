import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../../actions';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import 'react-table/react-table.css'

export let customerlistSearch = function (search) {
    this.setState({ search });
}
class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
        customerlistSearch = customerlistSearch.bind(this)
    }

    componentDidMount() {
        this.props.fetchCustomers();
    }

    render() {
        let data = this.props.customers
        if (this.state.search) {
            data = data.filter(row => {
                // console.log(row.Name.toLowerCase().includes((this.state.search).trim()))
                return row.Name.toLowerCase().includes((this.state.search).trim()) || String(row.jewelsoftId).toLowerCase().includes((this.state.search).trim()) || String(row.avalonId).toLowerCase().includes((this.state.search).trim()) || String(row.city).toLowerCase().includes((this.state.search).trim()) || String(row.state).toLowerCase().includes((this.state.search).trim()) || String(row.websiteUrl).toLowerCase().includes((this.state.search).trim())
            })
        }
        return (
            <div>
                <div className="col-xs-12 text-center table_heading">
                    <h3>Avalon Customer List</h3>
                </div>
                {/* <div className="form-group col-xs-12 col-sm-4 table_search">
                    <label class="control-label">
                    Serach
                    </label> 
                    <div className="inner-addon right-addon">
                    <i className="glyphicon glyphicon-search"></i>
                    <input type="text" className="form-control" placeholder="Search" value={this.state.search} onChange={e => this.setState({search: e.target.value})}/>
                    </div>
                </div> */}
                {/* Search: <input value={this.state.search} onChange={e => this.setState({search: e.target.value})}/> */}
                <ReactTable
                    data={data}
                    //filterable
                    //defaultFilterMethod={(filter, row) =>
                    //    String(row[filter.id]) === filter.value} 
                    columns={[
                        {
                            //Header: "Avalon Customer List",
                            columns: [
                                {
                                    Header: "Customer Name",
                                    id: "Name",
                                    className: 'text-left',
                                    accessor: "Name",
                                    Cell: row => (
                                        <div><i className="fas fa-store" style={{
                                            color: '#272524', marginRight: '10px', fontSize: '17px'
                                        }}></i>  {row.value.toLowerCase()}</div>
                                    ),
                                    //accessor: d => (d.Name).toLowerCase(),
                                    //filterMethod: (filter, rows) =>
                                    //    matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["Name"] }),
                                    //filterAll: true
                                    width: 400,
                                    maxWidth: 400,
                                },
                                {
                                    Header: "Jewelsoft Id",
                                    id: "jewelsoftId",
                                    className: 'text-center',
                                    accessor: d => String(d.jewelsoftId).toLowerCase(),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["jewelsoftId"] }),
                                    filterAll: true
                                },
                                {
                                    Header: "Avalon Id",
                                    id: "avalonId",
                                    className: 'text-center',
                                    accessor: d => String(d.avalonId).toLowerCase(),
                                    //filterMethod: (filter, rows) =>
                                    //    matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["avalonId"] }),
                                    //filterAll: true

                                },
                                {
                                    Header: "City",
                                    id: "city",
                                    className: 'text-center',
                                    accessor: d => String(d.city).toLowerCase(),
                                    // filterMethod: (filter, rows) =>
                                    //       matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["city"] }),
                                    // filterAll: true

                                },
                                {
                                    Header: "State",
                                    id: "state",
                                    className: 'text-center',
                                    accessor: d => String(d.state).toLowerCase(),
                                    //filterMethod: (filter, rows) =>
                                    //                matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["state"] }),
                                    //            filterAll: true

                                },

                                {
                                    Header: "Website",
                                    id: "websiteUrl",
                                    className: 'text-center',
                                    accessor: "websiteUrl",
                                    Cell: row => (
                                        <Link className="alink" to={'/' + row.value}>{String(row.value).toLowerCase()}</Link>
                                    ),
                                    //filterMethod: (filter, rows) =>
                                    //                matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["websiteUrl"] }),
                                    //            filterAll: true
                                },
                                {
                                    Header: "View",
                                    id: "view",
                                    className: 'text-center',
                                    accessor: "_id",
                                    Cell: row => (
                                        <div className="card-link">
                                            <Link className="alink" to={'/customers/' + row.value}><i className="fa fa-search-plus" aria-hidden="true"></i></Link>
                                        </div>
                                    ),
                                    width: 100,
                                    maxWidth: 100,
                                    filterable: false,
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    showPaginationTop
                    className="-striped -highlight table table_list without_border"
                />
                {/* <div className="container marginTop30 list-group">
               <h3 className="text-center">Avalon Customer's</h3>
                {this.renderDashboard()}
            </div> */}

            </div>
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
