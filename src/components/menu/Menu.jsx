import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserData } from '../../Routes/PageRoutes'
import './menu.css'

export default function Menu(){
    const {state,dispatch}=useContext(UserData)
    function logout(){
        dispatch({type:"",name:'',room:'',payload:false})
    }
    return(
        <div className="dropdown">
            <button type='button' className=" dotIcon"></button>
            <div className="dropdown-content">
                <div className="link" >
                    <Link to='new_contact'>Add new contact</Link>
                </div>
                <div className="link" >
                    <Link to='profile'>Profile</Link>
                </div>
                <div className="link" >
                    <button type='button' onClick={logout}>Logout</button>
                </div>
            </div>
            
        </div>
    )
}