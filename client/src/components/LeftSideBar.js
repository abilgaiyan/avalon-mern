import React from 'react'
import { Link } from 'react-router-dom';
const LeftSideBar = () => {
    return (
        <div className="sidebar col-sm-2" id="sidebar-nav">
            <nav>
                <div className="site_logo well">
                    <Link to="/customers">
                        <img src={require('../images/logo.png')} className="img-responsive" />
                    </Link>
                </div>
                <div className="list-group" id="sidebar-nav-menu">
                    <Link to="#Summary" data-toggle="collapse" data-parent="#undefined" aria-expanded="true" className="list-group-item Summary" >Summary</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#CustomerInfo" aria-expanded="true" className="list-group-item Customer_Info">Customer Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#TargetAreas" aria-expanded="true" className="list-group-item">Target Areas</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#SupportQuery" aria-expanded="true" className="list-group-item Call_Log">Query / Support Trend</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#callLog" aria-expanded="true" className="list-group-item Phone">Call Log</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#Emails" aria-expanded="true" className="list-group-item Emails">Email Log</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#AvalonInfo" aria-expanded="true" className="list-group-item">Avalon Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#BillingForm" aria-expanded="true" className="list-group-item">Billing Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#WebsiteInfoForm" aria-expanded="true" className="list-group-item">Website Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#ProductInfoForm" aria-expanded="true" className="list-group-item">Product Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#AshiMicroWebsiteForm" aria-expanded="true" className="list-group-item">ASHI Micro-Website Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#DomainInfoForm" aria-expanded="true" className="list-group-item">Domain Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#SSLInfoForm" aria-expanded="true" className="list-group-item">SSL Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#BusinessEmailInfoForm" aria-expanded="true" className="list-group-item">Business Email Info</Link>
                    <Link data-toggle="collapse" data-parent="#undefined" to="#EmailMarketingAccountInfoForm" aria-expanded="true" className="list-group-item">Email Marketing Account Info</Link>
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar
