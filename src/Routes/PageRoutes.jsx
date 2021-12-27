import { createContext, useReducer } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { initialState, reducer } from "../hooks/hooks";
import {Home} from "../pages/pages";

const UserData=createContext(null)
export default function PageRoutes(){
    const [state,dispatch]=useReducer(reducer,initialState)
    return(
      <BrowserRouter>
        <UserData.Provider value={{state,dispatch}}>
          <Routes>
            
              <Route path='/' element={<Home/>}  />
          </Routes>
        </UserData.Provider>
      </BrowserRouter>
    )
}

export {UserData}