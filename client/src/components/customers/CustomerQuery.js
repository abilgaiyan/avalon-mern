import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuery } from '../../actions';
import QueryPopup from './QueryPopup'

class CustomerQuery extends Component {

    componentWillMount() {

        const customerId = this.props.customerId;
        this.props.fetchQuery(customerId);

    }

    renderCustomerQuery() {
        if (!this.props.query)
            return;

        //   console.log('this.props.customer')
        //   console.log(this.props.customer)
        //   console.log('this.props.customer')
        //console.log(this.props.fetchCustomers())
        const { query } = this.props

        return (
            // <div key={customer._id} class="card blue-grey darken-1">
            <div className="col-sm-12 card-content white-text">

                <div className="form-horizontal">
                    {/* <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">sub:</label>
                        <div className="col-sm-10">
                            <label className="control-label" htmlFor="email">{email.subject}</label>
                        </div>
                    </div> */}
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Message:</label>
                        <div className="col-sm-10">
                            <label className="control-label" htmlFor="email">{query.message}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" data-toggle="modal" className="btn btn-success" data-target="#querypopup" >Add </button>
                            <QueryPopup customerId={this.props.customerId} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderCustomerQuery()}

            </div>
        )
    }
}

function mapStateToProps({ query }) {
    // console.clear();
    // console.log({customer});
    return { query }
}

export default connect(mapStateToProps, { fetchQuery })(CustomerQuery);