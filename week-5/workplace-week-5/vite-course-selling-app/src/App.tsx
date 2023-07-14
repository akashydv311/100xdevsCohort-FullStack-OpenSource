
function App() {
  return <ShowMessage textName={" From Harkirat 100xdevs"} />;
}

function ShowMessage(props) {
  return (
    <div>Hii there! i am learning react {props.textName}!</div>
  )
}
export default App