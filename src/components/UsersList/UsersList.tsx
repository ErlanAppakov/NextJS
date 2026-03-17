import { useEffect } from "react";
import favIcon from '@app/favicon.ico'

export const UsersList=()=>{

    const getUsers=async()=>{
        try{
            let response=await fetch('https://jsonplaceholder.typicode.com/users')
            response=await response.json()
        }catch(error){
            console.log(error);
            
        }
        useEffect(()=>{
            getUsers()
        },[])
    }
    return(
        <div>
            в
        </div>
    )
}