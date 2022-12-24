import { DELETE, EDITE, FAIL, LOGIN, LOGOUT, REGISTER } from "../types/userTypes"

const initialState = {
    user:null,
    loading:true
}

const userReducer=( state=initialState, { type, payload }) => {
    switch(type){
         case REGISTER:
             localStorage.setItem("token" , payload.token)
             return{
                 ...state,user:payload.user,loading:false
             }
         case LOGIN:
             localStorage.setItem("token" , payload.token)
         return{
             ...state,user:payload.user,loading:false
         }
         case FAIL:
             localStorage.removeItem("token")
         return{
             ...state,user:null,loading:false
         }
         case DELETE:
            localStorage.removeItem("token")
             return{
             ...state,user:null,loading:false
             }
         case EDITE:
             return{
                 ...state,user:payload.user,loading:false
             }
         case LOGOUT:
             localStorage.removeItem("token")
             return{
                 ...state,user:null,loading:false
             }
        default:
    return state 
     }
     
  }

export default userReducer
