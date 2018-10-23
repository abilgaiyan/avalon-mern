import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Autosuggest from "react-autosuggest";
import ReactAutocomplete from "react-autocomplete";
import { withRouter } from "react-router-dom";

class Search extends Component {

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
                shouldItemRender={(item, value) => item.customerName.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.customerName}
                renderItem={(item, highlighted) =>
                    <div
                        key={item._id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                    >
                        {item.customerName}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                //onSelect={value => this.setState({ value })}
                //onSelect={(item, value) => window.location.assign("/customers/" + value._id)}
                onSelect={(item, value) => this.props.history.push('/customers/' + value._id)}
            />
        )
    }
}




function mapStateToProps(state) {
    // console.clear();
    // console.log(state.customers);
    return {
        allCustomers: state.customers
    };
}

export default connect(mapStateToProps)(withRouter(Search))