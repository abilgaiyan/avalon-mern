import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmail } from '../../actions';
// import EmailPopup from "./EmailPopup";
import EmailForm from "./forms/email/EmailForm";


class Email extends Component {

    componentWillMount() {

        const customerId = this.props.customerId;
        console.log(customerId);
        this.props.fetchEmail(customerId);

    }

    renderEmail() {
        if (!this.props.email)
            return;

        //   console.log('this.props.customer')
        //   console.log(this.props.customer)
        //   console.log('this.props.customer')
        //console.log(this.props.fetchCustomers())
        const { email } = this.props

        return (
            // <div key={customer._id} class="card blue-grey darken-1">
            <div className="container card-content white-text">

                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">sub:</label>
                        <div className="col-sm-10">
                            <label className="control-label" htmlFor="email">{email.subject}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Message:</label>
                        <div className="col-sm-10">
                            <label className="control-label" htmlFor="email">{email.message}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" data-toggle="modal" className="btn btn-success" data-target="#myModal" >Add </button>
                            <EmailForm customerId={this.props.customerId} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    render() {
        return (
            <div>
                {this.renderEmail()}
            </div>
        )
    }
}

function mapStateToProps({ email }) {
    // console.clear();
    // console.log({customer});
    return { email }
}

export default connect(mapStateToProps, { fetchEmail })(Email);