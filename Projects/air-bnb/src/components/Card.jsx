import React from "react";
import user1 from '../images/katie-zaferes.png'
import star  from '../images/star.png'
const Card = ()=>{
    return(
        <div className="card">
             <img 
                src={user1} 
                alt="katie-zaferes.png" 
                className="card--image"
             />
             <div className="card--stats">
                <img 
                    src={star} 
                    alt="star" 
                    className="card--star"
                />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
             </div>
             <h2>Life Lesson with Katie Zaferes</h2>
             <p><span>From $136/Person</span></p>
        </div>
    )
}

export default Card;