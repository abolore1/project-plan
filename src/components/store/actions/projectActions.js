export const createProject=(project)=>{
    return(dispatch, getState,{ getFirebase, getFirestore })=>{
        // asynchronus call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName:profile.firstname,
            authorLastName:profile.lastanme,
            authorId:authorId,
            createdAt:new Date(),
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project})
            dispatch({type:'SET_REDIRECT', payload:"/"})
            // console.log("createProject -> project", project)
            dispatch({type:'CLEAR'})
        }).catch((error)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',error})
        })
       
    }
}  

// npm install -g react-redux-firebase redux-firestore