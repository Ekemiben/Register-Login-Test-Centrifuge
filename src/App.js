
import './App.css';
import SignIn from './components/Signin/Signin';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Successfull from './components/Successfull/Successfull';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<Signup />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/success' element={<Successfull />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
