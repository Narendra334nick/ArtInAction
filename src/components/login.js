import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

export class login extends Component {
        constructor(props){
            super(props);
            this.state = {
                username:"",
                password:"",
                isLoggedIn:false
            }
        }
       

        handlechange = (event) =>{
            let name = event.target.name;
            let value = event.target.value;

            this.setState({
                [name] : value
            })
            // console.log(this.state);
        }

        login = async (event)=>{
            event.preventDefault();
            
            const payload = {
                username:this.state.username,
                password:this.state.password
            }

            if(payload.username==="" || payload.password===""){
                alert("Enter Input Fields Properly")
            }else{
                // console.log(payload);
                 await fetch('https://aia-ux.herokuapp.com/login',{
                    method:'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                })
                .then((res)=>{
                    return res.json()
                })
                .then((data)=>{
                    // console.log(data);
                    localStorage.setItem('jwt',JSON.stringify(data))
                    this.setState({
                        username:'',
                        password:"",
                        isLoggedIn:true
                    })
                    document.getElementById('showMsg').innerHTML=`${data.message}`;
                })
                .then(()=>{
                   setTimeout(()=>{
                    this.props.history.push('/profile');
                   },1000);
                })
                .catch((err)=>{
                    console.log('err');
                    document.getElementById('showMsg').innerHTML=`Invalid User Credantials`;
                })
            }   
        }

    render() {
        return (
            
            <div className="outer">
                <div className='inner'>
               
                    <div className="login">
                        <span style={{color:"black",fontFamily:" 'Times New Roman', Times, serif"}}><h2>login Here!!</h2></span>
                        <input id='email'type="email" className="login-input" placeholder="UserName" name='username' value={this.state.username} onChange={this.handlechange}/>

                        <input type="password" className="login-input" placeholder="password" name="password" value={this.state.password} onChange={this.handlechange}/>

                        <button type = 'submit' className="login-btn" onClick={this.login}> Login</button>
                    </div><br/>
                    <div id='showMsg'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(login)
