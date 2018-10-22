import React from 'react'
import { Link } from 'react-router-dom';
const LeftSideBar = () => {
    return (
        <div className="sidebar col-sm-2" id="sidebar-nav">
            <nav>
                <div className="site_logo well">
                    <a href="#">
                        <img src={require('../images/logo.png')} className="img-responsive" />
                    </a>
                </div>
                <div className="list-group" id="sidebar-nav-menu">
                <Link to="#" className="list-group-item Summary" >Summary</Link>
                <Link to="#" className="list-group-item Customer_Info">Customer Info</Link>
                <Link to="#" className="list-group-item">Target Areas</Link>
                <Link to="#" className="list-group-item Call_Log">Query / Support Trend</Link>
                <Link to="#" className="list-group-item Phone">Call Log</Link>
                <Link to="#" className="list-group-item Emails">Email Log</Link>
                <Link to="#" className="list-group-item">Avalon Info</Link>
                <Link to="#" className="list-group-item">Billing Info</Link>
                <Link to="#" className="list-group-item">Website Info</Link>
                <Link to="#" className="list-group-item">Product Info</Link>
                <Link to="#" className="list-group-item">ASHI Micro-Website Info</Link>
                <Link to="#" className="list-group-item">Domain Info</Link>
                <Link to="#" className="list-group-item">SSL Info</Link>
                <Link to="#" className="list-group-item">Business Email Info</Link>
                <Link to="#" className="list-group-item">Email Marketing Account Info</Link>
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar
