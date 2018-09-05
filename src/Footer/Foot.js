import React, { Component } from 'react';
import '../Css/Foot.css';

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className='foot'>
                     © 2018 All rights reserved. Designed by <span>Yang Hong</span>
                </div>
            </footer>
        )
    }
}