import React from 'react';
import './contacts.css';
import back from '../back.jpg';

export default function contactUs() {
    return (
        <div className='o-outer'>
            <div className='i-inner'>
                <div className='i-image'>

                </div>
                <div className='i-information'>
                    <ul type='none'>
                        <li>
                            <span className='i-heading'>
                            Narendra Pratap Singh
                            </span>
                        </li>
                        <li>npratapsingh999@gmail.com</li>
                        <li>8439723546</li>
                        <li>Indra Nagar</li>
                        <li>Agra,Uttar Pradesh</li>
                       

                    </ul>
                </div>
                <div className='i-form'>
                    
                    <ul type='none'>
                        <li><h3>Say Hello :-)</h3></li>
                        <li>Enter Your Name*</li>
                        <li><input type='text' className="i-input" placeholder='Name'></input></li>
                        <li>Enter Your Email*</li>
                        <li><input  className="i-input" type='email' placeholder='Email'></input></li>
                        <li>Enter Your Subject*</li>
                        <li><input  className="i-input" type='text' placeholder='Subject'></input></li>
                        <li>Enter Your Message*</li>
                        <li><textarea className='i-text'placeholder='Enter Your Message'></textarea></li>
                        <li><button className='i-button' type='button'>Submit</button></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
