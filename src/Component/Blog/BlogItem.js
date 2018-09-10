import React,{Component} from 'react';
import '../../Css/Blog.css'
import image from '../../images/blog/blog_post_1.jpg'

export default class BlogItem extends Component{
    render(){
        return(
            <div className='blog-block'>
                <div className='blog-media'>
                    <a href='#'>
                        <img className='blog-image' src={image} alt='blog image'/>
                        <div className='blog-image mask'></div>
                        <div className='blog-date'>
                            <div className='day'>6</div>
                            <div className='month'>Dec</div>
                        </div>
                    </a>
                </div>
                <div className='blog-info'>
                    <a href='#' className='blog-category'>Travel</a>
                    <a id='blog-title' href='#' className='blog-title'>Bootstrap is the Most Popular Framework</a>
                </div>
            </div>
        )
    }
}