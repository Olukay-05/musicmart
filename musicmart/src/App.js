import Login from "../src/components/pages/login/Login";
import SignUp from "./components/pages/signup/SignUp";

import Home from "../src/components/pages/home/Home"

import { Routes, Route } from "react-router-dom";
import './App.scss';
import Navigation from "./routes/navigation/Navigation";
import Subscription from "./components/pages/subscription/Subscription";
import PaymentForm from "./components/pages/payment/PaymentForm";
import Library from "./components/pages/library/Library";
import SubscriptionPlan from "./components/pages/subscription-plans/SubscriptionPlan";

function App() {
  return (
    // <div className="App">
    //   <Login />
    //   <SignUp />
    // </div>
    <Routes>
      <Route path="/" element={ <SubscriptionPlan /> } > 
        <Route index element={ <Home /> }/>
        <Route path="Login" element={ <Login /> }/>
        <Route path="SignUp" element={ <SignUp /> }/>
        <Route path="Subscription" element={ <Subscription /> } />
            {/* <Route path="SubcriptionPlan" element={ <SubscriptionPlan /> } />
          <Route /> */}
        <Route path="PaymentForm" element={ <PaymentForm /> }/>
        <Route path="Library" element={ <Library /> }/>
        {/* <Route path="SubscriptionPlan" element={ <SubscriptionPlan /> }/> */}
        
      </Route>
    </Routes>

  );
}

export default App;
