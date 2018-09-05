import React, { Component } from 'react';
import '../../Css/Home.css';
import '../../Css/App.css';
import photo from '../../images/dog.jpg';

import '../../../node_modules/font-awesome/css/font-awesome.css'
export default class Home extends Component {
    render(){
        return (
            <div className='home-page'>
                <div className='home-page-inner'>
                    <div className='home-header'>
                        <div className='home-photo'>
                            <img src={photo} width={280} height={280} alt='profile img'/>
                        </div>
                        <div className='home-title'>
                            <h1>Yang Hong</h1>
                            <div className='career'>Frontend-developer </div>
                            <div className='social-link'>
                                <a href="#"><i class="fa fa-phone"></i></a>
                                <a href="https://web.wechat.com/"><i class="fa fa-wechat"></i></a>
                                <a href="https://github.com/yhong4/"><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='home-content'>
                        <div className='introduction-wrap'>
                            <div className='introduction'>
                                <div className='introduction-title'>About  <span>Me</span></div>
                                <div className='introduction-description'>
                                    Hello! I’m Yang Hong. Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.
                                </div>
                            </div>
                        </div>
                        <div className='profile-wrap'>
                            <div className='profile'>
                                <ul className='info-list'>
                                    <li><span className='title'>Age</span><span className='value'>26</span></li>
                                    <li><span className='title'>Residence</span><span className='value'>Australia</span></li>
                                    <li><span className='title'>Address</span><span className='value'>20/15-19 O'Connell Street, Melbourne</span></li>
                                    <li><span className='title'>E-mail</span ><span className='value'><a href='mailto:yhong.it@gmail.com'>yhong.it@gmail.com</a></span></li>
                                    <li><span className='title'>Phone</span><span className='value'>+0450101660</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}