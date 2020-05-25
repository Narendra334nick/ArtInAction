import React, { Component } from 'react'
import './myart.css';
export class myart extends Component {

    constructor(props){
        super(props);
        this.state={
            isloaded:false,
            items:[]
        }
    }

    delete=(event)=>{
        event.preventDefault();
        const data = JSON.parse(localStorage.getItem('jwt'));
        const payload = {
            id:event.target.id,
            username:data.username
        }

        //console.log(payload);
       fetch('https://aia-ux.herokuapp.com/delete/',{
           method:'POST',
           headers:{
               'Content-Type':'application/json',
               Accept:'application/json'
           },
           body:JSON.stringify(payload),
       })
    }

    load=()=>{

        const user = JSON.parse(localStorage.getItem('jwt'));
        // console.log(user);
        if(user){
            fetch('https://aia-ux.herokuapp.com/getUser',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    Authorization: `Bearer ${user.token}`
                    // Authorization: `Bearer ${userData.token}`,
                }
            }).then((res)=>{
                return res.json()
            }).then((res)=>{
                this.setState({
                    isloaded:true,
                    items:res.doc
                })
            })
        }else{

            alert('You are not logged-In');
            console.log('You are not logged-In')
        }

       
       
    }

    render() {
        const {error,isloaded,items} = this.state
        return(
             <div className='my-div'>
                        <div className="span-click" onClick={this.load}>Show My ArtWork</div>
                        <ul type="none">
                        {items.map(item => (
                        <li key={item._id}>
                            <div>
                               
                                {/* retriving Array Elements */}
                                {item.userArt.map(item=>(
                                <div className='div-align'>    
                                    <div id={item._id}>
                                        <img style={{height:'200px',width:'300px',borderRadius:'3px'}} src={`https://aia-ux.herokuapp.com/image/${item.filename}`}></img>
                                    </div>
                                    <div className='showInfo'> 
                                         
                                        <div className="show-text">
                                        <h3>Desciption:-</h3>{item.desc}</div>

                                        <div className='btn-align'>  <button className="btn-del" type='submit' id= {item._id} onClick={this. delete}>Delete</button>
                                        </div>
                                    </div>
                                </div>    
                                ))}
                                
                            </div> 
                        </li>
                    ))}
                        </ul>

                   
         </div>   
        )
    }
}

export default myart
