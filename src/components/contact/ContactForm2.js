import React, { Component } from "react";
import { FiUser, FiBookOpen, FiEdit2 } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

export default class ContactForm2 extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:3001/contact", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <>
        <div className='team-form padding-top-45px'>
          <div className='user-form'>
            <div className='section-heading'>
              <h5 className='section__meta'>get in touch</h5>
              <h2 className='section__title font-size-20 font-weight-medium'>
                Contact with Us! for help
              </h2>
            </div>
            <div className='contact-form-action mt-4'>
              <form onSubmit={this.handleSubmit}>
                <div className='input-box'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Your Name'
                    />
                    <FiUser className='input-icon' />
                  </div>
                </div>
                <div className='input-box'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Email Address'
                    />
                    <FaRegEnvelope className='input-icon' />
                  </div>
                </div>
                <div className='input-box'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      id='subject'
                      name='subject'
                      placeholder='Subject'
                    />
                    <FiBookOpen className='input-icon' />
                  </div>
                </div>
                <div className='input-box'>
                  <div className='form-group'>
                    <textarea
                      className='message-control form-control'
                      name='message'
                      placeholder='Write Question Here'
                    ></textarea>
                    <FiEdit2 className='input-icon' />
                  </div>
                </div>
                <div className='btn-box'>
                  <div className='form-group text-center mb-0'>
                    <button
                      className='template-btn border-0 w-100'
                      type='submit'
                    >
                      Submit question?
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
