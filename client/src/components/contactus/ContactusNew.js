import React , { Component } from 'react';
import ContactusForm from './ContactusForm';
import ContactusFormReview from './ContactusFormReview';


class ContactusNew extends Component {

    state = {showFormReview: false};

    renderContents(){
        if (this.state.showFormReview){
            return (<ContactusFormReview onCancel = {()=> this.setState({showFormReview: false})} />)
        }
        
        return (<ContactusForm  onContactusSubmit = {()=> this.setState({showFormReview: true })} />) 

    }

    render(){
        return (
            <div className="container marginBottom40">
                {this.renderContents()}
            </div>
        );
    }
}

export default ContactusNew;