import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories} from '../../actions';

class SurveyList extends Component{
 
    componentDidMount(){
        this.props.fetchStories();
    }   
   
    renderSurveyList(){
        if(!this.props.stories)      
          return;

        return this.props.surveys.map(story=>{
            return (
            <div key={story._id} class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{story.heading}</span>
              <p>{story.description}</p>
            </div>
            <div class="card-action">
              {/* <p>Story Date: {new Date(story.dateSend).toLocaleDateString()}</p> */}
            </div>
          </div>
            )

        })
    } 
    render(){
        return (
            <div>
                {this.renderStoryList()}
            </div>
        )
    }
}

function mapStateToProps({stories}){
   return { stories }
}

export default connect(mapStateToProps, {fetchStories}) (StoryList);