

import React, { useContext, useRef } from 'react'
import { UserData } from '../../Routes/PageRoutes'

export default function Login({socket}) {
    const {state,dispatch}=useContext(UserData)
    const name=useRef(null)
    const roomId=useRef(null)
    
    function joinChat(){
        if(name.current.value !=="" && roomId.current.value !== ""){
            socket.connect()
            dispatch({type:"USER",name:name.current.value,room:roomId.current.value,payload:true})
            socket.emit("join_chat",{
                name:name.current.value,
                room:roomId.current.value
            })
        }
        
    }
    
    return (
        <div className='mt-5'>
            <center>
                <div className='mt-2'>
                    <input type='text' ref={name} placeholder='Enter Your name'/>
                </div>
                <div className='mt-2'>
                    <input type='text' ref={roomId} placeholder='Enter join code'/>
                </div>
                <div className='mt-3'>
                    <button type='submit' onClick={joinChat}>Join</button>
                </div>
            </center>
            
            
            
        </div>
    )
}
