import React, { Component } from 'react'
import SectionTitle from '../../../components/common/SectionTitle'
import { FaGoogle, FaFacebookF, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {
    render() {
        return (
            <>
                <div className="login-form">
                    <div className="user-form">
                        <SectionTitle title="Login to Your Account" subtitle="Login Account">
                            <p className="font-size-16 mt-2">
                                with your social network, Note: Costar will never <br />
                                    post content to your social pages.</p>
                        </SectionTitle>
                        <div className="contact-form-action mt-4">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <button className="template-btn btn-bg-1 border-0 w-100" type="submit">
                                                <FaGoogle className="mr-2" /> Google
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <button className="template-btn btn-bg-2 border-0 w-100" type="submit">
                                                <FaFacebookF className="mr-2" /> Facebook
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <button className="template-btn btn-bg-3 border-0 w-100" type="submit">
                                                <FaTwitter className="mr-2" /> Twitter
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="account-assist mt-4 mb-4 text-center">
                                            <p className="account__desc">or</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                                <FaRegEnvelope className="input-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="text" placeholder="Password" />
                                                <FiLock className="input-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                                                <div>
                                                    <input type="checkbox" id="chb1" />
                                                    <label htmlFor="chb1" className="mb-0">Keep me logged in</label>
                                                </div>
                                                <div>
                                                    <Link to="/recover-pass" className="text-color-2 font-weight-medium ">Forgot password?</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="btn-box">
                                            <div className="form-group text-center mb-0">
                                                <button className="template-btn border-0 w-100" type="submit">login my account</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
