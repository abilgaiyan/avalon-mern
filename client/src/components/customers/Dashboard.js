import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers} from '../../actions';
import CustomerDetails from './CustomerDetails';
import { Link } from 'react-router-dom';

class Dashboard extends Component{
 
    componentDidMount(){
        this.props.fetchCustomers();
       // console.log(this.props.fetchCustomers());

    }   
   
    renderDashboard(){
        if(!this.props.customers)      
          return;
          //console.log(this.props.fetchCustomers())
          
        return this.props.customers.map(customer=>{
            return (
            <div key={customer._id} class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{customer.jewelsoftId}</span>
              {/* <p>{customer.customerName}</p><Link to={'customers/'+ customer._id }>Got To Details</Link> */}
              <p>{customer.customerName}</p><Link to={'customers/'+ customer._id }>Got To Details</Link>
              
          }}
            </div>
          </div>
            )

        })
    } 
    render(){
        return (
            <div>
                {this.renderDashboard()}
            </div>
        )
    }
}

function mapStateToProps({customers}){
    // console.log({customers})
   return { customers }
}

export default connect(mapStateToProps, {fetchCustomers}) (Dashboard);