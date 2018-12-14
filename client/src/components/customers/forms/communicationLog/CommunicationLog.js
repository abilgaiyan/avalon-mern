import React, { Component } from "react";
import { connect } from "react-redux";
import EmailPopUp from "../emaillog/emailPopUp";
import CallLogPopUp from "../CallLogInfo/callLogPopUp";
import CallLogInfoForm from "../CallLogInfo/CallLogInfoForm";
import QueryForm from "../supportquery/queryForm";
import SupportQueryPopup from "../supportquery/supportqueryPopup";
import * as actions from "../../../../actions";
import moment from 'moment';
//import EmailForm from "./EmailForm";

import ReactTable from "react-table";
import matchSorter from 'match-sorter'
import 'react-table/react-table.css'

class CommunicationLog extends Component {
    constructor() {
        super()
        this.state = {
            search: '', selectsearch: 'all'
        }

    }
    render() {
        if (!this.props.communicationLog) {
            // console.clear();
            // console.log(this.props.productPlanDropdown[0].planName);
            return (<div>Loading...</div>)
        }
        else {
            let data = this.props.communicationLog
            if (this.state.search) {
                data = data.filter(row => {
                    let datefield = moment(row.emaildate || row.previousCallDate).format('MMM DD YYYY');
                    // alert(datefield)
                    return String(datefield).toLowerCase().includes((this.state.search).toLowerCase().trim()) || String(row.subject).toLowerCase().includes((this.state.search).toLowerCase().trim()) || String(row.summary).toLowerCase().includes((this.state.search).toLowerCase().trim()) || String(row.qrysubject).toLowerCase().includes((this.state.search).toLowerCase().trim())
                })
            }
            if (this.state.selectsearch !== 'all') {
                data = data.filter(row => {
                    return String(row.ctype).includes(this.state.selectsearch);
                });
            }
            else {
                data = data.filter(row => {
                    return true;
                });
            }

            return (
                <div>
                    <div className="row">
                        <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-4 table_search">
                            {/* <label className="control-label">
                        Serach
                        </label>  */}
                            <div className="inner-addon right-addon">
                                <i className="glyphicon glyphicon-search"></i>
                                <input type="text" className="form-control" placeholder="Search" value={this.state.search} onChange={e => this.setState({ search: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-4 table_search">
                            <select className="form-control"
                                onChange={e => this.setState({ selectsearch: e.target.value })}
                                style={{ width: "100%" }}>
                                <option value="all">Show All</option>
                                <option value="email">Email</option>
                                <option value="call">Call</option>
                                <option value="comment">Comment</option>
                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 icon_well text-right" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#callLogModal" title="Add Phone">
                                <span className="fa-stack icon_plus">
                                    <i className="fas fa-phone fa-stack-1x icon_plus_out fa-flip-horizontal"></i>
                                    <i className="fas fa-plus fa-stack-1x icon_plus_in"></i>
                                </span>
                            </button>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#queryLogModal" title="Add Comment">
                                <span className="fa-stack icon_plus">
                                    <i className="fas fa-comment fa-stack-2x fa-inverse"></i>
                                    <i className="fas fa-plus fa-stack-1x"></i>
                                </span>
                            </button>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <ReactTable
                        data={data}
                        noDataText="No Data found"
                        filterable={false}
                        defaultFilterMethod={(filter, row) =>
                            String(row[filter.id]) === filter.value}
                        columns={[
                            {
                                Header: "Communication Log",
                                columns: [
                                    {
                                        Header: "Date",
                                        id: "emaildate",
                                        className: 'text-center',
                                        accessor: d => moment(d.emaildate || d.previousCallDate).format('MMM DD YYYY'),
                                        filterMethod: (filter, rows) =>
                                            matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.STARTS_WITH, keys: ["emaildate"] || ["previousCallDate"] }),
                                        filterable: false,
                                    },

                                    {
                                        Header: "Subject",
                                        id: "subject",
                                        className: 'text-center',
                                        accessor: d => d.subject || d.summary || d.qrysubject,
                                        filterMethod: (filter, rows) =>
                                            matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.STARTS_WITH, keys: ["subject"] || ["summary"] || ["qrysubject"] }),
                                        filterable: false,
                                    },
                                    //{
                                    //    Header: "Text",
                                    //    id: "text",
                                    //    className: 'text-center',
                                    //    accessor: d => d.text || d.topic || d.qrytext,
                                    //    filterMethod: (filter, rows) =>
                                    //        matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.STARTS_WITH, keys: ["text"] || ["topic"] || ["qrytext"] }),
                                    //    filterAll: true
                                    //},
                                    {
                                        Header: "In/Out",
                                        id: "type",
                                        filterable: false,
                                        className: 'text-center',
                                        accessor: d => (d.ctype !== "comment") ? (d.type || d._previousCallType._previouscalltype === ("Incoming" || "In") ? <i className="fa fa-sign-in" aria-hidden="true" title="Incoming"></i> : <i className="fa fa-sign-out" aria-hidden="true" title="Outgoing"></i>) : <i className="fa fa-sign-out" aria-hidden="true" title="Outgoing"></i>,
                                        sortable: false,
                                    },
                                    {
                                        Header: "View",
                                        accessor: "ctype",
                                        id: "view",
                                        className: 'text-center view_icon',
                                        //accessor: d => d.emaildate
                                        //accessor: d => d.ctype === "email" ? <i className="fa fa-envelope" aria-hidden="true"></i> : <i className="fa fa-phone" aria-hidden="true"></i>,
                                        // Cell: row => (
                                        //     // <div dangerouslySetInnerHTML={{ __html: row.original.html }} />
                                        //     <div>view</div>
                                        // )
                                        Cell: row => (row.value === "comment") ? <a data-toggle="modal" data-target="#commentPopupModal" onClick={() => this.props.SelectComment(row.original)} title="View Comment" style={{ cursor: 'pointer' }}><i className="fa fa-comments" aria-hidden="true"></i></a> : (row.value === "email" ? <a data-toggle="modal" data-target="#emailLogModal" onClick={() => this.props.SelectEmail(row.original)} title="View Email" style={{ cursor: 'pointer' }}><i className="fa fa-envelope" aria-hidden="true"></i></a> : <a data-toggle="modal" data-target="#callLogPopupModal" onClick={() => this.props.SelectCallLog(row.original)} title="View Phone" style={{ cursor: 'pointer' }}><i className="fa fa-phone" aria-hidden="true"></i></a>),
                                        sortable: false,
                                        // filterMethod: (filter, row) => {
                                        //     if (filter.value === "all") {
                                        //         return true;
                                        //     }
                                        //     if (filter.value === "email") {
                                        //         return row[filter.id] === "email";
                                        //     }
                                        //     else if (filter.value === "comment") {
                                        //         return row[filter.id] === "comment";
                                        //     }
                                        //     return row[filter.id] === "call";
                                        // },
                                        // Filter: ({ filter, onChange }) =>
                                        //     <select
                                        //         onChange={event => onChange(event.target.value)}
                                        //         style={{ width: "100%" }}
                                        //         value={filter ? filter.value : "all"}
                                        //     >
                                        //         <option value="all">Show All</option>
                                        //         <option value="email">Email</option>
                                        //         <option value="call">Call</option>
                                        //         <option value="comment">Comment</option>
                                        //     </select>
                                    }
                                ]
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight table table_list"
                        minRows={1}
                    />
                    <CallLogInfoForm />
                    <CallLogPopUp />
                    <EmailPopUp />
                    <QueryForm />
                    <SupportQueryPopup />
                </div>
            );
        }

    }
}



function mapStateToProps(state) {
    // console.clear();
    // console.log(state.communicationLog);
    return {
        communicationLog: state.communicationLog,
    };
}

export default connect(
    mapStateToProps,
    actions
)(CommunicationLog);
