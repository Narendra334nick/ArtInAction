import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import back from './back.jpg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contactUs';
import About from './components/about';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';



function App() {
  return (
    <div className="App" >
     
        <div className="container">
        <Router>
            <img src={back} className="img" alt="logo" />
           
            <div className="nav-block">
              <NavBar/>
            </div>  
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>

              <Route path='/about'><About/></Route>
              <Route path='/contactus'><Contact/></Route>
              <Route path='/login'><Login/></Route>
              <Route path='/signup'><Signup/></Route>
              <Route path='/profile'><Profile/></Route>



            </Switch>
            <Footer/>
        </Router>  
        </div>
        
     
    </div>
  );
}

export default App;
