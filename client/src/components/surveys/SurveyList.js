import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys} from '../../actions';

class SurveyList extends Component{
 
    componentDidMount(){
        this.props.fetchSurveys();
    }   
   
    renderSurveyList(){
        if(!this.props.surveys)      
          return;

        return this.props.surveys.map(survey=>{
            return (
            <div key={survey._id} class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{survey.title}</span>
              <p>{survey.body}</p>
            </div>
            <div class="card-action">
              <p>Yes votes: {survey.yes}</p>
              <p>No votes: {survey.no}</p>
              <p>Survey Date: {new Date(survey.dateSend).toLocaleDateString()}</p>
            </div>
          </div>
            )

        })
    } 
    render(){
        return (
            <div>
                {this.renderSurveyList()}
            </div>
        )
    }
}

function mapStateToProps({surveys}){
   return { surveys }
}

export default connect(mapStateToProps, {fetchSurveys}) (SurveyList);