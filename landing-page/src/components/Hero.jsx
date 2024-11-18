import React from "react";

export const Hero =()=>{
    return (<>
     <div className="container-fluid ">
        <div className="row d-flex">
          <div className="col align-middle">
            <div className="px-2 py-2">
            <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=900&t=st=1667037491~exp=1667038091~hmac=7c71ea8afc8f3cc8065c5ccc05d105e3c8a7b76f0133016cb210a7882dc19611" className="img-fluid" alt="..."/>
            </div>
          </div>
          <div className="col">
            <div className="px-5 py-5 mt-5">
              <div className="px-2 py-2 align-middle">
              <h4>Get all your needs Here</h4>
              <p> An online learning and teaching marketplace with over 204000 courses and 54 million students. Learn programming, marketing, data science and more.</p>
              </div>
              <div className="px-2 py-2">
                <button type="button" className="btn btn-outline-primary">Checkout Our Courses</button>
              </div>
            </div>
          </div>
      </div>
      </div>
    </>);
}