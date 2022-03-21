import React from 'react'
import './send_box.css'

function SendBox({value, onChange, onClick,onKeyPress}) {
  return (
     <center className="fixed-bottom bm">
        <div id="input-margin"></div>
        <input type='text' id='chatText' value={value} placeholder="Type a message"  onChange={onChange} onKeyPress={onKeyPress}/>
        <span>
            <button type='button' id="sendBtn" onClick={onClick}>&#10148;</button>
        </span>
    </center> 
  )
}

export default SendBox;