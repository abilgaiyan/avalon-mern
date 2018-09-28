import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer} from '../../actions';
import Email from './Email';
import PhoneCall from './PhoneCall';
import CustomerQuery from './CustomerQuery';


class CustomerDetails extends Component{
 
    componentWillMount(){
          
          const customerId = this.props.match.params.customerId;
          console.log(customerId);
          this.props.fetchCustomer(customerId);
          
    }   
   
    renderCustomer(){
        if(!this.props.customer && this.props.customer.length <= 0)      
          return;

        //   console.log('this.props.customer')
        //   console.log(this.props.customer)
        //   console.log('this.props.customer')
          //console.log(this.props.fetchCustomers())
            const {customer} = this.props
            
            return (
            // <div key={customer._id} class="card blue-grey darken-1">
            <div className="container card-content white-text">
              <span className="card-title">{customer.jewelsoftId}</span>
              <p>Customer Name :{customer.customerName}</p>
              <p>sr :{customer.sr}</p>
              <p>jewelsoftId :{customer.jewelsoftId}</p>
              <p>Contact Person Name :{customer.contactPersonName}</p>
              <p>address1 :{customer.address1}</p>
              <p>City:{customer.city}</p>

              <p>State:{customer.state}</p>
              <p>Sales Person Name:{customer.salesPersonName}</p>
              <p>Website Url:{customer.websiteUrl}</p>
              <p>Website Release Month :{customer.websiteReleaseMonth}</p>
              <p>Website Release Year:{customer.websiteReleaseYear}</p>
            </div>
          
        //   </div>
            )
    } 
    render(){
        return (
            <div>
                {this.renderCustomer()}
                
               <Email  customerId={this.props.match.params.customerId} />
                <PhoneCall  customerId={this.props.match.params.customerId} />
                 {/* <CustomerQuery  customerId={this.props.match.params.customerId} /> */}

               
               
            </div>
        )
    }
}

function mapStateToProps({customer}){
    // console.clear();
    // console.log({customer});
   return { customer }
}

export default connect(mapStateToProps, {fetchCustomer}) (CustomerDetails);