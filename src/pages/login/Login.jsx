import './login.css'

import React, { useContext, useRef, useState } from 'react'
import { UserData } from '../../Routes/PageRoutes'

export default function Login({socket}) {
    const {dispatch}=useContext(UserData)
    const [joinRoom,setJoinRoom]=useState(null)

    const name=useRef(null)
    const email=useRef(null)
    const roomId=useRef(null)
    
    function joinNewChat(){
        if(name.current.value !=="" && email.current.value!=="" && socket.id !== ""){
            socket.connect()
            dispatch({type:"USER",name:name.current.value,email:email.current.value,room:socket.id===undefined?"9w0YjKtB7FaYJC1uA$AVs":socket.id+"s",payload:true})
            socket.emit("join_chat",{
                name:name.current.value,
                room:socket.id===undefined?"9w0YjKtB7FaYJC1uA$AVs":socket.id+"s"
            })
        }
        
    }
    function joinWithId(){
        if(name.current.value !=="" && email.current.value!=="" && roomId.current.value !== ""){
            socket.connect()
            dispatch({type:"USER",name:name.current.value,email:email.current.value,room:roomId.current.value,payload:true})
            socket.emit("join_chat",{
                name:name.current.value,
                room:roomId.current.value
            })
        }
        
    }
    function newRoom(chatroom){
        setJoinRoom(chatroom)
    }
    function codeJoin(chatroom){
        setJoinRoom(chatroom)
    }
    return (
        <div className='mt-3'>
            <h1 style={{textAlign:'center'}}>BartaChat</h1>
            <center className='jBtnGroup'>
                {
                    joinRoom==="join_new"?
                    <>
                        <div>
                            <input type='text' ref={name} placeholder='Enter Your name'/>
                        </div>
                        <div className='mt-2'>
                            <input type='email' ref={email} placeholder='Enter Your e-mail'/>
                        </div>
                        <div className='mt-3'>
                            <button type='submit' onClick={joinNewChat} id='joinBtn'>Join</button>
                        </div>
                    </>:
                    joinRoom==="join_code"?
                    <>
                        <div>
                            <input type='text' ref={name} placeholder='Enter Your name'/>
                        </div>
                        <div className='mt-2'>
                            <input type='email' ref={email} placeholder='Enter Your e-mail'/>
                        </div>
                        <div className='mt-2'>
                            <input type='text' ref={roomId} placeholder='Enter join code'/>
                        </div>
                        <div className='mt-3'>
                            <button type='submit' onClick={joinWithId} id='joinBtn'>Join</button>
                        </div>
                    </>:
                    <>
                        <div><button type='button' id='jBtn1' onClick={()=>newRoom("join_new")}>New chat room</button></div>
                        <div className='mt-3'><button type='button' id='jBtn2' onClick={()=>codeJoin("join_code")}>Join with a code</button></div>
                    </>
                }
                
                
            </center>
            
            
            
        </div>
    )
}
