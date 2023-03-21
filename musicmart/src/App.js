import Login from "../src/components/pages/login/Login";
import SignUp from "./components/pages/signup/SignUp";

import Home from "../src/components/pages/home/Home"

import { Routes, Route } from "react-router-dom";
import './App.scss';
import Navigation from "./routes/navigation/Navigation";

function App() {
  return (
    // <div className="App">
    //   <Login />
    //   <SignUp />
    // </div>
    <Routes>
      <Route path="/" element={ <Navigation /> } > 
        <Route index element={ <Home /> }/>
        <Route path="Login" element={ <Login /> }/>
        <Route path="SignUp" element={ <SignUp /> }/>
        {/* <Route path="" element={ }/> */}
      </Route>
    </Routes>

  );
}

export default App;
