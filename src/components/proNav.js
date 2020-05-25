import React, { Component } from 'react'
import { Link} from "react-router-dom";
import './commonElements.css'

export class proNav extends Component {

    logout(){
        localStorage.clear();
    }

    render() {
        return (
            
                <div style={{height:'60px',width:'100%',display:'flex',                alignItems:'center',background: 'rgba(12, 12, 12, 0.5)'}}>
                            <span id="login-link"><Link to='/profile'>MyArt</Link></span>
                            <span id='login-link'><Link to='/profile/addart'>Add Art</Link></span>
                            <span  id = 'login-link'onClick={this.logout}><Link to="/login">Logout</Link></span>

                </div>

        
        )
    }
}

export default proNav
