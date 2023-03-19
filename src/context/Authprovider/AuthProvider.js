import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const Authcontext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
     
    

    
     

    const providerLogin = (providerLogin) =>{
        return signInWithPopup(auth , providerLogin)
    } 
//for logout
    const logout = () =>{
        return signOut(auth)

    }



    useEffect(() =>{
         const unsubscribe = onAuthStateChanged(auth , (currentuser) =>{
            console.log('user state changed' , currentuser)
            setUser(currentuser)
         });
         return () =>{
            unsubscribe();
         }
    },[])


    const authinfo = { user , providerLogin , logout}
    return (
        
            <Authcontext.Provider value={authinfo}>
              
                {children}

            </Authcontext.Provider>
            
    
    );
};

export default AuthProvider;