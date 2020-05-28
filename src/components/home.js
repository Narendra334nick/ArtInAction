import React, { Component } from 'react'

import '../components/home.css';

export class home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            items:[]
        };
    }

    componentDidMount(){
        
        var data=fetch('https://aia-ux.herokuapp.com/',{
            method:'GET',
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then((res)=>{
            return res.json()
        }).then(data=>{
           this.setState({
               isLoaded:true,
               items:data.document
           })
        //    console.log(this.state.items)
        })
        
       
    }

    render() {
        const {error,isLoaded,items} = this.state;

        if(error){
            return(
                <div className='outer-div'>
                    <div className='inner-div'>
                        Error: {error.message}
                    </div>
            </div>
            )
        }else if(!isLoaded){
            return(
                <div className='l-outer-div'>
                    <div className='l-inner-div'>
                        <div class="loader"></div>
                    </div>
                </div>
            )
        }else{

            return (
                <div className='outer-div'>
                   
                   <div className='inner-div'>
                    <ul type="none"> 

                    {items.map(item => (
                        <li key={item._id}>
                            
                            {item.userArt.map(i=>(
                                <div className="main-div">
                                   
                                    <div className='show-Image'>
                                        
                                            <div id={i._id}>
                                                <img style={{height:'300px',width:'400px',borderRadius:'5px'}} src={`https://aia-ux.herokuapp.com/image/${i.filename}`}></img> 
                                            </div>
                                    

                                    </div>
                                    
                                    <div className='show-Info'>
                                        
                                        <div className='textInfo'>
                                        <h3>Desciption:-</h3>
                                            {i.desc}
                                        </div>
                                        <div className="nameInfo">
                                        <span className='author-name'>~By {item.name}</span>
                                        </div>
                                       
                                    </div>
                                
                                </div>
                            ))}

                            
                           
                        </li>
                    ))}
                    </ul>

                    </div>
                </div>
            )
        }
        
    }
}

export default home
