import React from 'react'

function Popup({value}) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Join Code</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <span id='code'><input type={'text'} value={value}  id='rid' readOnly/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup