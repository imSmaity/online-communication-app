import { useContext, useEffect, useRef, useState } from "react"
import { UserData } from "../../../Routes/PageRoutes"


export default function InputMessage({socket}){
    // const [currMessage,setCurrMessage]=useState([])
    const [messageList,setmessageList]=useState([])
    const sendMsg=useRef("")
    const {state,dispatch}=useContext(UserData)

    async function sendMessage(){
        if(sendMsg.current.value !== ""){
            const messageData={
                room: state.room,
                name: state.name,
                currMsg: sendMsg.current.value,
                time: new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message",messageData)
            setmessageList((list)=>[...list,messageData])
        }
    }
    useEffect(()=>{
        socket.on('received_message',(data)=>{
            setmessageList((list)=>[...list,data])
        })
    },[socket])
    return (
        <div className="mbs">
            
            {
                messageList?
                <>
                    {
                        messageList.map((data,index)=>{
                            return (
                                <div  id={state.name===data.name?"you":"other"} key={index}>
                                    <div id="jvdj">
                                    <div id="name">{state.name===data.name?"You":data.name}</div>
                                    {data.currMsg}
                                    <div id="time">{data.time}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </>:
                <div></div>
            }
            
            <center className="fixed-bottom bfbvc">
                <input type='text' id='chatText' placeholder="Type a message" ref={sendMsg}/>
                <span>
                    <button type='button' onClick={sendMessage}>&#10148;</button>
                </span>
            </center>
        </div>
    )

}
