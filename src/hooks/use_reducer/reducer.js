export const initialState={type:"USER",name:'',room:'',payload:false}

export default function reducer(state,action){
    if(action.type === "USER"){
        return action
    }

    return state
}