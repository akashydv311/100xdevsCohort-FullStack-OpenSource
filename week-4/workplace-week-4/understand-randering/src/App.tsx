import React from "react";

console.log("First Time");
let count = 1;
function App() {
  const [todoForToday, setTodoForToday] = React.useState(
    {
      title: "Go t gym ",
      description: "Timming for going to gym is 8-9 PM"
    }
  );

  if (count != 0) {
    setInterval(() => {
      setTodoForToday(
        {
          title: "Go t class " + Math.random(),
          description: "Timming for going to class is 8-9 PM"
        }
      );
    }, 5000);
    count = 0;
    console.log("Called setTimeOut");
  }
  // console.log("hello");


  return (
    <div>
      Hello, Fox <br />
      {todoForToday.title} <br />
      {todoForToday.description}
    </div>
  )
}

export default App
