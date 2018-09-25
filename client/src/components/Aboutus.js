import React from 'react';

const Aboutus = () => {
  return (
    <div>
    <div className="container-fluid wow fadeInUp">
       
       <div className="tt-banner">
           <div className="tt-banner-inner">
               <div className="row">
                   <div className="col-sm-6">
                       <div className="tt-banner-info">
                           <h5 className="tt-banner-label"> <p>Personal Video engages customers</p> </h5>
                           <h1 className="tt-banner-title">Create an emotional experience for Customer Her name, her data, her story</h1>
                       </div>
                   </div>
                   {/* <div> Like what you see? Try it for yourself </div> */}
       <div className="col-sm-6">
               <img className="tt-banner-img lazy" data-original="img/banner_01.png" alt="" src="img/banner_01.png" style={{display: "block"}} />
               {/* <p>WoW {this.videolist[this.state.counter].name} through a Visual & Personal Story </p> */}
      {/* <ReactPlayer className="bannervideo"  url= {this.videolist[this.state.counter].videourl}
         onEnded={() => this.renderNextVideo(this.state.counter + 1)}  playing /> */}
     
     
   </div>
               </div>
     
           </div>
       </div>
   </div>

   </div>

  );
};

export default Aboutus;
