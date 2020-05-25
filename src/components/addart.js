import React, { Component } from 'react'
import './addart.css';

export class addart extends Component {
    
    
    post = e =>{
        e.preventDefault()
        const jwt = JSON.parse(localStorage.getItem('jwt'));
        // console.log(jwt);

        const file = document.getElementById('image').files
        console.log(file);
        const desc = document.getElementById('desc').value
        const formData = new FormData()
        formData.append('img',file[0])


       
       
        if(jwt){

            const payload = {
                token:jwt.token,
                username:jwt.username,
                filename:file[0].name,
                desc:desc
            }
             // console.log(payload)
            fetch('https://aia-ux.herokuapp.com/image',{
            
                method: 'POST',
                body: formData,
    
            }).then(res=>{
                document.getElementById('img').innerHTML = "Image uploaded SuccessFully check myArt";
                console.log('success');
            })
            .catch(function (err) {
                document.getElementById('img').innerHTML = "Error Occured";
            });
    
            //sending data to addImage
           fetch('https://aia-ux.herokuapp.com/addImage',{
                
                method: 'POST',
                headers: {
                    // Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
        }else{
            alert('You are not logged-in');
            console.log('You are not logged-in');
        }

       
    }

    render() {
        const stye = {
            // border:'1px solid yellow',
            marginTop:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:"center"
        }
        return (
            <div style={stye}>
               <div className='my-add-art'>
                    <input className="img-input"type='file' id='image'/>
                    <textarea className="login-input-img" id="desc" placeholder="Tell me about your work"></textarea><br/>
                    <button  className="login-btn" onClick={this.post} type ='submit'>Upload</button><br/>
                    <div id='img'>

                    </div>
               </div>
            </div>
        )
    }
}

export default addart
