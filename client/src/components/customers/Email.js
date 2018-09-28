import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmail} from '../../actions';
import EmailPopup from "./EmailPopup"


class Email extends Component{
 
    componentWillMount(){
          
          const customerId = this.props.customerId;
          console.log(customerId);
          this.props.fetchEmail(customerId);
          
    }   
   
    renderEmail(){
        if(!this.props.email)      
          return;

        //   console.log('this.props.customer')
        //   console.log(this.props.customer)
        //   console.log('this.props.customer')
          //console.log(this.props.fetchCustomers())
            const {email} = this.props
            
            return (
            // <div key={customer._id} class="card blue-grey darken-1">
            <div className="container card-content white-text">
            
              <p>sub : {email.subject}</p>
              <p>Message :{email.message}</p>
              <button type="submit" data-toggle="modal" data-target="#myModal" >Add </button>
              <EmailPopup/>
              
    
  
            </div>
        //   </div>
            )
    } 
    render(){
        return (
            <div>
                {this.renderEmail()}
            </div>
        )
    }
}

function mapStateToProps({email}){
    // console.clear();
    // console.log({customer});
   return { email }
}

export default connect(mapStateToProps, {fetchEmail}) (Email);