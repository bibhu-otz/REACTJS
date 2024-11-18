import { useState } from "react";
import React from "react";

export const User = (props)=>{
console.log(JSON.stringify(props));
const [user,setUser] = useState(props);
   return (
        <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.email}</p>
          <a href="hildegard.org" className="btn org-btn">{props.website}</a>
        </div>
      </div>
   );
}