
import './home.css'
import {io, Socket} from 'socket.io-client'
import InputMessage from './chat/InputMessage'
import Login from '../login/Login'
import { useContext } from 'react'
import { UserData } from '../../Routes/PageRoutes'

const socket=io('http://localhost:3001')

const InputElement=()=>{
    const {state,dispatch}=useContext(UserData)

    async function logout(){
        dispatch({type:"USER",name:'',room:'',payload:false})
        await socket.disconnect()
    }

    if(state.payload){
        return (
            <div className="col-md-6 col-12">
                <div className='ssfd'>
                    <button className='bdv mt-1' type='button' onClick={logout}>Logout</button>
                </div>
                
                <InputMessage socket={socket}/>
                
            </div>
        )
    }
    else{
        return <div className="col-md-6 col-12"><Login socket={socket} /></div>
    }
}


export default function Home(){
    return(
        <div className="row">
            <div className='col-lg-3'></div>
            <InputElement/>
            <div className='col-lg-3'></div>
        </div>
    )
}