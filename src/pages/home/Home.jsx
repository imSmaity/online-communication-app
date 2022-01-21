
import './home.css'
import {io, Socket} from 'socket.io-client'
import InputMessage from './chat/InputMessage'
import Login from '../login/Login'
import { useContext } from 'react'
import { UserData } from '../../Routes/PageRoutes'

const socket=io('https://bartaserver2.herokuapp.com/')

const InputElement=()=>{
    const {state,dispatch}=useContext(UserData)

    function logout(){
        dispatch({type:"USER",name:'',email:'',room:'',payload:false})
        window.location.reload()
    }

    if(state.payload){
        return (
            <div className="col-md-6 col-12">
                <div className='ssfd'>
                    <button className='bdv mt-1' type='button' onClick={logout}>Logout</button>
                    <span id='code'>CODE: <input type={'text'} value={state.room}  id='rid' readOnly/></span>
                    <span id='uname'>{state.name}</span>
                </div>
                
                <InputMessage socket={socket}/>
                
            </div>
        )
    }
    else{
        return( <div className="col-md-6 col-12">
                
                <Login socket={socket} /></div>
        )
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