import React, { Component } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default class ContactInfo extends Component {
  render() {
    return (
      <>
        <div className='col-lg-5'>
          <div className='contact-content pl-4'>
            <div className='contact-item mb-4'>
              <h3 className='widget-title font-size-20'>Contact information</h3>
              <ul className='list-items mt-3'>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Address:
                  </span>
                  Baghdad, IRAQ.
                </li>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Email:
                  </span>
                  <Link to='#'>Info@Ase-Group.Org</Link>
                </li>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Phone:
                  </span>
                  <Link to='#'>+964 770 0000 000</Link>
                </li>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Phone:
                  </span>
                  <Link to='#'>+964 780 0000 000</Link>
                </li>
              </ul>
            </div>
            <div className='section-block'></div>
            {/* <div className='contact-item mt-4 mb-4'>
              <h3 className='widget-title font-size-20'>Opening Hours</h3>
              <ul className='list-items mt-3'>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Monday:
                  </span>
                  8AM - 6AM
                </li>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Tuesday:
                  </span>
                  <Link to='#'>8AM - 6AM</Link>
                </li>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Wednesday:
                  </span>
                  <Link to='#'>8AM - 6AM</Link>
                </li>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Thursday:
                  </span>
                  <Link to='#'>8AM - 6AM</Link>
                </li>
                <li>
                  <span className='mr-1 font-weight-medium text-color'>
                    Friday - Sunday:
                  </span>
                  <Link to='#'>Closed</Link>
                </li>
              </ul>
            </div> */}
            <div className='section-block'></div>
            <div className='contact-item mt-4'>
              <h3 className='widget-title font-size-20'>Social Profile</h3>
              <ul className='social-links mt-3'>
                <li>
                  <a href='https://facebook.com'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com'>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com'>
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href='https://linkedin.com'>
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href='https://plus.google.com'>
                    <FaGooglePlusG />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
