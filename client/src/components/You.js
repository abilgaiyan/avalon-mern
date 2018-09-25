import React from 'react';
import {Link} from 'react-router-dom';
import Typist from 'react-typist';
const You = () => {
    return (
<div>
         <div className="container-fluid wow fadeInUp">
            
            <div className="tt-banner">
                <div className="tt-banner-inner">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="tt-banner-info">
                                <h5 className="tt-banner-label"> <p>Personal Video engages customers</p> </h5>
                                <h1 className="tt-banner-title hidden-xs">Create an emotional experience for Customer. <br /> Her name, her data, her story.</h1>
                                <h1 className="tt-banner-title visible-xs hidden-sm hidden-md hidden-lg">Create an emotional experience for Customer Her name, her data, her story.</h1>
                            </div>
                        </div>
                        {/* <div> Like what you see? Try it for yourself </div> */}
						<div className="col-sm-6">
                    <img className="tt-banner-img lazy" data-original="img/banner_01.png" alt="" src="img/banner_01.png" style={{display: "block"}} />
                 
                <Typist className="Typist  typewriter">
                   <h6>Did you notice our Team Thanking <br/> customers  like CLARA in the video?</h6>
                   <br/>
                   <h6>Did you hear them calling out CLARA? </h6>
                   <br/>
                   <h6>Give them a chance to Thank [ YOU ] </h6>
                </Typist> 

					
				</div>
                    </div>
					
                </div>
            </div>
        </div>
        <div className="container-fluid wow fadeInUp marginTop40 marginBottom40">
<div className="col-sm-5 col-xs-12 youleft">
<h3>Creativity + Customer Context + Technology</h3>
<h1>How Avalon can help You</h1>
</div>
<div className="col-sm-7 col-xs-12 youright"><p> 

We can help You, as a Marketeer, to transform your customer communications. We can do this by adding engaging visuals, personalized data and interactions on visuals and voice, to attract new customers. 
</p>
<p>
 
We can help You, as Sales Managers, to send contextualized video statements and explainers, taking data and insights from your enterprise systems, and creating unique cross-sell opportunities to your existing customers. 
</p>
<p>
 
And we can build customized interactions, call to Action and Analytics on the video to help You measure the effectiveness of the communication.   
</p>
<p>
 
We have an excellent creative team to build creative story boards, illustrations and animations. Our design studio understands the corporate language to make your story unique and differentiated
</p>
<p>
We have a unique AI and Video technology at work to create this immersive personal and interactive experience, at scale. 
</p>
<Link className="c-btn size-2 wow fadeInUp" to="/customerstories">Show Sample</Link>
</div>
</div>






        </div>
    );
    };
    
    export default You;
       