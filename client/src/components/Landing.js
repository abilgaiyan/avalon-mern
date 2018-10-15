import React, { Component } from "react";
//import "node_modules/video-react/dist/video-react.css"; // import css
//import '../../node_modules/video-react/dist/video-react.css';
//import { Player } from 'video-react';
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import You from "./You";
import CustomerStories from "./CustomerStories";
import Agencies from "./Agencies";
import Workforus from "./Workforus";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, playing: true };
  }

  // http://18.216.235.248:3000/api/videourl/clara.mp4
  videolist = [
    {
      id: 1,
      name: "Clara",
      videourl: "http://localhost:3000/api/videourl/clara.mp4",
      posterurl: "/poster/Picture1.png"
    },
    {
      id: 2,
      name: "Jane",
      videourl: "http://localhost:3000/api/videourl/Jane.mp4",
      posterurl: "/poster/Picture1.png"
    },
    {
      id: 3,
      name: "Mary",
      videourl: "http://localhost:3000/api/videourl/Mary.mp4",
      posterurl: "/poster/Picture1.png"
    }
    //{id: 4, name: 'clara2', videourl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', posterurl:'/poster/Picture1.png'},
    //{id: 5, name: 'clara3', videourl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' , posterurl:'/poster/Picture1.png'},
  ];

  renderNextVideo = vi => {
    this.setState({ counter: vi, playing: false });
    this.renderVideo();
  };

  playVideo(playing) {
    const vi =
      this.state.counter > this.videolist.length - 1
        ? this.videolist.length - 1
        : this.state.counter;
    return (
      <ReactPlayer
        ref="reactplayerRef"
        className="desktop-wrapper pull-right"
        height={"100%"}
        width={"100%"}
        url={this.videolist[vi].videourl}
        onEnded={() => this.renderNextVideo(this.state.counter + 1)}
        playing={playing}
        fileConfig={{ attributes: { poster: this.videolist[vi].posterurl } }}
      />
    );
  }
  renderVideo = () => {
    const vi =
      this.state.counter > this.videolist.length - 1
        ? this.videolist.length - 1
        : this.state.counter;

    if (vi > this.videolist.length - 1) {
      this.playVideo(false);
    }

    return (
      <div>
        <div className="container-fluid wow fadeInUp">
          <div className="tt-banner">
            <div className="tt-banner-inner">
              <div className="row">
                <div className="col-sm-6">
                  <div className="tt-banner-info">
                    <h5 className="tt-banner-label">
                      {" "}
                      <p>Video is now Personal</p>{" "}
                    </h5>
                    <h1 className="tt-banner-title">
                      {" "}
                      WoW {this.videolist[vi].name}
                      <br /> through a Visual & Personal Story
                    </h1>
                  </div>
                </div>

                <div className="col-sm-6 VideoRight">
                  {/* <img className="tt-banner-img lazy" data-original="img/banner_01.png" alt="" src="img/banner_01.png" style={{display: "block"}} /> */}
                  {/* <p>WoW {this.videolist[this.state.counter].name} through a Visual & Personal Story </p> */}
                  {vi <= this.videolist.length - 1
                    ? this.playVideo(true)
                    : this.playVideo(false)}
                </div>
                <div className="col-sm-12 text-center marginTop10 footerarrow">
                  <p>Like what you see? Try it for yourself</p>
                  <div className="arrow bounce marginTop20">
                    <Link to="/you">
                      {" "}
                      <i className="fa fa-angle-double-down fa-3x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (!this.videolist) {
      return <div>processing</div>;
    }

    return (
      <div>
        <div className="player-wrapper">{this.renderVideo()}</div>
        <You />

        <CustomerStories />

        <Agencies />

        <Workforus />
      </div>
    );
  }
}

export default Landing;
