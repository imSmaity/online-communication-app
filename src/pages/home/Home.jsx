
import './home.css'
import {io} from 'socket.io-client'
import InputMessage from './chat/InputMessage'
import Login from '../login/Login'
import { useContext } from 'react'
import { UserData } from '../../Routes/PageRoutes'
import Popup from './Popup'

// const socket=io('http://localhost:9000')
const socket=io('https://bartaserver2.herokuapp.com')

const InputElement=()=>{
    const {state,dispatch}=useContext(UserData)

    function logout(){
        dispatch({type:"USER",name:'',email:'',room:'',payload:false})
        window.location.reload()
    }

    if(state.payload){
        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className="col-md-6 col-12">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-xl-2 col-6'>
                                    <button className='bdv mt-1' type='button' onClick={logout}>Leave</button>
                                </div>
                                <div className="col-xl-5 ex-code">
                                    <span title='Join Code'>
                                        <input type={'text'} value={state.room}  id='rid' readOnly/>
                                    </span>
                                </div>
                                <div className='col-xl-3 col-4 container2'>
                                    <img src={`https://avatars.dicebear.com/api/initials/:${state.name}.svg`} title={state.name} alt="Avatar" className="right" style={{width:'100%'}}/>
                                </div>
                                <div className="col-2 dropdown">
                                    <button type='button' className="dotIcon" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
                                    <Popup value={state.room}/>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <InputMessage socket={socket}/>
                        </div>
                    </div>
                </div>
                <div className='col-3'></div>
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