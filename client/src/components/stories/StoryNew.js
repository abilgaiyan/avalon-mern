import React , { Component } from 'react';
import StoryForm from './StoryForm';
import StoryFormReview from './StoryFormReview';

class StoryNew extends Component {

    state = {showFormReview: false};

    renderContents(){
        if (this.state.showFormReview){
            return (<StoryFormReview onCancel = {()=> this.setState({showFormReview: false})} />)
        }
        
        return (<StoryForm  onStorySubmit = {()=> this.setState({showFormReview: true })} />) 

    }

    render(){
        return (
            <div>
                {this.renderContents()}
            </div>
        );
    }
}

export default StoryNew;