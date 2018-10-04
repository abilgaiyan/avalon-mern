import React, { Component } from 'react';
import EmailForm from './EmailForm';
import EmailFormReview from './EmailFormReview';


class Email extends Component {

    state = { showFormReview: false };

    renderContents() {
        if (this.state.showFormReview) {
            return (<EmailFormReview onCancel={() => this.setState({ showFormReview: false })} />)
        }

        return (<EmailForm onEmailSubmit={() => this.setState({ showFormReview: true })} />)

    }

    render() {
        return (
            <div className="container marginBottom40">
                {this.renderContents()}
            </div>
        );
    }
}

export default Email;