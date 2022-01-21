import { useContext, useEffect, useState } from "react"
import { UserData } from "../../../Routes/PageRoutes"


export default function InputMessage({socket}){
    const [messageList,setmessageList]=useState([])
    const [sendMsg,setSendMsg]=useState("")
    const {state}=useContext(UserData)

    function changeMsg(e){
        setSendMsg(e.target.value)
    }

    async function sendMessage(){
        if(sendMsg !== ""){
            const messageData={
                room: state.room,
                name: state.name,
                email: state.email,
                currMsg: sendMsg,
                time: new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message",messageData)
            setmessageList((list)=>[...list,messageData])
            setSendMsg("")
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
                                <div  id={state.email===data.email?"you":"other"} key={index}>
                                    <div id="jvdj">
                                    <div id="name">{state.email===data.email?"You":data.name}</div>
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
                <input type='text' id='chatText' value={sendMsg} placeholder="Type a message"  onChange={(e)=>changeMsg(e)}/>
                <span>
                    <button type='button' onClick={sendMessage}>&#10148;</button>
                </span>
            </center>
        </div>
    )

}
