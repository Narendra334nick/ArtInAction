import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class signup extends Component {

    state = {
        name:"",
        dob:"",
        username:"",
        password:""
    }

    handlechange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name] : value
        })
        // console.log(this.state);
    }


    signup = async(event)=>{
        event.preventDefault();


        const payload = {
            name:this.state.name,
            dob:this.state.dob,
            username:this.state.username,
            password:this.state.password
        }

        if(payload.name==='' || payload.dob==='' || payload.username==='' || payload.password===''){
            alert('Enter Input Fields Properly')
        }else{
                fetch('http://aia-ux.herokuapp.com/signup',{
                method:'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
                }).then(resolve=>{
                    console.log('successs')
                }).catch(err=>{
                    if(err) console.log(err);
            })
        }
    }


    render() {
        return (
            <div className='outer'>
            <div className='inner'>
               <div className="login">
                <span style={{color:"black",fontFamily:" 'Times New Roman', Times, serif"}}><h2>signUp Here!!</h2></span>
                            <input type="text" className="login-input" placeholder="Name"  name="name" value={this.state.name} onChange={this.handlechange}/>

                            <input type="text" className="login-input" placeholder="DOB"  name="dob" value={this.state.dob} onChange={this.handlechange}/>

                            <input type="text" className="login-input" placeholder="Email"  name="username" value={this.state.username} onChange={this.handlechange}/>
                           
                            <input type="password" className="login-input" placeholder="Password"  name="password" value={this.state.password} onChange={this.handlechange}/>
                           
                            <button type = 'submit' className="login-btn" onClick={this.signup}><Link to="/login">Signup</Link></button>

               </div>

            </div>
        </div>
        )
    }
}

export default signup
