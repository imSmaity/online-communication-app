import { useContext, useEffect, useState } from "react"
import { SendBox } from "../../../components/component"
import { UserData } from "../../../Routes/PageRoutes"
import './message.css'

export default function InputMessage({socket}){
    const [messageList,setmessageList]=useState([])
    const [sendMsg,setSendMsg]=useState("")
    const {state}=useContext(UserData)

    function changeMsg(e){
        setSendMsg(e.target.value)
    }

    function _onKeyPress(e){
        if(e.code==="Enter"){
            sendMessage()
        }
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
        <div className="inputBox mbs">
        {
            messageList?
            <>
                {
                    messageList.map((data,index)=>{

                        if(state.email!==data.email){
                            return (
                                <div className="container-f" key={index}>
                                    <img src={`https://avatars.dicebear.com/api/initials/:${data.name}.svg`} alt="Avatar" style={{width:'100%'}} title={data.name}/>
                                    <p>{data.currMsg}</p>
                                    <span className="time-right">{data.time}</span>
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className="container-f darker" key={index}>
                                    <img src={`https://avatars.dicebear.com/api/initials/:${data.name}.svg`} alt="Avatar" className="right" title={data.name} style={{width:'100%'}}/>
                                    <p>{data.currMsg}</p>
                                    <span className="time-left">{data.time}</span>
                                </div>
                            )
                        }
                    })
                }
            </>:
            <div>Loading...</div>
        }
        
            <SendBox value={sendMsg} onChange={(e)=>changeMsg(e)} onClick={sendMessage} onKeyPress={(e)=>_onKeyPress(e)}/>
        </div>
    )

}
