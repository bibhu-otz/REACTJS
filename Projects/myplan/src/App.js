import React, { Component } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan'
class App extends Component{
  state={
    items:[],
    text:""
  }
  handleChange= e =>{
    this.setState({text:e.target.value});
  }
  handleAdd= e=>{
    if(this.state.text !=="")
    {
      const items = [...this.state.items,this.state.text];
      this.setState({items:items,text:""});
    }
  }

  handleDelete=(id)=>{
       const oldItems = [...this.state.items];
       const items = oldItems.filter((element,key)=>{
                if(key !==id)
                {
                  return element;
                }
       });
       this.setState({items:items});
  }
  render(){
    return(
      <div className="container-fluid my-5">
           <div className="row">
                <div className="col-sm-6 mx-auto text-light shadow-lg p-3">
                     <h1 className="text-center">Today's Plan</h1>
                     <div className="row">
                      <div className="col-9">
                      <input type="text" className="form-control" 
                      placeholder="Write Plan Here"
                      value={this.state.text}
                      onChange={this.handleChange}
                      />
                      </div>
                      <div className="col-2">
                        <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>ADD</button>
                      </div>
                       <div className="container-fluid">
                         {/* <ul className="list-inline row m-5">
                           {
                            this.state.items.map((value,i)=>{
                              return <Plan key={i} value={value} id={i} sendData={this.handleDelete}/>
                            })
                           }
                           
                         </ul> */}
                         {/* <Plan/>{console.log(this.state.items)} */}
                         <ul className="list-inline row m-5">
                              <Plan p={this.state.items} sendDelete={this.handleDelete}/>
                         </ul>
                       </div>
                     </div>
                </div>
           </div>
      </div>
    )
  }
}

export default App;
