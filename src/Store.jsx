import React, { createContext, useReducer } from 'react'
const initState = {users: [], loading: true}
export const mystore = createContext();
const Reducer = (state, action) => {
const {type, payload} = action;
switch(type){
    case"CLOSE_LOADER": return {...state, loading: payload}
    break;
    case"SET_USERS": return {...state, users: payload}
    break;
    default:
        return state;
}
}

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initState)
  return (
    <mystore.Provider value={{state, dispatch}}>
        {children}
    </mystore.Provider>
  )
}

export default Store