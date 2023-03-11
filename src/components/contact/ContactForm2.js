import React, { useState } from "react";
import { FiUser, FiBookOpen, FiEdit2 } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import axios from "axios";

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();

    const params = new URLSearchParams(formData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    };

    fetch("http://localhost/contact", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

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
            <form onSubmit={handleSubmit}>
              <div className='input-box'>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <FiEdit2 className='input-icon' />
                </div>
              </div>
              <div className='btn-box'>
                <div className='form-group text-center mb-0'>
                  <button className='template-btn border-0 w-100' type='submit'>
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
};

export default ContactForm2;
