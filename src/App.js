import React, { Component } from 'react';
import './Css/App.css';


import {TransitionGroup, CSSTransition} from 'react-transition-group';

import {BrowserRouter as Router,Route,Redirect, Switch} from 'react-router-dom';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Resume from './Component/Resume/Resume';
import Service from './Component/Services/Service';
import Contact from './Component/Contact/Contact';

import Header from './Header/Head';

import './Css/App.css';

class App extends Component {
  render() {
    return (
      <div className='body'>
        <div className='page'>  
          <Header />
          <div className='main'>
            <div className='wrap'>
              <div className='subpage'>
                <switch>
                  <Redirect from='/' to='/home' />
                  <Route path='/home' component={Home} />
                  <Route path='/blog' component={Blog} />
                  <Route path='/resume' component={Resume} />
                  <Route path='/service' component={Service} />
                  <Route path='/contact' component={Contact} />          
                </switch>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
