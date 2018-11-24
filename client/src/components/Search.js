import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Autosuggest from "react-autosuggest";
import ReactAutocomplete from "react-autocomplete";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

class Search extends Component {

    componentWillMount() {
        //const customerId = this.props.match.params.customerId;
        this.props.fetchCustomers();

    }

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <ReactAutocomplete className="form-control"
                items={this.props.allCustomers}
                shouldItemRender={(item, value) => item.Name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.Name}
                renderItem={(item, highlighted) =>
                    <div
                        key={item._id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                    >
                        {item.Name}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                //onSelect={value => this.setState({ value })}
                onSelect={(item, value) => window.location.assign("/customers/" + value._id)}
            // onSelect={(item, value) => {
            //     //this.props.history.push('/customers/' + value._id)
            //     return this.props.fetchAutocomplete_ID(value._id, this.props.history);
            // }}
            />
        )
    }
}




function mapStateToProps(state) {
    // console.clear();
    // console.log(state.customers);
    return {
        allCustomers: state.customers,
        customerForm: state.customerForm,
        autocompleteId: state.autoCompleteId
    };
}

export default connect(mapStateToProps, actions)(withRouter(Search))