
import React from "react";

console.log("Hii - Hello");

function App() {

  const [todos, useTodos] = React.useState(
    {
      title: "go to gym",
      description: "there is a gym",
    }
  );
  console.log("Hii");

  setInterval(() => {

    useTodos({
      title: "go to gym",
      description: "ajhdgfagajsdgfjhasdgkfagsdfagk",
    })

  }, 1000);

  console.log("hello");

  return (
    <div>
      {todos.title}
      {todos.description}
    </div>
  )
}


/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const todos = [{
//   title: "Go to gym",
//   description: "Got to gym at 7 - 9 Pm",
//   id: 1
// }, {
//   title: "Go to gym",
//   description: "Got to gym at 7 - 9 Pm",
//   id: 2
// }]

// let todo = {
//   title: "Go to gym",
//   description: "Got to gym at 7 - 9 Pm",
//   id: 1
// }

function App() {
  const [todo, setTodo] = useState({
    title: "Go to gym",
    description: "Got to gym at 7 - 9 Pm",
    id: 1
  });

  setInterval(() => {
    setTodo({
      title: "Go to market",
      description: "going market is taff task!!!!",
      id: 1
    })
  }, 2000);

  return (
    <div>
      <h2>Hii There</h2>
      {todo.title}
      {todo.description}
      {todo.id}

      <PersonName firstName={todo.title + "  "} lastName={"Deskmukh"}></PersonName>

    </div>
  )
}

function PersonName(props) {
  return (
    <div>
      {props.firstName + "  @@@@@ "}
      {props.lastName}
    </div>
  )

}

*/


export default App
