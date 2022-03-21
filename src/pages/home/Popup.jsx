import React, { useState } from 'react'

function Popup({value}) {
  const [msg,setMsg]=useState(false)
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Join Code</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            
            <span>
              <div style={{color:'green'}}>{msg?"Join code copied!":""}</div>
              <input type={'text'} value={value}  id='rid' readOnly/>
            </span>
            <button style={{background:'white',border:'none'}} title='Copy' onClick={()=>{
              navigator.clipboard.writeText(value) 
              setMsg(true)}
            }>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABLklEQVRIiWNgGGmAkRhFxu7x3gxM/2cyMjBIE1D68z8DY+HZ7QunEzKTiSjXMf2fQYSlDAwMDGyMDP+nmnrEZVHFYgYGBhliFP1nZEhjYGD4/5+RYYqxZ1wuNSwmCpzdtmjOf0aGdIgbGCbis5yqFpNiOYbFxu7x3saecU9MPOP+U2Q5A2MOAwMDA8Ty+EyCFpOQkDCAsUecDdzy7Qun/2dgzIZY/r8fXS0LFv1EJSRsgJGR4bCJZxySCDzQ2NHVUj2OiQWjFo9aPGrxqMW0sdjaL4kXynxCoT2PSbL4968/LlBmGgWWP2ZkZEpDF8Roc6FVhzdZ/7FaHd859x2ZluIEhOJY/TfT74vGHrGh5p7RfNS0mJCPyQJnti8i2HrF5mOqJyRiLaZ6QhoFAwoA3kxTFZlFSTYAAAAASUVORK5CYII=" alt='copy'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup