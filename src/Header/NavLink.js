import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class NavLink extends Component {
    render(){
        return(
            <li>
                <Link {...this.props} activeClassName="active"/>
            </li>
        )
    }
}