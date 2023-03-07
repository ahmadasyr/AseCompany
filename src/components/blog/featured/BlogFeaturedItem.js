import React, { Component } from 'react'
import PropTypes from "prop-types";
import { BlogConsumer } from '../../../context'
import { Link } from 'react-router-dom'
import { FiUser, FiCalendar } from 'react-icons/fi';

export default class BlogFeaturedItem extends Component {
    render() {
        const { id, title, created_at, images } = this.props.blog;
        return (
            <BlogConsumer>
                {(value) => (
                    <div className="col-lg-4 column-td-6">
                        <div className="card-item">
                            <div className="card-img-box">
                                <img src={images?.[0]} alt="Blog Featured" />
                            </div>
                            <div className="card-content">
                                {/* <h4 className="card-meta"> <FiClock className="clock" /> {created_at.substring(0, 10)}</h4> */}
                                <h3 className="card-title">
                                    <Link
                                        to="/blog-details" onClick={() =>
                                            value.handleDetails(id)
                                        }>{title}</Link>
                                </h3>
                                <ul className="list-items">
                                    <li className="card-dot-active">
                                        <FiUser className="user" />By Ase Group</li>
                                    <li><FiCalendar className="calendar" /> {created_at.substring(0, 10)}</li>
                                </ul>
                                <Link to="/blog-details"
                                    className="template-btn btn-layout-small" onClick={() =>
                                        value.handleDetails(id)
                                    }>read more</Link>
                            </div>
                        </div>
                    </div>
                )}
            </BlogConsumer>
        )
    }
}

BlogFeaturedItem.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        created_at: PropTypes.string,
        images: PropTypes.object,
    }).isRequired
    // id, title, created_at, images
};