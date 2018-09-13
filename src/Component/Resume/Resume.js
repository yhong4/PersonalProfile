import React, { Component } from 'react';
import '../../Css/Resume.css';
import Item from './Item';


const educationItem = [
    {
        name:'Specialization Course',
        startTime:'From 2018 -',
        endTime:'current',
        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'
    },
    {
        name:'Specialization Course',
        startTime:'From 2018 -',
        endTime:'current',
        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'
    },
    {
        name:'Specialization Course',
        startTime:'From 2018 -',
        endTime:'current',
        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'
    }
]

const projectItem = [
    {
        name:'Specialization Project',
        startTime:'From 2018 -',
        endTime:'current',
        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'
    },
    {
        name:'Specialization Project',
        startTime:'From 2018 -',
        endTime:'current',
        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'
    },
    {
        name:'Specialization Project',
        startTime:'From 2018 -',
        endTime:'current',
        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'
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
                                <h4>Web Design</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage'></div>
                                </div>
                            </div>
                            <div>
                                <h4>Web Design</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage'></div>
                                </div>
                            </div>
                            <div>
                                <h4>Web Design</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage'></div>
                                </div>
                            </div>
                            <div>
                                <h4>Web Design</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage'></div>
                                </div>
                            </div>
                            <div>
                                <h4>Web Design</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage'></div>
                                </div>
                            </div>
                            <div>
                                <h4>Web Design</h4>
                                <div className='skill-info-container'>
                                    <div className='skill-info-percentage'></div>
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

