const initialState = {
     projects:[
           {id:1,title:'Fetch me junk',content:'blah blah blah'},
           {id:2,title:'collect all the stars',content:'blah blah blah'},
           { id:3,title:'Go get it',content:'blah blah blah'},
          
     ]
}
const projectReducer = (state=initialState,action)=>{
     switch (action.type){
          case 'CREATE_PROJECT':
               console.log('created project',action.project)
               return state;
               // break;
          case 'CREATE_PROJECT_ERROR':
               console.log('create project error', action.error)  
               return state   
          default: return state     
     }
   
 
}

export default projectReducer