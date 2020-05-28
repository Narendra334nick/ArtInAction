import {Link} from 'react-router-dom';
import '../components/navBar.css';
import React, { Component } from 'react'

export class navBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="navBar">
                <div className="nav-elements1">
                        <span className = "aia">AIA</span>
                        <span className='title'>ArtInAction</span>
                        
                </div>

            <div className="nav-elements2">
                    <span><Link to='/'>Home</Link></span>
                    {/* <span><Link to='/about'>About</Link></span> */}
                    <span><Link to = '/contactus'>ContactUs</Link></span>
                    <span><Link to="/signup">SignUp</Link></span>
                    <span><Link to="/login">Login</Link> </span>
                    <span><Link to='/profile'>Profile</Link></span>
                    
            </div>
        </div>
        )
    }
}

export default navBar
