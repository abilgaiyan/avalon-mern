import React from "react"

const EmailPopup = () =>{

    return(
        <div>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                
                
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                    </div>
                    <div className="modal-body ">
                        <div className="form-group"><label><strong>Subject:</strong></label><input type="text" className="form-control"/></div><br/>
                        <div className="form-group"><label><strong>Comments:</strong></label><input type="text" className="form-control"/></div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                    </div>
                    </div>
                
                </div>
            </div>
        </div>

    )
}



export default EmailPopup