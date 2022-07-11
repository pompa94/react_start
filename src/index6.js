
import React from "react";
import ReactDOM from "react-dom";

import './index.css'
import Pic from './logo.svg'

import sample01 from "./component/sample01";
import sample02 from "./component/sample02";
import sample03 from "./component/sample03";

function HelloClass({title,color,room,num}){
  return(
    <>
    <h1>{title}</h1>
    <h2 
    style={
      {
      color:'red',
      fontSize:'50px',
      backgroundColor:'#000',
      textAlign:'center'
      }
    }
    >{color}</h2>
    <p>{room}</p>
    <p>{num}</p>
    <p><img 
    src={Pic} 
    alt="상세이미지" 
    style={
      {width:'200px',
    border:'1px solid red'}
    }
    />
    </p>
    
    </>
  )
}


const root = document.querySelector('#root')

ReactDOM.render(
  <HelloClass
  title="it"
  color="red"
  room="react"
  num={10} />,
  root
)