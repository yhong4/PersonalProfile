import React, { Component } from 'react';
import '../../Css/Blog.css'
import BlogItem from './BlogItem';

export default class Blog extends Component {
    render(){
        return (
            <div className='blog-subpage'>
                <div className='blog-page'>
                    <div className='blog-page-inner'>
                        <div className='blog-page-header'>
                            <h2 className='blog-name-title'>
                                Blog 
                            </h2>
                        </div>
                        <div className='blog-content'>
                            <div className='blog-grid'>
                                <BlogItem />
                                <BlogItem />
                                <BlogItem />
                                <BlogItem />
                                <BlogItem />
                                <BlogItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}