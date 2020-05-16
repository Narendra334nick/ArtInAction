import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
export class login extends Component {
        constructor(props){
            super(props);
            this.state = {
                username:"",
                password:""
            }
        }
       

        handlechange = (event) =>{
            let name = event.target.name;
            let value = event.target.value;

            this.setState({
                [name] : value
            })
        }

        login = async(event)=>{
            event.preventDefault();
            
            const payload = {
                username:this.state.username,
                password:this.state.password
            }

            if(payload.username==="" || payload.password===""){
                alert("Enter Input Fields Properly")
            }else{
                const resolve = await fetch('https://aia-ux.herokuapp.com/login',{
                    method:'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                })

                const data = await resolve.json();
                localStorage.setItem('jwt',JSON.stringify(data))
                
            

                this.setState={
                    username:"",
                    password:""
                }
               
            }   
        }

    render() {
        return (
            <div className="outer">
                <div className='inner'>
                    <div className="login">
                        <span style={{color:"black",fontFamily:" 'Times New Roman', Times, serif"}}><h2>login Here</h2></span>
                        <input id='email'type="email" className="login-input" placeholder="UserName" name='username' value={this.state.username} onChange={this.handlechange}/>

                        <input type="password" className="login-input" placeholder="password" name="password" value={this.state.password} onChange={this.handlechange}/>

                        <button type = 'submit' className="login-btn" onClick={this.login}>Login</button>
                    </div>
                </div>
             </div>
        )
    }
}

export default login
