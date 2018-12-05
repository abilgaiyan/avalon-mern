import React, { Component } from "react";
import { connect } from "react-redux";
//import EmailPopUp from "./emailPopUp";
import * as actions from "../actions";
import moment from 'moment';
//import EmailForm from "./EmailForm";
import ReactTable from "react-table";
import matchSorter from 'match-sorter'
import 'react-table/react-table.css'

class OrphenEmailLogList extends Component {

    // createListItem() {
    //   return this.props.email.map((list) => {
    //     return (
    //       <tr key={list._id} onClick={() => this.props.SelectEmail(list)}  >
    //         <td>{moment(list.emaildate).format('DD MMM YYYY')}</td>
    //         <td>{list.type === "In" ? <i className="fa fa-sign-in" aria-hidden="true"></i> : <i className="fa fa-sign-out" aria-hidden="true"></i>}</td>
    //         <td>{list.subject}</td>
    //         {/* <td>{list.text.length > 50 ? list.text.slice(1, 50) + "...." : list.text}</td> */}
    //         <td><a data-toggle="modal" data-target="#emailLogModal"><i className="fa fa-search"></i></a></td>
    //       </tr>
    //     )
    //   })
    // }

    render() {
        let data = this.props.orphenEmailsLog;

        if (!data) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        // console.log("orphanEmails", data[0].)
        // if (!data.from) {
        // }
        else {
            return (

                <div className="modal fade" id="orphenemailsModal" role="dialog" tabIndex="1" data-backdrop="false" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-lg">


                        <div className="modal-content">
                            <div className="modal-header text-left">
                                <button type="button" className="close" data-dismiss="modal" >&times;</button>
                                <h4 className="modal-title">Add Customer</h4>
                            </div>
                            <div className="modal-body">
                                <div className="clearfix"></div>
                                <div className="row">

                                    <ReactTable
                                        data={data}
                                        columns={[
                                            {
                                                Header: "Email Log",
                                                columns: [

                                                    {
                                                        Header: "Email Date",
                                                        id: "emaildate",
                                                        className: 'text-center',
                                                        //accessor: d => d.emaildate
                                                        accessor: d => moment(d.emaildate || d.previousCallDate).format('DD MMM YYYY'),
                                                        filterMethod: (filter, rows) =>
                                                            matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.STARTS_WITH, keys: ["emaildate"] || ["previousCallDate"] }),
                                                        filterAll: true
                                                    },
                                                    {
                                                        Header: "Subject",
                                                        className: 'text-center',
                                                        accessor: "subject"
                                                    },
                                                    // {
                                                    //     Header: "Text",
                                                    //     id: "text",
                                                    //     accessor: d => d.text
                                                    // },
                                                    // {
                                                    //     Header: "From",
                                                    //     id: "from",
                                                    //     accessor: d => d.from
                                                    // },
                                                    // {
                                                    //     Header: "To",
                                                    //     id: "to",
                                                    //     accessor: d => d.to
                                                    // },
                                                    {
                                                        Header: "Type",
                                                        id: "type",
                                                        className: 'text-center',
                                                        accessor: d => d.type
                                                    }
                                                ]
                                            }
                                        ]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />

                                </div>


                            </div>

                        </div>

                    </div>
                </div>


            );
        }
    }
}



function mapStateToProps(state) {
    // console.clear();
    // console.log("state :", state.orphenEmails);
    return {
        orphenEmailsLog: state.orphenEmails,
    };
}

export default connect(
    mapStateToProps,
    actions
)(OrphenEmailLogList);
