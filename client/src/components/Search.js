import React, { Component } from 'react'
import { connect } from 'react-redux';
import Autosuggest from "react-autosuggest";

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
        console.log(newValue)
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        fetch(`https://swapi.co/api/people/?search=${value}`)
            .then(response => response.json())
            .then(data => this.setState({ suggestions: data.results }))
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search",
            value,
            onChange: this.onChange,
            className: "form-control",
            name: "search"
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} />
        );
    }
}

function mapStateToProps(state) {
    console.clear();
    console.log(state.customers);
    return {
        allCustomers: state.customers
    };
}

export default connect(mapStateToProps)(Search)