
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Compnaylogo from "./Compnaylogo";
import Rootpage from "./Rootpage"
import Signin from "./Signin";
import Signup from "./Signup";

function App() {

  return (
    <div>
      <Compnaylogo />
      <Router>
        <Routes>
          <Route exact path='/' element={< Rootpage />}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
          <Route exact path='/signin' element={< Signin />}></Route>
          <Route exact path={'/*'} element={"404 Not Found"}></Route>
        </Routes>
      </Router>
    </div>

  );
}
export default App
