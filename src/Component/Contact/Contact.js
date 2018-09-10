import React, { Component } from 'react';
import '../../Css/Contact.css';
import NavMap from './GoogleMap';
import '../../../node_modules/font-awesome/css/font-awesome.css'

export default class Contact extends Component {
    render(){
        return (
            <div className='contact-subpage'>
                <div className='contact-page'>
                    <div className='contact-page-inner'
                    >
                        <div className='contact-page-header'>
                            <h2 className='contact-name-title'>
                            Contact
                            </h2>
                        </div>
                        <div className='contact-content'>
                            <div className='get-in-touch-block'>
                                <h3 className='block-title'> 
                                    Get in <span className='title-color'> Touch</span>
                                </h3>
                                <div className='map'>
                                    <NavMap/>
                                </div>
                                <div className='detail-info'>
                                    <ul>
                                        <li>
                                            <div className='info-block'>
                                                <div className='info-icon'>
                                                    <i id='mark' className='fa fa-map-marker'></i>
                                                </div>
                                                <div className='info-text'>Melbourne, Australia</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='info-block'>
                                                <div className='info-icon'>
                                                    <i id='envelope' className='fa fa-envelope'></i>
                                                </div>
                                                <div className='info-text'>yhong.it@gmail.com</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='info-block'>
                                                <div className='info-icon'>
                                                    <i id='phone' className='fa fa-phone'></i>
                                                </div>
                                                <div className='info-text'>+61-450101660</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='info-block'>
                                                <div className='info-icon'>
                                                    <i id='check' className='fa fa-check'></i>
                                                </div>
                                                <div className='info-text'>Freelance Available</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='contact-form-block'>
                                <h3 className='block-title'> 
                                    Contact <span className='title-color'> Form</span>
                                </h3>
                                <form>
                                    <div className='contact-form-info'>
                                        <div className='form-info-input'>
                                            <div className='input-icon'>
                                            <i className='fa fa-user'></i>
                                            </div>
                                            <input id='form-name' className='info-input' type="text" name="name" placeholder='Full Name' required='required' data-error='Name is required'></input>
                                        </div>
                                        <div className='form-info-input'>
                                            <div className='input-icon'>
                                                <i className='fa fa-envelope'></i>
                                            </div>
                                            <input id='form-email' className='info-input' type="email" name="email" placeholder='Email Address' required='required' data-erro='Email is required'></input>
                                        </div>
                                        <div className='form-info-input message-input'>
                                            <div className='input-icon message-icon'>
                                                <i className='fa fa-comment'></i>
                                            </div>
                                            <textarea id='form-message' className='info-input message-box' placeholder='Message for Me' row='4' required='required' data-error='Message is required'></textarea>
                                        </div>
                                        <input type='submit' value='SEND MESSAGE' className='send-button' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}