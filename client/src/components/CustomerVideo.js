import React from 'react';

const CustomerVideo = (props) => {
  return (
    <div>
        <div className="container-fluid">
        <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="tt-page">
                           
                                <div className="tt-page-testimonial text-center">
                                    <div className="resp-container">
                                        {/* <iframe className="resp-iframe"  src ={props.url} title="Sukino" autoPlay="false" sandbox="allow-same-origin allow-scripts" ref={(f) => this.ifr = f } src="" allow="encrypted-media" allowFullScreen="true" width="100%" height="100%" frameBorder="0"></iframe> */}
                                    </div>
                                    {/* <div className="tt-text wow fadeInUp">
                                        <p><strong>A Home Care Story </strong></p>
                                        <p>Sukino – a Wellness service provider, used a personalized video to explain the Homecare services to its customers. Video stitches the dynamic customer and nurse information along with the information on Services</p>

                                    </div> */}
                                </div>
                                {/* <div className="tt-page-rating">
                                    <div className="tt-page-title test-author">Sukino And You</div>

                                </div> */}
                           
                        </div>
                    </div>
        </div>

   </div>

  );
};

export default CustomerVideo;
