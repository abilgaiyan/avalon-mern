import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhonecall} from '../../actions';


class PhoneCall extends Component{
 
    componentWillMount(){
          
          const customerId = this.props.customerId;
          this.props.fetchPhonecall(customerId);
          
    }   
   
    renderPhonecall(){
        if(!this.props.phonecall)      
          return;

        //   console.log('this.props.customer')
        //   console.log(this.props.customer)
        //   console.log('this.props.customer')
          //console.log(this.props.fetchCustomers())
            const {phonecall} = this.props
            
            return (
            // <div key={customer._id} class="card blue-grey darken-1">
            <div className="container card-content white-text">
            
              <p>Call Message :{phonecall.message}</p>
              <p>Call DateTime :{phonecall.createDate}</p>

              <button type="submit" >Add </button>
            </div>
        //   </div>
            )
    } 
    render(){
        return (
            <div>
                {this.renderPhonecall()}
            </div>
        )
    }
}

function mapStateToProps({phonecall}){
    // console.clear();
    // console.log({customer});
   return { phonecall }
}

export default connect(mapStateToProps, {fetchPhonecall}) (PhoneCall);