import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers, fetchorphenEmail, customerlistSearch } from '../../actions';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';


// export let customerlistSearch = function (search, pathname) {
//     if (String(pathname).split("/").splice(-1) == 'customers') {
//         this.setState({ search });
//     }
// }
class Dashboard extends Component {
    constructor() {
        super()
        // this.state = {
        //     search: ""
        // }
        // customerlistSearch = customerlistSearch.bind(this)
    }

    componentDidMount() {
        this.props.fetchCustomers();
        this.props.fetchorphenEmail();
    }

    render() {
        let data = this.props.customers
        if (this.props.customersearch) {
            data = data.filter(row => {
                // console.log(row.Name.toLowerCase().includes((this.state.search).trim()))
                return row.Name.toLowerCase().startsWith((this.props.customersearch.toLowerCase()).trim())
                //|| String(row.jewelsoftId).toLowerCase().includes((this.state.search).trim()) || String(row.avalonId).toLowerCase().includes((this.state.search).trim()) || String(row.city).toLowerCase().includes((this.state.search).trim()) || String(row.state).toLowerCase().includes((this.state.search).trim()) || String(row.websiteUrl).toLowerCase().includes((this.state.search).trim())
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
                    noDataText="No Data found"
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

                                    maxWidth: 400,
                                },
                                {
                                    Header: "Jewelsoft Id",
                                    id: "jewelsoftId",
                                    className: 'text-left',
                                    accessor: d => String(d.jewelsoftId).toLowerCase() === 'undefined' ? '-' : String(d.jewelsoftId).toLowerCase(),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["jewelsoftId"] }),
                                    filterAll: true,
                                    maxWidth: 200,
                                },
                                {
                                    Header: "Avalon Id",
                                    id: "avalonId",
                                    className: 'text-left',
                                    accessor: d => String(d.avalonId).toLowerCase() === 'undefined' ? '-' : String(d.avalonId).toLowerCase(),
                                    //filterMethod: (filter, rows) =>
                                    //    matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["avalonId"] }),
                                    //filterAll: true
                                    maxWidth: 200,

                                },
                                {
                                    Header: "City",
                                    id: "city",
                                    className: 'text-left',
                                    accessor: d => String(d.city).toLowerCase() === 'undefined' ? '-' : String(d.city).toLowerCase(),
                                    // filterMethod: (filter, rows) =>
                                    //       matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["city"] }),
                                    // filterAll: true
                                    maxWidth: 200,

                                },
                                {
                                    Header: "State",
                                    id: "state",
                                    className: 'text-left',
                                    accessor: d => d.state,
                                    //filterMethod: (filter, rows) =>
                                    //                matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["state"] }),
                                    //            filterAll: true
                                    maxWidth: 200,
                                },

                                {
                                    Header: "Website",
                                    id: "websiteUrl",
                                    className: 'text-left',
                                    accessor: "websiteUrl",
                                    Cell: row => (
                                        String(row.value).toLowerCase() === 'undefined' ? '-' : <Link className="alink" to={"//" + row.value} target="_blank">{String(row.value).toLowerCase()}</Link>
                                    ),
                                    //filterMethod: (filter, rows) =>
                                    //                matchSorter(rows, filter.value.trim(), {threshold: matchSorter.rankings.WORD_STARTS_WITH, keys: ["websiteUrl"] }),
                                    //            filterAll: true 
                                    maxWidth: 400,
                                },
                                {
                                    Header: "View",
                                    id: "view",
                                    className: 'text-left',
                                    accessor: "_id",
                                    Cell: row => (
                                        <div className="card-link">
                                            <Link className="alink" to={'/customers/' + row.value}><i className="fa fa-search-plus" aria-hidden="true"></i></Link>
                                        </div>
                                    ),
                                    width: 100,
                                    maxWidth: 100,
                                    filterable: false,
                                    sortable: false
                                }
                            ]
                        }
                    ]}
                    pageSizeOptions={[25, 50, 100]}
                    defaultPageSize={100}
                    showPaginationTop
                    className="-striped -highlight table table_list without_border text-left"
                    minRows={2}
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
    // console.log(state.customersearch);
    return {
        customers: state.customers,
        customersearch: state.customersearch
    };
}

export default connect(
    mapStateToProps,
    { fetchCustomers, fetchorphenEmail, customerlistSearch }
)(Dashboard);
