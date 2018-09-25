import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenderCustomerStories from './RenderCustomerStories';


 class CustomerStories1  extends Component  {

 
   
   render() { return (
        <div>

            <div className="container-fluid wow fadeInUp marginTop70 marginBottom40">
                <div className="col-sm-5 col-xs-12 youleft">
                    <h3>Creative to Mass production - 1 Team + 1 Platform </h3>
                    <h1>Your story, your touch,<br /> your way, with Avalon</h1>
                </div>
                <div className="col-sm-7 col-xs-12 youright Agency">
                    <p>
                        Storyboarded, illustrated, animated by the Avalon team. Mass produced by the Avalon platform, our customer stories have a unique blend of expression, data and interactions.
                 </p>
                    <p>
                        You can become our Affiliate and use our platform to create these engaging stories for your customers. <br />
                        Earn payouts from Sale of Avalon technology when you promote us.
                 </p>
                    <p>
                        We will handhold you through entire process right from training, Closing the sales and post sales support
                    </p>
                </div>
            </div>

            <RenderCustomerStories />

        </div>
    );
  }
 }

export default CustomerStories1;
