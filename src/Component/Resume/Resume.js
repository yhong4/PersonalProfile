import React, { Component } from 'react';
import '../../Css/Resume.css';
import Item from './Item';


const educationItem = [
    {
        name:'MSc. Computer Science',
        startTime:'From 2016 -',
        endTime:'2018',
        description:'University of Melbourne'
    },
    {
        name:'MSc. Information, production and system technology',
        startTime:'From 2013 -',
        endTime:'2015',
        description:'Waseda University in Japan'
    },
    {
        name:'BSc. Software engineering',
        startTime:'From 2010 -',
        endTime:'2014',
        description:'Sichuan University in China'
    }
]

const projectItem = [
    {
        name:'Pizza Creator',
        startTime:'From 08/2018 -',
        endTime:'08/2018',
        description:'A pizza order page that can choose topping and submit order form.'
    },
    {
        name:'Tesla Range Calculator',
        startTime:'From 08/2018 -',
        endTime:'08/2018',
        description:'A range calculator that can compute the range depending on temperature, car type, wheel size and state of air condition'
    },
    {
        name:'A Social Media Platform for Infectious Disease ',
        startTime:'From 2017 -',
        endTime:'2018',
        description:'An entire Twitter data analysis system for infectious disease detection using machine learning and nature language processing.'
    }
]

export default class Resume extends Component {
    constructor(props){
        super()
        this.state={
            educationItem:[],
            projectItem:[]
        };
 
    }

    componentDidMount(){
        this.setState({
            educationItem:[...educationItem],
            projectItem:[...projectItem]
        })
    }
  
    render(){
    
        return (
            <div className='resume-subpage'>
            <div className='resume-page'>
                <div className='resume-page-inner'>
                    <div className='resume-header'>
                        <h2 className='resume-page-title'>Resume</h2>
                    </div>
                    <div className='resume-content'>
                        <div className='resume-block'>
                            <div className='block-title'>
                                <h3>Education</h3>
                            </div>
                            <div className='block-timeline'>
                                <Item 
                                    timelineItem = {this.state.educationItem}
                                />
                            </div>
                        </div>
                        <div className='resume-block'>
                            <div className='block-title'>
                                <h3>Project</h3>
                            </div>
                            <div className='block-timeline'>
                                <Item 
                                    timelineItem = {this.state.projectItem}
                                />
                            </div>
                        </div>
 
                    </div>
                    <div className='skill-block'>
                        <div className='skill-title'>
                            <h3>Skills</h3>
                        </div>
                        <div className='skill-info'>
                            <div>
                                <h4>HTML5</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage skill-html'></div>
                                </div>
                            </div>
                            <div>
                                <h4>CSS3</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage skill-css'></div>
                                </div>
                            </div>
                            <div>
                                <h4>JavaScript(ES6)</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage skill-javascript'></div>
                                </div>
                            </div>
                            <div>
                                <h4>React</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage skill-react'></div>
                                </div>
                            </div>
                            <div>
                                <h4>Python</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage skill-python'></div>
                                </div>
                            </div>
                            <div>
                                <h4>Data analysis</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage skill-data'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

