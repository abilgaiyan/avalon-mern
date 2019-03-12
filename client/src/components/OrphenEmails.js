import React, { Component } from "react";
import { connect } from "react-redux";
//import EmailPopUp from "./emailPopUp";
import * as actions from "../actions";
import moment from 'moment';
//import EmailForm from "./EmailForm";
import ReactTable from "react-table";
import matchSorter from 'match-sorter'
import 'react-table/react-table.css'
import EmailPopup from "./customers/EmailPopup"

class OrphenEmailLogList extends Component {

    // createListItem() {
    //   return this.props.email.map((list) => {
    //     return (
    //       <tr key={list._id} onClick={() => this.props.SelectEmail(list)}  >
    //         <td>{moment(list.emaildate).format('MMM DD YYYY')}</td>
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
            return ''
            // (
            //     <div>
            //         Loading...
            //     </div>
            // )
        }
        // console.log("orphanEmails", data[0].)
        // if (!data.from) {
        // }
        else {
            return (
                <span className="orphen_wraper">
                    <button className="navbar-btn hidden-xs hidden-sm text_btn" data-toggle="modal" data-target="#orphenemailsModal">ORPHAN EMAILS</button>
                    <div className="modal " id="orphenemailsModal" tabIndex="-1" role="dialog" aria-hidden="true" aria-labelledby="orphenemailsModal" data-backdrop="false" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog modal-lg">


                            <div className="modal-content">
                                <div className="modal-header text-left">
                                    <button type="button" className="close" data-dismiss="modal" >&times;</button>
                                    <h4 className="modal-title">ORPHAN EMAILS</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="clearfix"></div>
                                    <div className="row">

                                        <ReactTable
                                            data={data}
                                            noDataText="No Data found"
                                            columns={[
                                                {
                                                    Header: "Email Log",
                                                    columns: [

                                                        {
                                                            Header: "Email Date",
                                                            id: "emaildate",
                                                            className: 'text-center',
                                                            //accessor: d => d.emaildate
                                                            accessor: d => moment(d.emaildate || d.previousCallDate).format('MMM DD YYYY'),
                                                            filterMethod: (filter, rows) =>
                                                                matchSorter(rows, filter.value.trim(), { threshold: matchSorter.rankings.STARTS_WITH, keys: ["emaildate"] || ["previousCallDate"] }),
                                                            filterAll: true,
                                                            maxWidth: 120,
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
                                                            accessor: d => d.type,
                                                            maxWidth: 80,
                                                        },
                                                        {
                                                            Header: "View",
                                                            id: "view",
                                                            className: 'text-left',
                                                            accessor: "_id",
                                                            Cell: row => (
                                                                <div className="card-link">
                                                                    <a className="alink" data-toggle="modal" data-dismiss="modal" data-target="#orphanEmail"><i className="fa fa-search-plus" aria-hidden="true"></i></a>
                                                                </div>
                                                            ),
                                                            maxWidth: 60,
                                                            filterable: false,
                                                            sortable: false
                                                        }
                                                    ]
                                                }
                                            ]}
                                            defaultPageSize={10}
                                            minRows={1}
                                            style={{
                                                maxHeight: "550px" // This will force the table body to overflow and scroll, since there is not enough room
                                            }}
                                            className="-striped -highlight table table_list without_border text-left"
                                            
                                        />

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                    <EmailPopup />
                </span>
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
