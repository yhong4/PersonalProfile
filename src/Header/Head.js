import React, { Component } from 'react';
import '../Css/Head.css';
import NavLink from './NavLink';


export default class Head extends Component{
    render()
        {
            return(
                <header className='header'>
                    <div className='header-content'>
                        <div className='site-title'>
                            <div>Yang <span>Hong</span></div>
                        </div>
                        <div className='site-nav'>
                            <ul className='nav-menu'>
                                <NavLink to="/home">Home</NavLink>
                                <NavLink to="/resume">Resume</NavLink>
                                <NavLink to="/blog">Blog</NavLink>                            
                                <NavLink to="/service">Service</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </ul>        
                        </div>
                    </div>
                </header>
        )
    }
} 