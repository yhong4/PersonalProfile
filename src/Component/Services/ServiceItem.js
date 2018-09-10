import React, {Component} from 'react'
import '../../Css/Service.css'
export default class ServiceItem extends Component{
    render(){
        return(
            this.props.service.map(item=>{
                return(
                <div className='service-block'>
                    <div className='service-img'>
                        <img src={item.imgUrl} alt='none' />
                    </div>
                    <div className='service-title'>
                        <h4>{item.name}</h4>
                    </div>
                    <div className='service-display'>{item.description}</div>
                </div>
                )
            }
        )
    )
    }
}