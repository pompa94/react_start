//import 
import React from "react";
import ReactDOM from "react-dom";

function App(){
  return(
   <>
    <h1 id="main">welcome</h1>
    <h2 className="sub" name={5}>welcome2</h2>
    </>
    // <div>
    // <h1>welcome</h1>
    // <h2>wel2</h2>
    // </div>
  )   
}

//exprot 
const root = document.querySelector('#root')

ReactDOM.render(
  <App />,
  root
)