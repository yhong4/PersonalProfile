import React, {Component} from 'react'
import '../../Css/Resume.css';
import PropTypes from 'prop-types'



export default class Item extends Component{
    render(){   
        return(
            this.props.timelineItem.map((item => {
                return(
                    <div className='timeline-item'>
                        <h4 className='item-title'>
                            {item.name}                   
                        </h4>
                        <div className='item-period'>
                            {`${item.startTime}${item.endTime}`}
                        </div>
                        <div className='item-description'>
                            {item.description}
                        </div>
                    </div>
                )
            }
        )
    )
    )

    }
}

