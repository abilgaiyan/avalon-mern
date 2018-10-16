import React from 'react';
import CustomerDetails from '../components/customers/CustomerDetails';

const RightMainContent = () => {
    return (
        <div class="main_containt col-sm-10">
            <div class="container-fluid">
                <div class="col-sm-6">
                    <CustomerDetails />
                </div>
            </div>
        </div>
    )
}

export default RightMainContent;

