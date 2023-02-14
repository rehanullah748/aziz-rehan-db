

import { Table } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import {useContext, useEffect} from 'react'

import DataBase from './DB'
import { mystore } from './Store';


const Home = () => {
  const {state, dispatch} = useContext(mystore)

const getUsers =async()=>{

  const collect = collection(DataBase,"users")
  const documents = await getDocs(collect)
  
  dispatch({type:"CLOSE_LOADER", payload: false})
  const users=documents.docs.map(doc=>{
    
    return doc.data()
  })
return users
}
  useEffect(()=>{
    
    const getData = async() => {
      const result = await getUsers();
      dispatch({type: "SET_USERS", payload: result})
      console.log(result)
  }
   getData();
  },[])
  const Reducer = (state, action) => {
    switch(action.type){
        case"CLOSE_LOADER": return {...state, Loading: action.payload}
        break;
        case"SET_USERS": return {...state, users: action.payload}
        break;
        default:
            return state;
    }
}
  return (
    <div>
    {state.loading ? "loading..." : <table>
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Profession</th>
            <th>address</th>
        </thead>
        <tbody>
           {state.users.map((doc) => {
            return (
            <tr>
                <td>{doc.Name}</td>
                <td>{doc.Email}</td>
                
                <td>{doc.profession}</td>
                <td>{doc.Address}</td>
            </tr>
            )
           })} 
        </tbody>
    </table> }
    </div>
  )

}
export default Home 