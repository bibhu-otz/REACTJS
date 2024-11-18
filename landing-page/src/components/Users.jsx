import React, { useEffect } from "react";
import { User } from "./User";
import { useState } from "react";


export const Users =()=>{
    const [users,setUsers] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
},[])
    return(<>
    {console.log(users)}
    {Array.isArray(users) && users.map((user) => (
            <User props={user}/>
          ))
      
    }
    </>
        
    );
}