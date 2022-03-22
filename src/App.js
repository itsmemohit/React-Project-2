import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/pages/HomePage/Home";
import Login from "./Components/pages/Login/Login";
import Navbar from "./Components/pages/Navbar";
import Products from "./Components/pages/Products/Products";
import Services from "./Components/pages/Services/Services";
import Signup from "./Components/pages/SignUp/SignUp.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
