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
        console.log(value);
        //fetch(`https://swapi.co/api/people/?search=${value}`)
        
       this.postData('/api/searchcustomer',{search: value})
            .then(response => {
                console.log(response)
                if (response)
                  response}
            )
            .then(data => this.setState({ suggestions: data.results }))
    }

    postData(url = ``, data = {}) {
        // Default options are marked with *
          return fetch(url, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, cors, *same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "same-origin", // include, same-origin, *omit
              headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  // "Content-Type": "application/x-www-form-urlencoded",
              },
              redirect: "follow", // manual, *follow, error
              referrer: "no-referrer", // no-referrer, *client
              body: JSON.stringify(data), // body data type must match "Content-Type" header
          })
          .then(response => response.json()); // parses response to JSON
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