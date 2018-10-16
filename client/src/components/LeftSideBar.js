import React from 'react'
import { Link } from 'react-router-dom';
import './LeftSideBar.css'
const LeftSideBar = () => {
    return (
        <div class="sidebar col-sm-2" id="sidebar-nav">
            <nav>
                <div class="site_logo well">
                    <a href="#">
                        <img src={require('../images/logo.png')} class="img-responsive" />
                    </a>
                </div>
                <div class="list-group" id="sidebar-nav-menu">
                    <Link to="#" class="list-group-item">Summary</Link>
                    <Link to="#" class="list-group-item">Customer Info</Link>
                    <Link to="#" class="list-group-item">Target Areas</Link>
                    <Link to="#" class="list-group-item">Query / Support Trend</Link>
                    <Link to="#" class="list-group-item">Call Log</Link>
                    <Link to="#" class="list-group-item">Email Log</Link>
                    <Link to="#" class="list-group-item">Avalon Info</Link>
                    <Link to="#" class="list-group-item">Billing Info</Link>
                    <Link to="#" class="list-group-item">Website Info</Link>
                    <Link to="#" class="list-group-item">Product Info</Link>
                    <Link to="#" class="list-group-item">ASHI Micro-Website Info</Link>
                    <Link to="#" class="list-group-item">Domain Info</Link>
                    <Link to="#" class="list-group-item">SSL Info</Link>
                    <Link to="#" class="list-group-item">Business Email Info</Link>
                    <Link to="#" class="list-group-item">Email Marketing Account Info</Link>
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar
