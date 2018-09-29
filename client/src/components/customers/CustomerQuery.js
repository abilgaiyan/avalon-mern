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
     
            <div className="form-horizontal">    
            <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="pwd">Query Message:</label>
      <div className="col-sm-10">          
        <label className="control-label" htmlFor="email">{query.message}</label>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="pwd">Query DateTime:</label>
      <div className="col-sm-10">          
        <label className="control-label" htmlFor="email">{query.createDate}</label>
      </div>
    </div>
              {/* <p>Subject : {query.subject}</p> */}
              {/* <p>Query Message :{query.message}</p>
              <p>Query DateTime :{query.createDate}</p> */}
 <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">              
        <button type="submit" data-toggle="modal" className="btn btn-success" data-target="#myModal" >Add </button> 
      </div>
    </div>
              {/* <button type="submit" >Add </button> */}
           
              </div>
           </div>
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