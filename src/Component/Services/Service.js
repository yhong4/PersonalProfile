import React, { Component } from 'react';
import '../../Css/Service.css'
import ServiceItem from './ServiceItem';
import ClientItem from './ClientItem';
import webImg from '../../images/service/web_design_icon.png'
import photoImg from '../../images/service/photography_icon.png'
import manageImg from '../../images/service/creativity_icon.png'
import advImg from '../../images/service/advetising_icon.png'

const service = [
    {
        imgUrl:webImg,
        name:'Web Design',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
    },
    {
        imgUrl:photoImg,
        name:'Web Design',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
    },
    {
        imgUrl:manageImg,
        name:'Web Design',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
    },
    {
        imgUrl:advImg,
        name:'Web Design',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
    },
]

export default class Service extends Component {
    constructor(props){
        super()
        this.state={
            service:[]
        }
    }

    componentDidMount(){
        this.setState({
            service:[...service]
        })
    }
    
    render(){
        return (
            <div className='service-subpage'>
                <div className='service-page'>
                    <div className='service-page-inner'>
                        <div className='service-page-header'>
                            <h2 className='service-name-title'>
                                Service
                            </h2>
                        </div>
                        <div className='service-content'>
                            <div className='myservice-subsection'>
                                <h3>
                                    My <span>Service</span>
                                </h3>
                                <div className='service-container'>
                                    <ServiceItem 
                                        service = {this.state.service}
                                    />
                                </div>
                            </div>
                            <div className='client-subsection'>
                                <h3>
                                    Clients
                                </h3>
                                <div className='client-container'>
                                    <ClientItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}