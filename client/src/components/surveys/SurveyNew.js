import React , { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    state = {showFormReview: false};

    renderContents(){
        if (this.state.showFormReview){
            return (<SurveyFormReview onCancel = {()=> this.setState({showFormReview: false})} />)
        }
        
        return (<SurveyForm  onSurveySubmit = {()=> this.setState({showFormReview: true })} />) 

    }

    render(){
        return (
            <div>
                {this.renderContents()}
            </div>
        );
    }
}

export default SurveyNew;