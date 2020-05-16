import React, { Component } from 'react'

export class addart extends Component {
    
    
    post = e =>{
        e.preventDefault()
        const jwt = JSON.parse(localStorage.getItem('jwt'));
        // console.log(jwt);

        const file = document.getElementById('image').files
        const desc = document.getElementById('desc').value
        const formData = new FormData()
        formData.append('img',file[0])


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
            // document.getElementById('img')
            // .setAttribute('src', `https://aia-ux.herokuapp.com/image/${file[0].name}`)
            console.log('success');
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
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
    }

    render() {
        const stye = {
            border:'1px solid yellow'
        }
        return (
            <div style={stye}>
               
                    <input type='file' id='image'/><br/>
                    <input type="text" id="desc" placeholder="Tell me about your work"></input><br/>
                    <button onClick={this.post} type ='submit'>Upload</button><br/>
               
            </div>
        )
    }
}

export default addart
