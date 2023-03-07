import React from 'react'
import BlogFeaturedItem from '../featured/BlogFeaturedItem'
export default function BlogGridAll(props) {   
    const blogs = props.blogs;
    return (
        <>
                    {/* <BlogConsumer>
                        {value => {
                            return value.blogs.map(blog => {
                                return <BlogFeaturedItem key={blog.id} blog={blog} />
                            })
                        }}
                    </BlogConsumer> */}
                {blogs.map(blog => {
                    return <BlogFeaturedItem key={blog.id} blog={blog} />
                })}
        </>
    )
}
