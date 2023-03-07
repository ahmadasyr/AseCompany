import React, { Component } from 'react'
import ContactForm2 from '../ContactForm2'

export default class ContactFormLeft extends Component {
    render() {
        return (
            <div className="col-lg-7">
                <div className="user-form-wrap">
                    <ContactForm2 />
                </div>
            </div>
        )
    }
}
