import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/pages/Navbar';
import Home from './Components/pages/HomePage/Home';
import Services from './Components/pages/Services/Services';
import Products from './Components/pages/Products/Products';
import Signup from './Components/pages/SignUp/SignUp.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
