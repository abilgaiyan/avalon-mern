import React from 'react';
import {Link} from 'react-router-dom';

const Agencies = () => {
    return (
        <div>
      
       <div className="container-fluid wow fadeInUp marginTop70 marginBottom40">
<div className="col-sm-5 col-xs-12 youleft">
<h3>Creativity + Technology + Go To Market
 </h3>
<h1>We are awesome and <br /> therefore need You</h1>
</div>
<div className="col-sm-7 col-xs-12 youright Agency"><p>

We have openings for full time and part time associates in the field of Creativity, Technology and Go To Market space. 

</p>
<p>

We are looking for someone with a passion for video making. If you are someone with a flair for storyboarding, creating illustrations, 2D and 3D animation, conduct live shoots or anything creative in between, do contact us. 

</p>
<p>
If your calling is in cutting edge technology in Java script, Node, vector graphics or simply html and css, we need you. We are constantly adding new features to our product offering and making it more scalable.
</p>
<p>
If you think you can sell and creativity + technology platform appeals to your taste-buds, do contact us. Opportunities in Sales and Account management with us, will add 7 stars to your profile.
    </p>




<Link className="c-btn size-2 wow fadeInUp marginTop15" to="/contactus/new">Contact Us</Link>
</div>
</div>
       </div>
      );
    };
    
    export default Agencies;
       