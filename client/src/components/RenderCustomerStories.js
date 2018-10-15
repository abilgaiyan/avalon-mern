import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";

class RenderCustomerStories extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  renderhtml5video(url, poster) {
    // const videourl =process.env.VIDEO_URL + url;
    // const videourl ='http://18.216.235.248:3000/api/videourl/' + url;
    const videourl = "http://localhost:3000/api/videourl/" + url;
    // console.log(videourl);
    return (
      <Video
        autoPlay={false}
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster={poster}
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={videourl} type="video/webm" />
        {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
      </Video>
    );
  }

  rendercustomerstory(story) {
    const { id, name, heading, desctiption, videourl, posterurl } = story;

    return (
      <div key={id}>
        <div
          className="isotope-item col-xs-6 col-sm-4 wow fadeInUp"
          data-wow-delay="200ms"
        >
          <div className="tt-page">
            <div className="tt-page-testimonial text-center">
              <div className="resp-container1">
                {/* <iframe className="resp-iframe" title="Sukino" autoPlay="false" sandbox="allow-same-origin allow-scripts" ref={(f) => this.ifr = f } src="" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                {this.renderhtml5video(videourl, posterurl)}
              </div>
              <div className="tt-text wow fadeInUp">
                <p>
                  <strong>{heading} </strong>
                </p>
                <p>{desctiption}</p>
              </div>
            </div>
            <div className="tt-page-rating">
              <div className="tt-page-title test-author">{name}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  rendercustomerstories() {
    return (
      <div className="container-fluid">
        <div className="isotope-content">
          <div className="col-sm-12 flex">{this.renderList()}</div>
        </div>
      </div>
    );
  }

  renderList() {
    return _.map(this.props.stories, story => {
      return this.rendercustomerstory(story);
    });
  }
  render() {
    return <div>{this.rendercustomerstories()}</div>;
  }
}

function mapStateToProps({ stories }) {
  return { stories };
}

export default connect(
  mapStateToProps,
  { fetchStories }
)(RenderCustomerStories);
