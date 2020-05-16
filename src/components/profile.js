import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import AddArt from './addart';
import MyArt from './myart'; 
import './profile.css'
import ProNav from './proNav'

export class profile extends Component {
    
  
    logout(){
        localStorage.clear();
    }

    render() {
        return (
            <div className='outer-div-p'>
                <div className='inner-div-p'>

                    <Router> 
                    <ProNav/>
                        
                        <Switch>
                            <Route exact path='/profile'><MyArt/></Route>
                            <Route exact path='/profile/addart'><AddArt/></Route>
                        </Switch>

                    </Router>

                   
                </div>
            </div>
        )
    }
}

export default profile
