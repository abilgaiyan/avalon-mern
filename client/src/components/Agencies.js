import React from 'react';
import {Link} from 'react-router-dom';

const Agencies = () => {
    return (
        <div>
       
       <div className="container-fluid wow fadeInUp marginTop70 marginBottom40">
<div className="col-sm-5 col-xs-12 youleft">
<h3>Resell Innovative Personalised Videos </h3>
<h1>Give your customers a <br /> way to shine</h1>
</div>
<div className="col-sm-7 col-xs-12 youright Agency"><p>

Do you run a marketing, Advertising, Event Planning Agency? Do you help enterprises shape the communication to their customers?

</p>
<p>

You can become our Affiliate and use our platform to create these engaging stories for your customers. <br />
Earn payouts from Sale of Avalon technology when you promote us.

</p>
<p>

We will handhold you through entire process right from training, Closing the sales and post sales support 

</p>

<Link className="c-btn size-2 wow fadeInUp marginTop15" to="/contactus/new">Contact Us</Link>
</div>
</div>
       </div>
      );
    };
    
    export default Agencies;
       