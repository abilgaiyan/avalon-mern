import React from 'react'
import { Link } from 'react-router-dom';
import { onClick_Acc } from './customers/accordiancontrol/AccordianClick';
const LeftSideBar = (props) => {
    return (
        <div className="col-sm-2 sidebar">
            <nav>
                <div className="site_logo well">
                    <Link to="/customers">
                        <img src={require('../images/logo.png')} className="img-responsive" alt="Avalon Solutions"/>
                    </Link>
                </div>
                <div className="list-group" id="sidebar-nav-menu">
                    <Link to="#Summary" data-toggle="collapse"  aria-expanded="true" className="list-group-item Summary active" onClick={(e) => onClick_Acc(e)}>Summary</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#TargetAreas" aria-expanded="true" className="list-group-item">Target Areas</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#SupportQuery" aria-expanded="true" className="list-group-item Call_Log">Query / Support Trend</Link>
                    {/* <Link data-toggle="collapse"  to="#callLog" aria-expanded="true" className="list-group-item Phone">Call Log</Link>
                    <Link data-toggle="collapse"  to="#Emails" aria-expanded="true" className="list-group-item Emails">Email Log</Link> */}
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#CommunicationLog" aria-expanded="true" className="list-group-item CommunicationLog">Communication Log</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#CustomerInfo" aria-expanded="true" className="list-group-item Customer_Info">Customer Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#AvalonInfo" aria-expanded="true" className="list-group-item">Avalon Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#BillingForm" aria-expanded="true" className="list-group-item">Billing Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#AshiMicroWebsiteForm" aria-expanded="true" className="list-group-item">ASHI Micro-Website Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#DomainInfoForm" aria-expanded="true" className="list-group-item">Domain Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#SSLInfoForm" aria-expanded="true" className="list-group-item">SSL Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#BusinessEmailInfoForm" aria-expanded="true" className="list-group-item">Business Email Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#EmailMarketingAccountInfoForm" aria-expanded="true" className="list-group-item">Email Marketing Account Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#WebsiteInfoForm" aria-expanded="true" className="list-group-item">Website Info</Link>
                    <Link onClick={(e) => onClick_Acc(e)} data-toggle="collapse"  to="#ProductInfoForm" aria-expanded="true" className="list-group-item">Product Info</Link>
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar
