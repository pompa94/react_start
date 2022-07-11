import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";



// function ULStr({title,year,text}){
//   return(
//     <>
//     <h1>{title}</h1>
//     <p>{year}</p>
//     <p>{text}</p>
//     </>
//   )
// }



// 클라스로 만들기
class ULStr extends React.Component{
  render(){
    return(
      <>
      <h1>{this.props.title}</h1>
      <p>{this.props.year}</p>
      <p>{this.props.text}</p>
      </>
    )
  }
}


const root = document.querySelector('#root')

ReactDOM.render(
  <ULStr 
  title="작품명"
  year={2001}
  text="설명" />,
  root
)