
import React from "react";

function App() {
  const [todoForToday, setTodoForToday] = React.useState([
    {
      title: "go to gym",
      description: "timming for gym is 5-6",
      id: 1,
    }
  ]);

  setInterval(() => {
    setTodoForToday(
      {
        title: "go to class please " + Math.random(),
        description: "timming for gym is 5-6",
        id: 1,
      }
    )
  }, 1000);

  return (
    <div>
      {todoForToday.title}
      <br />
      {todoForToday.description}

    </div>
  )

}

export default App;

// *******************************************
/*
import React from "react";

console.log("Hii - Hello");

function App() {
  const [todos, useTodos] = React.useState([
    {
      title: "go to gym",
      description: "timming for gym is 5-6",
      id: 1,
    },
    {
      title: "go to class",
      description: "go to class 6-7",
      id: 2,
    }
  ]);

  return (
    <div>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )

}

function Todo(props) {
  return <div>
    {props.title} <br />
    {props.description}
  </div>
}

export default App;
*/

// ************************************

// setInterval(() => {
//   useTodos({
//     title: "go to gym",
//     description: "ajhdgfagajsdgfjhasdgkfagsdfagk",
//   });
// }, 1000);



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


