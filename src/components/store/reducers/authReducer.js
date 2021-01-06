const initialState = {
     authError:null
}
const authReducer =(state=initialState,action)=>{
     switch(action.type) {
          case 'LOGIN_ERROR':
               // console.log('Login error')    
               return {
                    ...state,
                    authError:'Login Failed',
               }

          case 'LOGIN_SUCCESS': 
          //    console.log('Login success')    
               return{
                    ...state,
                    authError:null
               }

          case 'SIGNOUT_SUCCESS':
               // console.log('signout successfully')
               return state ;

          case 'SIGNUP_SUCCESS':
               // console.log('signup succes')
               return{
                    ...state,
                    authError:null
               }
          case 'SIGNUP_ERROR':
               console.log('signup error')    
               return{
                    ...state,
                    authError:action.err.message
               }           
                    
          default: return state;    
     } 

}

export default authReducer