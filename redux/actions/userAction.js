import { DELETE, EDITE, FAIL, LOGIN, LOGOUT, REGISTER } from "../types/userTypes"
import axios from "axios"


export const register=(data,navigate)=>async(dispatch)=>{
    try {
       const res = await axios.post("/api/user/signup" , data) 
       dispatch({
        type:REGISTER,
        payload:res.data
       })
       navigate("/Profile")
    
    } catch (error) {
        dispatch({
            type:FAIL
        })
    }
}

export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("/api/user/signin" , data)
        dispatch({
            type:LOGIN,
            payload:res.data
        })
       navigate("/Profile")
    } catch (error) {
      dispatch({
        type:FAIL
      })  
    }
}

export const delet =(id)=> async(dispatch)=>{
try {
   const res = await axios.delete(`/api/user/deleteuser/${id}`) 
   dispatch({ 
    type:DELETE,
    payload:id  
})
} catch (error) {
    dispatch({ 
    type:FAIL
    })
}
}

export const update = (id, data)=> async(dispatch)=>{
try {
   const res = await axios.update(`/api/user/edituser/${id}`, data)
   dispatch({
   type:EDITE,
   payload:res.data , id
   })
} 
catch (error) {
    dispatch({
        type:FAIL
    })
}
}

export const logout =()=>{
    return({
        type:LOGOUT
    }) 
}



