import React, { Component } from 'react'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'

export default class BannerHome2 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='5DGwOJXSxqg' onClose={() => this.setState({ isOpen: false })} />
                <section className="slider-area banner-area text-center">
                    <div className="single-slide-item slide-bg1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-content">
                                        <div className="section-heading">
                                            <p className="section__meta">Welcome to Costar's Novel Coronavirus Information Center</p>
                                            <h2 className="section__title">What can I do to protect myself and prevent <br /> the spread of disease?</h2>
                                        </div>
                                        <div className="section-description">
                                            <p className="section__desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat est, a labore excepturi<br />  rem sed eius facere error! Dolore in perspiciatis porro dolor debitis Odit quaerat est
                                            </p>
                                        </div>
                                        <div className="btn-box hero-btn-box">
                                            <a href="doctors.html" className="template-btn mr-3">find a doctor</a>
                                            <Link
                                                to="#"
                                                onClick={this.openModal}
                                                className="video-text-btn mfp-iframe video-play-btn">
                                                <span className="video-btn"><FiPlay /></span>
                                                <span> watch video</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
