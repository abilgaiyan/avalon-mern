import React, {Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuery} from '../../actions';


class CustomerQuery extends Component{
 
    componentWillMount(){
          
          const customerId = this.props.customerId;
          this.props.fetchQuery(customerId);
          
    }   
   
    renderCustomerQuery(){
        if(!this.props.query)      
          return;

        //   console.log('this.props.customer')
        //   console.log(this.props.customer)
        //   console.log('this.props.customer')
          //console.log(this.props.fetchCustomers())
            const {query} = this.props
            
            return (
            // <div key={customer._id} class="card blue-grey darken-1">
            <div className="container card-content white-text">
            
              {/* <p>Subject : {query.subject}</p> */}
              <p>Query Message :{query.message}</p>
              <p>Query DateTime :{query.createDate}</p>

              <button type="submit" >Add </button>
            </div>
        //   </div>
            )
    } 
    render(){
        return (
            <div>
                {this.renderCustomerQuery()}
            </div>
        )
    }
}

function mapStateToProps({query}){
    // console.clear();
    // console.log({customer});
   return { query }
}

export default connect(mapStateToProps, {fetchQuery}) (CustomerQuery);