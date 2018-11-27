import React from 'react'
import { Link } from 'react-router-dom';
const LeftSideBar = (props) => {
    return (
        <div className="col-sm-2 sidebar">
            <nav>
                <div className="site_logo well">
                    <Link to="/customers">
                        <img src={require('../images/logo.png')} className="img-responsive" />
                    </Link>
                </div>
                <div className="list-group" id="sidebar-nav-menu">
                    <Link to="#Summary" data-toggle="collapse" data-parent="#accordion1" aria-expanded="true" className="list-group-item Summary" >Summary</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#CustomerInfo" aria-expanded="true" className="list-group-item Customer_Info">Customer Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion" to="#TargetAreas" aria-expanded="true" className="list-group-item">Target Areas</Link>
                    <Link data-toggle="collapse" data-parent="#accordion" to="#SupportQuery" aria-expanded="true" className="list-group-item Call_Log">Query / Support Trend</Link>
                    {/* <Link data-toggle="collapse" data-parent="#accordion" to="#callLog" aria-expanded="true" className="list-group-item Phone">Call Log</Link>
                    <Link data-toggle="collapse" data-parent="#accordion" to="#Emails" aria-expanded="true" className="list-group-item Emails">Email Log</Link> */}
                    <Link data-toggle="collapse" data-parent="#accordion" to="#CommunicationLog" aria-expanded="true" className="list-group-item CommunicationLog">Communication Log</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#AvalonInfo" aria-expanded="true" className="list-group-item">Avalon Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#BillingForm" aria-expanded="true" className="list-group-item">Billing Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#WebsiteInfoForm" aria-expanded="true" className="list-group-item">Website Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#ProductInfoForm" aria-expanded="true" className="list-group-item">Product Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#AshiMicroWebsiteForm" aria-expanded="true" className="list-group-item">ASHI Micro-Website Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#DomainInfoForm" aria-expanded="true" className="list-group-item">Domain Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#SSLInfoForm" aria-expanded="true" className="list-group-item">SSL Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#BusinessEmailInfoForm" aria-expanded="true" className="list-group-item">Business Email Info</Link>
                    <Link data-toggle="collapse" data-parent="#accordion1" to="#EmailMarketingAccountInfoForm" aria-expanded="true" className="list-group-item">Email Marketing Account Info</Link>
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar
