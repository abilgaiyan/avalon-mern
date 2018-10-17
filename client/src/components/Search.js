import React, { Component } from 'react'
import { connect } from 'react-redux';
import Autosuggest from "react-autosuggest";

// Imagine you have a list of languages that you'd like to autosuggest.
const customerData = [
    {
        "_id": "5bac93eb7a23fd633431f2e6",
        "jewelsoftId": "ALEXANDERTX",
        "customerName": "ALEXANDER'S JEWELERS",
        "contactPersonName": "Lara Alexander",
        "address1": "3701 MALL DR",
        "city": "TEXARKANA",
        "state": "TX",
        "telephone": "903-832-3557",
        "websiteUrl": "alexandersjewelers.biz",
        "avalonId": "1",
        "customerDBA": "123",
        "mainContact": "123",
        "position": "1",
        "address2": "123",
        "postalCode": 123,
        "contactpersonEmail": "1",
        "telephone1": 123,
        "telephone2": 123,
        "websiteProvider": "NewProvider",
        "customersince": "2001",
        "customerType": "A",
        "comment": "Test Comment",
        "createDate": "2018-10-04T14:55:17.993Z",
        "updateDate": "2018-10-17T06:45:11.450Z",
        "_salesPerson": null,
        "_avalonInfo": null,
        "_billingInfo": null,
        "_websiteInfo": null,
        "_productInfo": null,
        "_ashimicrowebsiteInfo": null,
        "_domainInfo": null,
        "_sslInfo": null,
        "_businessEmailInfo": null,
        "_emailmarketingAccountInfo": null,
        "_querysupportInfo": null,
        "_targetAreaInfo": null,
        "displayorder": 10,
        "_callLogInfo": null,
        "_buyinggroups": null
    },
    {
        "_id": "5bac93eb7a23fd633431f2e7",
        "jewelsoftId": "AMANS",
        "customerName": "AMAN'S JEWELERS",
        "contactPersonName": "ZUBAIR ULLAH",
        "address1": "5014 CROSSTOWN EXPY",
        "city": "CORPUS CHRISTI",
        "state": "TX",
        "telephone": "361-855-0835",
        "websiteUrl": "AMANSJEWELRY.COM",
        "avalonId": "1",
        "customerDBA": "123",
        "mainContact": "123",
        "position": "1",
        "address2": "123",
        "postalCode": 123,
        "contactpersonEmail": "1",
        "telephone1": 123,
        "telephone2": 123,
        "websiteProvider": "NewProvider",
        "customersince": "2001",
        "customerType": "A",
        "comment": "Test Comment",
        "createDate": "2018-10-04T14:55:17.993Z",
        "updateDate": "2018-10-04T14:55:17.993Z",
        "_salesPerson": null,
        "_avalonInfo": null,
        "_billingInfo": null,
        "_websiteInfo": null,
        "_productInfo": null,
        "_ashimicrowebsiteInfo": null,
        "_domainInfo": null,
        "_sslInfo": null,
        "_businessEmailInfo": null,
        "_emailmarketingAccountInfo": null,
        "_querysupportInfo": null,
        "_targetAreaInfo": null,
        "displayorder": 10,
        "_callLogInfo": null,
        "_buyinggroups": null
    }
];

console.log(customerData)

// const customerData = fetch('/api/customerallinfo')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (myJson) {
//         console.log(myJson);
//     });

// setTimeout(() => { return customerData }, 5000)

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : customerData.filter(lang =>
        lang.customerName.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.customerName;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div>
        {suggestion.customerName}
    </div>
);

class Search extends React.Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type Customer Name',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

function mapStateToProps(state) {
    // console.clear();
    // console.log(state.customers);
    return {
        allCustomers: state.customers
    };
}

export default connect(mapStateToProps)(Search)