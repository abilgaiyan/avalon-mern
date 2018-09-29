import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhonecall } from '../../actions';
import PhonePopup from "./PhonePopup"

class PhoneCall extends Component {

    componentWillMount() {

        const customerId = this.props.customerId;
        this.props.fetchPhonecall(customerId);

    }

    renderPhonecall() {
        if (!this.props.phonecall)
            return;

        //   console.log('this.props.customer')
        //   console.log(this.props.customer)
        //   console.log('this.props.customer')
        //console.log(this.props.fetchCustomers())
        const { phonecall } = this.props

        return (
            // <div key={customer._id} class="card blue-grey darken-1">
            // <div className="container card-content white-text">

            //   <p>Call Message :{phonecall.message}</p>
            //   <p>Call DateTime :{phonecall.createDate}</p>

            //   <button type="submit" >Add </button>
            // </div>
            //   </div>
            <div className="container ">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Call Message:</label>
                        <div className="col-sm-10">
                            <label className="control-label" htmlFor="email">{phonecall.message}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Call DateTime:</label>
                        <div className="col-sm-10">
                            <label className="control-label" htmlFor="email">{phonecall.createDate}</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            {/* <button type="submit" class="btn btn-default">Submit</button> */}
                            <button type="submit" data-toggle="modal" className="btn btn-success">Add </button>

                        </div>
                    </div>

                </form>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderPhonecall()}
            </div>
        )
    }
}

function mapStateToProps({ phonecall }) {
    // console.clear();
    // console.log({customer});
    return { phonecall }
}

export default connect(mapStateToProps, { fetchPhonecall })(PhoneCall);