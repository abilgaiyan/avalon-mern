import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchContactus} from '../../actions';

class ContactusList extends Component{
 
    componentDidMount(){
        this.props.fetchContactus();
    }   
   
    renderContactusList(){
        if(!this.props.contactus)      
          return;

        return this.props.contactus.map(contact=>{
            return (
            <div key={contact._id} class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{contact.name}</span>
              <p>{contact.message}</p>
            </div>
            <div class="card-action">
              <p>Mobile: {contact.mobile}</p>
              <p>Email: {contact.email}</p>
              <p>Contactus Date: {new Date(contact.updateDate).toLocaleDateString()}</p>
            </div>
          </div>
            )

        })
    } 
    render(){
        return (
            <div>
                {this.renderContactusList()}
            </div>
        )
    }
}

function mapStateToProps({contactus}){
   return { contactus }
}

export default connect(mapStateToProps, {fetchContactus}) (ContactusList);