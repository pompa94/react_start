import React from "react";
import ReactDOM from "react-dom"


// const book = {
//   title : 'react',
//   price : '30000원',
//   room : 'A장소'
// }

// function ReactBook(){
//   return(
//     <dl id="main" className="allbook" name={25}>
//       <dt>책의제목</dt>
//       <dd>{book.title}</dd>
//       <dt>가격</dt>
//       <dd>{book.price}</dd>
//       <dt>세미나실</dt>
//       <dd>{book.room}</dd>
//     </dl>
//   )
// }


// props보다 밑에 방식을 더 많이 사용함
function ReactBook({title,price,room}){
  // console.log(props)
  return(
    <dl id="main" className="allbook" name={25}>
      <dt>책의제목</dt>
      <dd>{title}</dd>
      <dt>가격</dt>
      <dd>{price}</dd>
      <dt>세미나실</dt>
      <dd>{room}</dd>
    </dl>
  )
}


const root = document.querySelector('#root')

ReactDOM.render(
  <ReactBook 
  title="react"
  price="30000원"
  room="A강의실" />,
  root
)