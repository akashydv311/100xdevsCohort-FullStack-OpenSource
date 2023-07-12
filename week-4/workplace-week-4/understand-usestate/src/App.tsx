import React from "react";

function App() {
  const [todoForToday, setTodoForToday] = React.useState(
    {
      title: "Go t gym ",
      description: "Timming for going to gym is 8-9 PM"
    }
  );
  const [counter, setCounter] = React.useState(Math.random());
  console.log(todoForToday);
  console.log(counter);
  let nonStateVariable = Math.random();
  console.log(nonStateVariable);

  setTimeout(() => {
    setTodoForToday(
      {
        title: "Go t class " + Math.random(),
        description: "Timming for going to class is 8-9 PM"
      }
    );
  }, 5000);

  return (
    <div>
      Hello, Fox <br />
      {todoForToday.title} <br />
      {todoForToday.description}
    </div>
  )
}

export default App
